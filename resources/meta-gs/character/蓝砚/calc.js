export const details = [{
  title: 'E翦月环伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['翦月环伤害'], 'e')
},{
  title: '护盾吸收量',
  dmg: ({ talent, calc, attr }, { shield }) => shield((talent.e['护盾吸收量2'][0] * calc(attr.atk) / 100 + talent.e['护盾吸收量2'][1] * 1) * 1)
},{
  title: 'Q技能单段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害2'][0], 'q')
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
export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '蓝砚天赋：元素战技与元素爆发造成的伤害值提升，提升值分别相当于蓝砚元素精通的[ePlus]和[qPlus]。',
  sort: 9,
  data: {
    ePlus: ({ attr, calc }) => calc(attr.mastery) * 309 / 100,
    qPlus: ({ attr, calc }) => calc(attr.mastery) * 774 / 100
  }
},{
  title: '蓝砚4命：施放元素爆发之后元素精通提升[mastery]',
  cons: 4,
  data: {
    mastery: 60
  }
}]

export const createdBy = '冰翼'