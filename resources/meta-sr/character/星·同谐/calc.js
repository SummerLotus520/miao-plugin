import { Format } from '#miao'

export const details = [{
  title: '战技伤害',
  dmg: ({ talent, cons }, dmg) => {
    let count = cons < 6 ? 5 : 7
    return dmg(talent.e['技能伤害'] * count, 'e')
  }
}, {
  title: '终结技提高全队击破特攻',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['击破特攻提高']),
      type: 'text'
    }
  }
}, {
  title: '4魂提高队友击破特攻',
  params: { q: true },
  cons: 4,
  dmg: ({ attr }) => {
    return {
      avg: Format.percent(attr.stance / 100 * 0.15),
      type: 'text'
    }
  }
}, {
  title: '普攻·超击破伤害',
  params: { q: true },
  dmg: ({ trees }, { reaction }) => {
    let extraDmg = trees['101'] ? 1.6 : 1
    return {
      avg: reaction('superBreak').avg / 0.9 * extraDmg
    }
  }
}, {
  title: '战技·超击破伤害',
  dmgKey: 'e',
  params: { q: true },
  dmg: ({ cons, trees }, { reaction }) => {
    let cost = (cons < 6 ? 3 : 4) + (trees['102'] ? 1 : 0)
    let extraDmg = trees['101'] ? 1.6 : 1
    return {
      avg: reaction('superBreak').avg / 0.9 * cost * extraDmg
    }
  }
},
{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.hp) * 1) })
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.atk) * 1) })
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.def) * 1) })
}, {
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) })
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) })
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) })
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '当前遗器套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]

export const mainAttr = 'atk,stance'
export const defDmgKey = 'e'

export const buffs = [{
  title: '终结技Buff：我方全体击破特攻提高[stance]%',
  data: {
    stance: ({ talent }) => talent.q['击破特攻提高'] * 100
  }
}, {
  title: '行迹-卫我起舞：场上敌方数量为1时，超击破伤害提高60%',
  tree: 1
}, {
  title: '开拓者6命：战技的额外伤害次数增加2次',
  cons: 6
}]

export const createdBy = 'Aluxes'
