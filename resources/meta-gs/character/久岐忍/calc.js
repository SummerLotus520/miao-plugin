export const details = [{
  title: '超绽放伤害',
  dmg: ({ calc, attr }, { reaction }) => {
    return reaction('hyperBloom')
  }
}, {
  title: 'E释放伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: 'E每跳治疗',
  dmg: ({ talent, calc, attr }, { heal }) => {
    let ec = talent.e['越祓草轮治疗量2']
    return heal(calc(attr.hp) * ec[0] / 100 + ec[1] * 1 + calc(attr.mastery) * 0.75)
  }
}, {
  title: 'Q每跳伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.q['单次伤害'] * calc(attr.hp) / 100, 'q')
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

export const defDmgIdx = 0
export const mainAttr = 'hp,atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '久岐忍被动：生命低于50%时提高治疗加成15%',
  data: {
    heal: 15
  }
}, {
  title: '久岐忍被动：基于元素精通提高治疗量[healNum]，伤害[ePlus]',
  sort: 9,
  data: {
    healNum: ({ attr, calc }) => calc(attr.mastery) * 0.75,
    ePlus: ({ attr, calc }) => calc(attr.mastery) * 0.25
  }
}]