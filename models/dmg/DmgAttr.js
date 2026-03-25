import { eleBaseDmg } from './DmgCalcMeta.js'
import lodash from 'lodash'
import DmgMastery from './DmgMastery.js'
import { Format, Meta } from '#miao'
import AttrItem from './AttrItem.js'

let DmgAttr = {
  getAttrValue (ds = {}) {
    return (ds.base || 0) + (ds.plus || 0) + ((ds.base || 0) * (ds.pct || 0) / 100)
  },

  getAttr ({ originalAttr, attr = {}, weapon = {}, char = {}, game = 'gs' }) {
    let ret = {}
    if (originalAttr) {
      ret = lodash.merge({}, originalAttr)
    }

    lodash.forEach('atk,def,hp,speed'.split(','), (key) => {
      ret[key] = AttrItem.create(originalAttr?.[key] || {
        base: (attr?.[`${key}Base`] || 0) * 1,
        plus: (attr?.[key] || 0) * 1 - (attr?.[`${key}Base`] || 0) * 1,
        pct: 0
      })
    })

    lodash.forEach((game === 'gs' ? 'mastery,recharge,cpct,cdmg,heal,dmg,phy,coloringDmg' : 'recharge,cpct,cdmg,heal,dmg,enemydmg,effPct,effDef,stance,joy').split(','), (key) => {
      ret[key] = AttrItem.create(originalAttr?.[key] || {
        base: (attr?.[key] || 0) * 1,
        plus: 0,
        pct: 0,
        inc: 0
      })
    })

    lodash.forEach((game === 'gs' ? 'a,a2,a3,e,q,nightsoul' : 'a,a2,a3,e,e2,xe,q,q2,t,me,me2,mt,mt2,dot,break').split(','), (key) => {
      ret[key] = ret[key] || {
        pct: 0,
        multi: 0,
        plus: 0,
        dmg: 0,
        enemydmg: 0,
        cpct: 0,
        cdmg: 0,
        elevated: 0,
        def: 0,
        ignore: 0
      }
    })

    ret.enemy = ret.enemy || { def: 0, ignore: 0, phy: 0 }
    ret.shield = AttrItem.create(originalAttr?.shield || { base: 100, plus: 0, inc: 100 })

    if (!originalAttr) {
      ret.weapon = weapon
      ret.weaponTypeName = char.weaponTypeName
      ret.element = Format.elemName(char.elem)
      ret.refine = ((weapon.affix || ret.refine || 1) * 1 - 1) || 0
      ret.multi = 0
      ret.kx = 0
      ret.staticAttr = attr?.staticAttr || {}
      if (game === 'gs') {
        ret.elevated = 0
        ret.vaporize = 0
        ret.melt = 0
        ret.burning = 0
        ret.crystallize = 0
        ret.superConduct = 0
        ret.swirl = 0
        ret.electroCharged = 0
        ret.shatter = 0
        ret.overloaded = 0
        ret.bloom = 0
        ret.burgeon = 0
        ret.hyperBloom = 0
        ret.aggravate = 0
        ret.spread = 0
        ret.lunarCharged = 0
        ret.lunarBloom = 0
        ret.lunarCrystallize = 0
        ret.fykx = 0
        ret.fyinc = 0
        ret.fyplus = 0
        ret.fypct = 0
        ret.fybase = 0
      } else if (game === 'sr') {
        ret.sp = (char.sp || 0) * 1
        ret.superBreak = {
          ignore: 0
        }
        ret.joy = 0
      }
    }

    let { attrMap } = Meta.getMeta(game, 'arti')
    lodash.forEach(attrMap, (cfg, key) => {
      if (!ret[key]) {
        ret[key] = AttrItem.create({ base: 0, plus: 0, pct: 0, inc: 0 })
      }
    })

    return ret
  },

  getDs (attr, meta, params) {
    return {
      ...meta, attr, params, refine: attr.refine,
      weaponTypeName: attr.weaponTypeName,
      element: Format.elemName(attr.element) || attr.element,
      calc: DmgAttr.getAttrValue
    }
  },

  calcAttr ({ originalAttr, buffs, meta, artis, params = {}, incAttr = '', reduceAttr = '', talent = '', game = 'gs' }) {
    let attr = DmgAttr.getAttr({ originalAttr, game })
    attr.characterName = meta.characterName
    let msg = []
    let { attrMap } = Meta.getMeta(game, 'arti')

    if (incAttr && attrMap[incAttr]) {
      let aCfg = attrMap[incAttr]
      attr[incAttr] = attr[incAttr] || AttrItem.create({ base: 0, plus: 0, pct: 0, inc: 0 })
      attr[incAttr][aCfg.calc] += aCfg.value
    }
    if (reduceAttr && attrMap[reduceAttr]) {
      let aCfg = attrMap[reduceAttr]
      attr[reduceAttr] = attr[reduceAttr] || AttrItem.create({ base: 0, plus: 0, pct: 0, inc: 0 })
      attr[reduceAttr][aCfg.calc] -= aCfg.value
    }

    lodash.forEach(buffs, (buff) => {
      meta.mastery = meta.mastery || buff.mastery
    })
    lodash.forEach(buffs, (buff) => {
      let ds = DmgAttr.getDs(attr, meta, params)
      ds.currentTalent = talent
      ds.artis = artis

      if (buff.isStatic) return
      if (buff.check && !buff.check(ds)) return
      if (buff.cons && ds.cons * 1 < buff.cons * 1) return
      if (!lodash.isUndefined(buff.maxCons) && ds.cons * 1 > buff.maxCons * 1) return
      if (buff.tree && !ds.trees[`10${buff.tree}`]) return

      let title = typeof buff.title === "function" ? buff.title(ds) : buff.title

      if (buff.mastery) {
        let mKey = { vaporize: '蒸发', melt: '融化', swirl: '扩散' }
        let mKey2 = { aggravate: '超激化', spread: '蔓激化' }
        let mastery = Math.max(0, (attr.mastery?.base || 0) + (attr.mastery?.plus || 0))
        buff.data = buff.data || {}
        let key = buff.mastery
        if (mKey[key]) {
          buff.data['_' + key] = DmgMastery.getMultiple(key, mastery) * 100
        } else if (mKey2[key]) {
          let eleNum = DmgMastery.getBasePct(key, attr.element)
          let eleBase = 1 + (attr[key] || 0) / 100 + DmgMastery.getMultiple(key, mastery)
          eleBase *= eleBaseDmg[ds.level]
          buff.data['_' + key] = DmgMastery.getMultiple(key, mastery) * 100
          buff.data['_' + key + 'num'] = eleNum * eleBase
        }
      }

      lodash.forEach(buff.data, (val, key) => {
        if (lodash.isFunction(val)) val = val(ds)
        if (!val && val !== 0) return
        title = title.replace(`[${key}]`, Format.comma(val, 1))

        let tRet = /^(a|a2|a3|e|q|t|me|xe|mt|dot|break|nightsoul)(Def|Ignore|Dmg|Enemydmg|Plus|Pct|Cpct|Cdmg|Multi|Elevated)$/.exec(key)
        if (tRet) {
          if (attr[tRet[1]]) {
            attr[tRet[1]][tRet[2].toLowerCase()] += val * 1 || 0
          }
          return
        }

        let aRet = /^(mastery|cpct|cdmg|heal|recharge|dmg|enemydmg|phy|coloringDmg|shield|speed|stance|joy)(Plus|Pct|Inc)?$/.exec(key)
        if (aRet) {
          if (attr[aRet[1]]) {
            attr[aRet[1]][aRet[2] ? aRet[2].toLowerCase() : 'plus'] += val * 1 || 0
          }
          return
        }

        let bRet = /^(hp|def|atk)(Base|Plus|Pct|Inc)?$/.exec(key)
        if (bRet) {
          let bKey = bRet[1]
          let bType = bRet[2] ? bRet[2].toLowerCase() : 'plus'
          if (attr[bKey]) {
            attr[bKey][bType] += val * 1 || 0
            if (bRet[2] === 'Base' && attr.staticAttr?.[bKey]) {
              attr[bKey].plus += val * attr.staticAttr[bKey].pct / 100 || 0
            }
          }
          return
        }

        if (key === 'enemyDef') { attr.enemy.def += val * 1 || 0; return }
        if (key === 'ignore' || key === 'enemyIgnore') { attr.enemy.ignore += val * 1 || 0; return }

        if (['vaporize', 'melt', 'crystallize', 'burning', 'superConduct', 'swirl', 'electroCharged', 'shatter', 'overloaded', 'bloom', 'burgeon', 'hyperBloom', 'aggravate', 'spread', 'elevated', 'lunarCharged', 'lunarBloom', 'lunarCrystallize', 'kx', 'fykx', 'multi', 'fyplus', 'fypct', 'fybase', 'fyinc'].includes(key)) {
          attr[key] += val * 1 || 0
          return
        }

        let sRet = /^(superBreak)(Ignore)$/.exec(key)
        if (sRet) {
          if (attr[sRet[1]]) {
            attr[sRet[1]][sRet[2].toLowerCase()] += val * 1 || 0
          }
        }
      })
      msg.push(title)
    })

    return { attr, msg }
  }
}

export default DmgAttr