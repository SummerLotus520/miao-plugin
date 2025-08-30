export const details = [{
  title: 'E秘药弹伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['秘药弹伤害'], 'e,nightsoul')
}, {
  title: 'E秘药弹治疗量',
  dmg: ({ talent, attr }, { heal }) => {
    return heal(talent.e['秘药弹命中治疗量2'][0] / 100 * attr.mastery + talent.e['秘药弹命中治疗量2'][1])
  }
}, {
  title: 'Q技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul')
}, {
  title: "Q镇静标记伤害",
  dmg: ({ talent }, dmg) => dmg(talent.q['镇静标记伤害'], 'q,nightsoul')
}, {
  title: '扩散反应伤害',
  dmg: ({}, { reaction }) => reaction('swirl')
}, {
  title: '6命额外秘药弹伤害',
  cons: 6,
  dmg: ({}, dmg) => dmg(120, 'a,nightsoul')
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
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.mastery) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.shield) * 1) })
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]

export const defParams = { Nightsoul: true }
export const defDmgIdx = 0
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '伊法4命：施放元素爆发后，伊法的元素精通提升[mastery]点',
  cons: 4,
  data: {
    mastery: 100
  }
}]

export const createdBy = '冰翼'
