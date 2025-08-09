import { Format } from '#miao'

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技提高单体速度',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['速度提升']),
      type: 'text'
    }
  }
}, {
  title: '终结技提高单体攻击力',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['速度提升']),
      type: 'text'
    }
  }
}, {
  title: '天赋提高AEQ伤害',
  dmg: ({ talent, cons }) => {
    let extraTd = cons < 6 ? 0 : 0.1
    return {
      avg: Format.percent(talent.t['伤害提高'] + extraTd),
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

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,dmg'

export const buffs = [{
  title: '天赋-罚恶：对战技标记的敌人造成的普攻、战技、终结技伤害提高[_dmg]%',
  data: {
    _dmg: ({ talent }) => talent.t['伤害提高'] * 100,
    aDmg: ({ talent }) => talent.t['伤害提高'] * 100,
    eDmg: ({ talent }) => talent.t['伤害提高'] * 100,
    qDmg: ({ talent }) => talent.t['伤害提高'] * 100
  }
}, {
  title: '寒鸦2命：释放战技后，速度提高[speedPct]%',
  cons: 2,
  data: {
    speedPct: 20
  }
}, {
  title: '寒鸦6命：天赋的伤害提高效果额外提高[_dmg]%',
  cons: 6,
  data: {
    _dmg: 10,
    aDmg: 10,
    eDmg: 10,
    qDmg: 10
  }
}]

export const createdBy = 'Aluxes'
