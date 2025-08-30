export const details = [{
  title: 'E护盾吸收',
  dmg: ({ attr, calc, talent }, { shield }) =>
    shield(calc(attr.hp) * talent.e['护盾吸收量2'][0] / 100 + talent.e['护盾吸收量2'][1])
}, {
  title: '蓄力E伤害',
  dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.hp) * talent.e['蓄力完成伤害'] / 100)
}, {
  title: 'Q提升普攻伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: 20 + Math.floor(calc(attr.hp) / 1000) * 0.5,
      unit: '%'
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

export const mainAttr = 'hp,atk,cpct,cdmg'

export const buffs = [{
  title: '坎蒂丝2命：E命中敌人提升20%生命值',
  cons: 2,
  data: {
    hpPct: 20
  }
}, {
  title: '坎蒂丝被动：Q伤害加成基于生命值上限提升[_a]%',
  sort: 9,
  data: {
    _a: ({ attr, calc }) => Math.floor(calc(attr.hp) / 1000) * 0.5
  }
}]
