/*
* 伤害计算 - 属性计算
* */
import { eleBaseDmg } from './DmgCalcMeta.js'
import lodash from 'lodash'
import DmgMastery from './DmgMastery.js'
import { Format, Meta } from '#miao'
import AttrItem from './AttrItem.js'

let DmgAttr = {
  getAttrValue (ds = {}) {
    return (ds.base || 0) + (ds.plus || 0) + ((ds.base || 0) * (ds.pct || 0) / 100)
  },

  getAttr ({ originalAttr, attr, weapon, char, game = 'gs' }) {
    let ret = {}
    if (originalAttr) {
      ret = lodash.merge({}, originalAttr)
    }

    // 基础属性
    lodash.forEach('atk,def,hp,speed'.split(','), (key) => {
      ret[key] = AttrItem.create(originalAttr?.[key] || {
        base: attr[`${key}Base`] * 1 || 0,
        plus: attr[key] * 1 - attr[`${key}Base`] * 1 || 0,
        pct: 0
      })
    })

    lodash.forEach((game === 'gs' ? 'mastery,recharge,cpct,cdmg,heal,dmg,phy' : 'recharge,cpct,cdmg,heal,dmg,enemydmg,effPct,effDef,stance').split(','), (key) => {
      ret[key] = AttrItem.create(originalAttr?.[key] || {
        base: attr[key] * 1 || 0,
        plus: 0,
        pct: 0,
        inc: 0
      })
    })

    lodash.forEach((game === 'gs' ? 'a,a2,a3,e,q,nightsoul' : 'a,a2,a3,e,e2,q,q2,t,dot,break').split(','), (key) => {
      ret[key] = ret[key] || {
        pct: 0, // 倍率加成
        multi: 0, // 独立倍率乘区加成，宵宫E等

        plus: 0, // 伤害值提高
        dmg: 0, // 伤害提高
        enemydmg: 0, // 承受伤害提高
        cpct: 0, // 暴击提高
        cdmg: 0, // 爆伤提高

        elevated: 0, // 擢升

        def: 0, // 防御降低
        ignore: 0 // 无视防御
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
      ret.staticAttr = attr.staticAttr
      if (game === 'gs') {
        ret.elevated = 0 // 擢升
        ret.vaporize = 0 // 蒸发
        ret.melt = 0 // 融化
        ret.burning = 0 // 燃烧
        ret.crystallize = 0 // 结晶
        ret.superConduct = 0 // 超导
        ret.swirl = 0 // 扩散
        ret.electroCharged = 0 // 感电
        ret.shatter = 0 // 碎冰
        ret.overloaded = 0 // 超载
        ret.bloom = 0 // 绽放
        ret.burgeon = 0 // 烈绽放
        ret.hyperBloom = 0 // 超绽放
        ret.aggravate = 0 // 超激化
        ret.spread = 0 // 蔓激化
        ret.lunarCharged = 0 // 月感电
        ret.lunarBloom = 0 // 月绽放
        ret.fykx = 0 // 敌人反应抗性降低
        ret.fyplus = 0 // 反应伤害值提升
        ret.fypct = 0 // 反应基础伤害加成
        ret.fybase = 0 // 反应基础伤害值提升
      } else if (game === 'sr') {
        ret.sp = char.sp * 1
        ret.superBreak = { ignore: 0 }
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

      let title = buff.title
      if (buff.mastery) {
        let mKey = { vaporize: '蒸发', melt: '融化', swirl: '扩散' }
        let mKey2 = { aggravate: '超激化', spread: '蔓激化' }
        let mastery = Math.max(0, attr.mastery.base + attr.mastery.plus)
        buff.data = buff.data || {}
        let key = buff.mastery
        if (mKey[key]) {
          buff.data['_' + key] = DmgMastery.getMultiple(key, mastery) * 100
        } else if (mKey2[key]) {
          let eleNum = DmgMastery.getBasePct(key, attr.element)
          let eleBase = 1 + attr[key] / 100 + DmgMastery.getMultiple(key, mastery)
          eleBase *= eleBaseDmg[ds.level]
          buff.data['_' + key] = DmgMastery.getMultiple(key, mastery) * 100
          buff.data['_' + key + 'num'] = eleNum * eleBase
        }
      }

      lodash.forEach(buff.data, (val, key) => {
        if (lodash.isFunction(val)) val = val(ds)
        if (!val && val !== 0) return
        title = title.replace(`[${key}]`, Format.comma(val, 1))

        // 技能提高
        let tRet = /^(a|a2|a3|e|q|t|dot|break|nightsoul)(Def|Ignore|Dmg|Enemydmg|Plus|Pct|Cpct|Cdmg|Multi|Elevated)$/.exec(key)
        if (tRet) {
          attr[tRet[1]][tRet[2].toLowerCase()] += val * 1 || 0
          return
        }

        let aRet = /^(mastery|cpct|cdmg|heal|recharge|dmg|enemydmg|phy|shield|speed|stance)(Plus|Pct|Inc)?$/.exec(key)
        if (aRet) {
          attr[aRet[1]][aRet[2] ? aRet[2].toLowerCase() : 'plus'] += val * 1 || 0
          return
        }

        let bRet = /^(hp|def|atk)(Base|Plus|Pct|Inc)?$/.exec(key)
        if (bRet) {
          attr[bRet[1]][bRet[2] ? bRet[2].toLowerCase() : 'plus'] += val * 1 || 0
          if (bRet[2] === 'Base') attr[bRet[1]].plus += val * attr.staticAttr[bRet[1]].pct / 100 || 0
          return
        }

        if (key === 'enemyDef') { attr.enemy.def += val * 1 || 0; return }
        if (key === 'ignore' || key === 'enemyIgnore') { attr.enemy.ignore += val * 1 || 0; return }

        if (['vaporize', 'melt', 'crystallize', 'burning', 'superConduct', 'swirl', 'electroCharged', 'shatter', 'overloaded', 'bloom', 'burgeon', 'hyperBloom', 'aggravate', 'spread', 'elevated', 'lunarCharged', 'lunarBloom', 'kx', 'fykx', 'multi', 'fyplus', 'fypct', 'fybase'].includes(key)) {
          attr[key] += val * 1 || 0
          return
        }

        let sRet = /^(superBreak)(Ignore)$/.exec(key)
        if (sRet) {
          attr[sRet[1]][sRet[2].toLowerCase()] += val * 1 || 0
        }
      })
      msg.push(title)
    })

    return { attr, msg }
  }
}

export default DmgAttr
