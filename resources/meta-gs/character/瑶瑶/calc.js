export const details = [{
  title: 'E每跳治疗',
  dmg: ({ talent, calc, attr }, { heal }) =>
    heal(talent.e['白玉萝卜治疗量2'][0] * calc(attr.hp) / 100 + talent.e['白玉萝卜治疗量2'][1])
}, {
  title: 'E每跳伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['白玉萝卜伤害'], 'e')
}, {
  title: 'Q每跳治疗',
  dmg: ({ talent, calc, attr }, { heal }) =>
    heal(talent.q['桂子仙机白玉萝卜治疗量2'][0] * calc(attr.hp) / 100 + talent.q['桂子仙机白玉萝卜治疗量2'][1])
}, {
  title: '萝卜炸裂天赋治疗',
  dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 0.8 / 100)
}, {
  title: '6命大萝卜治疗',
  cons: 6,
  dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 7.5 / 100)
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

export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '瑶瑶1命：萝卜炸裂获得15%草伤加成',
  cons: 1,
  data: {
    dmg: 15
  }
}, {
  title: '瑶瑶4命：释放E或Q后，提升元素精通[mastery]点',
  cons: 4,
  sort: 5,
  data: {
    mastery: ({ calc, attr }) => calc(attr.hp) * 0.3 / 100
  }
}]
