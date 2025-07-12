import { Format } from '#miao'

export const details = [{
  title: '战技提高目标伤害（无召唤物）',
  dmg: ({ talent, attr, cons }) => {
    return {
      avg: Format.percent(talent.e['造成的伤害提高']),
      type: 'text'
    }
  }
}, {
  title: '战技提高目标伤害（有召唤物）',
  dmg: ({ talent, attr, cons }) => {
    return {
      avg: Format.percent(talent.e['造成的伤害提高'] * (1 + talent.e['增伤额外提高'])),
      type: 'text'
    }
  }
}, {
  title: '战技提高目标暴击率',
  dmg: ({ talent, attr, cons }) => {
    return {
      avg: Format.percent(talent.t['暴击率提高'] * (cons >= 6 ? 3 : 1)),
      type: 'text'
    }
  }
}, {
  title: '终结技提高暴击伤害',
  dmg: ({ talent, attr, cons }) => {
    return {
      avg: Format.percent(talent.q['爆伤提高·百分比'] * attr.cdmg / 100 + talent.q['爆伤提高·固定值']),
      type: 'text'
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

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg'

export const createdBy = '五里徘徊'