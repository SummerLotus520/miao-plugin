export const details = [{
  title: 'E每跳治疗',
  dmg: ({ talent, attr, calc }, { heal }) =>
    heal(talent.e['持续治疗量2'][0] * calc(attr.atk) / 100 + talent.e['持续治疗量2'][1] * 1)
}, {
  title: '度厄真符每次治疗',
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['治疗量2'][0] * calc(attr.atk) / 100 + talent.q['治疗量2'][1] * 1)
}, {
  title: '重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'phy')
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

export const mainAttr = 'atk,cpct,cdmg,heal'

export const buffs = [{
  title: '七七二命：对受冰元素影响的敌人普攻及重击伤害提升15%',
  cons: 2,
  data: {
    a2: 15
  }
}]
