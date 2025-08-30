import { Format } from '#miao'

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技提升攻击力',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.e['攻击力提高']),
      type: 'text'
    }
  }
}, {
  title: '终结技提升暴击率',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['暴击率提高']),
      type: 'text'
    }
  }
}, {
  title: '终结技提升暴击伤害',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['暴击伤害提高']),
      type: 'text'
    }
  }
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 2

export const buffs = [{
  title: '战技-天阙鸣弦：攻击力提高[atkPct]%',
  data: {
    atkPct: ({ talent }) => talent.e['攻击力提高'] * 100
  }
}, {
  title: '终结技-贯云饮羽：暴击率提高[cpct]%，暴击伤害提高[cdmg]%',
  data: {
    cpct: ({ talent }) => talent.q['暴击率提高'] * 100,
    cdmg: ({ talent }) => talent.q['暴击伤害提高'] * 100
  }
}, {
  title: '行迹-迟彝：造成虚数伤害提高[dmg]%',
  tree: 1,
  data: {
    dmg: 12
  }
}, {
  title: '驭空1命：速度提高[speedPct]%',
  cons: 1,
  data: {
    speedPct: 10
  }
}, {
  title: '驭空4命：造成伤害提高[dmg]%',
  cons: 4,
  data: {
    dmg: 30
  }
}]

export const createdBy = 'Aluxes'
