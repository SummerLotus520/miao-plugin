import { Format } from '#miao'

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技提升全体伤害',
  dmg: ({ talent }, dmg) => {
    return {
      avg: Format.percent(talent.e['伤害提高']),
      type: 'text'
    }
  }
}, {
  title: '终结技提升全体攻击力',
  dmg: ({ talent, attr }, dmg) => {
    return {
      avg: talent.q['攻击力提高百分比'] * attr.atk + talent.q['攻击力提高固定值']
    }
  }
}, {
  title: '终结技附加伤害',
  params: { q: true },
  dmg: ({ talent, cons }, dmg) => {
    // 暴击伤害固定为150%（6命时为600%），且伤害必定暴击
    let cdmgNum = cons < 6 ? 1.5 : 6
    let { avg } = dmg(talent.q['附加伤害'], '', 'skillDot') // 无双爆区近似
    return {
      avg: avg * (1 + cdmgNum)
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

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 3

export const buffs = [{
  title: '天赋-调性合颂：我方全体暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.t['暴伤提高'] * 100
  }
}, {
  title: '战技Buff：我方全体伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.e['伤害提高'] * 100
  }
}, {
  title: '终结技Buff：我方全体攻击力提高[atkPlus]',
  check: ({ params }) => params.q === true,
  sort: 9,
  data: {
    atkPlus: ({ talent, attr }) => talent.q['攻击力提高百分比'] * attr.atk + talent.q['攻击力提高固定值']
  }
}, {
  title: '知更鸟1命：我方全体全属性抗性穿透提高[kx]%',
  check: ({ params }) => params.q === true,
  cons: 1,
  data: {
    kx: 24
  }
}, {
  title: '知更鸟2命：我方全体速度提高[speedPct]%',
  check: ({ params }) => params.q === true,
  cons: 2,
  data: {
    speedPct: 16
  }
}, {
  title: '知更鸟4命：我方全体效果抵抗提高[effDef]%',
  cons: 4,
  data: {
    effDef: 50
  }
}, {
  title: '知更鸟6命：终结技造成的附加伤害的暴击伤害额外提高450%',
  check: ({ params }) => params.q === true,
  cons: 6
}]

export const createdBy = 'Aluxes'
