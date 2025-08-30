export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
  params: { qBuff: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '3层奥迹持续伤害',
  params: { qBuff: true },
  dmg: ({ talent }, dmg) => {
    const td = talent.t['持续伤害'] + talent.t['倍率提高'] * 3
    return dmg(td, 'dot', 'skillDot')
  }
}, {
  title: '7层奥迹持续伤害',
  params: { ignoreDef: true, qBuff: true },
  dmg: ({ talent }, dmg) => {
    const td = talent.t['持续伤害'] + talent.t['倍率提高'] * 7
    return dmg(td, 'dot', 'skillDot')
  }
}, {
  title: '50层奥迹持续伤害',
  params: { ignoreDef: true, qBuff: true },
  dmg: ({ talent }, dmg) => {
    const td = talent.t['持续伤害'] + talent.t['倍率提高'] * 50
    return dmg(td, 'dot', 'skillDot')
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

export const mainAttr = 'atk,cpct,cdmg,dmg,effPct'
export const defDmgIdx = 4

export const buffs = [{
  title: '行迹-烛影朕兆：基于效果命中，提高造成的伤害[dmg]%',
  tree: 3,
  data: {
    dmg: ({ attr }) => Math.min(attr.effPct * 0.6, 72),
  }
}, {
  title: '战技：使得目标防御力降低[enemyDef]%',
  data: {
    enemyDef: ({ talent }) => talent.e['防御力降低'] * 100,
  }
}, {
  title: '终结技：【揭露】状态下，目标受到的伤害提高[enemydmg]%',
  check: ({ params }) => params.qBuff === true,
  data: {
    enemydmg: ({ talent }) => talent.q['伤害提高'] * 100,
  }
}, {
  title: '奥迹：层数大于等于7层时，造成的持续伤害无视目标防御力[dotIgnore]%',
  check: ({ params }) => params.ignoreDef === true,
  data: {
    dotIgnore: 20,
  }
}, {
  title: '黑天鹅1命：敌方抗性降低[kx]%',
  cons: 1,
  data: {
    kx: 25,
  }
}]

export const createdBy = 'Aluxes'
