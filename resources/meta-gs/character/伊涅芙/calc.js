export const details = [{
  title: `E伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: `E放电伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.e['薇尔琪塔放电伤害'], 'e')
}, {
  title: `E护盾吸收量`,
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.e['护盾吸收量2'][0] * calc(attr.atk) / 100 + talent.e['护盾吸收量2'][1])
}, {
  title: `Q伤害`,
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: `单人天赋附加伤害`,
  params: { Lunar: true },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.atk) * 65 / 100, '', 'lunarCharged')
}, {
  title: '单人月感电伤害',
  params: { Lunar: true },
  dmg: ({}, { reaction }) => reaction('lunarCharged')
}, {
  check: ({ cons }) => cons >= 2,
  title: `单人2命附加伤害`,
  params: { Lunar: true },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.atk) * 300 / 100, '', 'lunarCharged')
}, {
  check: ({ cons }) => cons >= 6,
  title: `单人6命附加伤害`,
  params: { Lunar: true },
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.atk) * 135 / 100, '', 'lunarCharged')
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

export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '伊涅芙天赋：施放元素爆发后元素精通提升[mastery]',
  sort: 9,
  data: {
    mastery: ({ attr, calc }) => calc(attr.atk) * 6 / 100
  }
}, {
  check: ({ params }) => params.Lunar === true,
  title: '伊涅芙天赋：触发感电反应时转为触发月感电反应,基础伤害提升[fypct]%',
  sort: 9,
  data: {
    fypct: ({ attr, calc }) => Math.min((calc(attr.atk) / 100 * 0.7), 14)
  }
}, {
  check: ({ params }) => params.Lunar === true,
  title: '伊涅芙1命：展开护盾时月感电反应伤害提升[lunarCharged]%',
  sort: 9,
  cons: 1,
  data: {
    lunarCharged: ({ attr, calc }) => Math.min((calc(attr.atk) / 100 * 2.5), 50)
  }
}]

export const createdBy = 'liangshi'
