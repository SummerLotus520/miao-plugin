export const details = [{
  title: '仙力助推下落攻击伤害提升值',
  dmg: ({ attr, cons }) => {
    return {
      avg: cons < 2 ? Math.min(attr.atk * 2, 9000) : Math.min(attr.atk * 4, 18000)
    }
  }
}, {
  title: 'E释放伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: 'E一段跳冲击波伤害',
  params: { btt: 1 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][0], 'a3')
}, {
  title: 'E二段跳冲击波伤害',
  params: { btt: 2 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][1], 'a3')
}, {
  title: 'E三段跳冲击波伤害',
  params: { btt: 3 },
  dmg: ({ talent }, dmg) => dmg(talent.e['闲云冲击波伤害'][2], 'a3')
}, {
  title: 'Q释放伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q释放治疗量',
  dmg: ({ attr, talent }, { heal }) => heal(talent.q['治疗量2'][0] * attr.atk / 100 + talent.q['治疗量2'][1])
}, {
  title: 'Q持续治疗量',
  dmg: ({ attr, talent }, { heal }) => heal(talent.q['持续治疗量2'][0] * attr.atk / 100 + talent.q['持续治疗量2'][1])
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
export const mainAttr = 'atk,cpct,cdmg,heal'

export const buffs = [{
  title: '闲云天赋：Q后下落攻击坠地冲击造成的伤害提升[a3Plus]',
  sort: 9,
  data: {
    a3Plus: ({ attr, cons }) => cons < 2 ? Math.min(attr.atk * 2, 9000) : Math.min(attr.atk * 4, 18000)
  }
}, {
  title: '闲云2命：施放E后，攻击力提升[atkPct]%',
  cons: 2,
  data: {
    atkPct: 20
  }
}, {
  check: ({ params }) => params.btt !== undefined,
  title: '闲云6命：施展了[buffCount]次步天梯,闲云冲击波的暴击伤害提升[a3Cdmg]%',
  cons: 6,
  data: {
    buffCount: ({ params }) => params.btt,
    a3Cdmg: ({ params }) => (5 / 3) * Math.pow(params.btt, 3) - (5 / 2) * Math.pow(params.btt, 2) + (95 / 6) * params.btt
  }
}]

export const createdBy = 'liangshi'
