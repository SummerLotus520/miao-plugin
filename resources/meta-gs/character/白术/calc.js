export const details = [{
  title: 'E每跳治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['治疗量2'][0] / 100 + talent.e['治疗量2'][1])
}, {
  title: '2命·E+额外治疗量',
  cons: 2,
  dmg: ({ talent, calc, attr }, { heal }) => heal((calc(attr.hp) * talent.e['治疗量2'][0] / 100 + talent.e['治疗量2'][1]) * 1.2)
}, {
  title: 'Q每跳治疗量',
  dmg: ({ talent, calc, attr }, { heal }) =>
    heal(talent.q['无郤气护盾治疗量2'][0] * calc(attr.hp) / 100 + talent.q['无郤气护盾治疗量2'][1])
}, {
  title: 'Q每跳护盾吸收量',
  dmg: ({ talent, calc, attr }, { shield }) => shield(talent.q['无郤气护盾吸收量2'][0] * calc(attr.hp) / 100 + talent.q['无郤气护盾吸收量2'][1])
}, {
  title: 'Q每跳伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['灵气脉技能伤害'], 'q')
}, {
  title: 'Q每跳激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['灵气脉技能伤害'], 'q', 'spread')
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
  cons: 4,
  title: '白术4命：释放Q之后，队伍中附近所有角色元素精通提升80点',
  data: {
    mastery: 80
  }
}, {
  cons: 6,
  title: '白术6命：基于生命值上限的8%，灵气脉造成的伤害提高[qPlus]',
  sort: 9,
  data: {
    qPlus: ({ attr, calc }) => calc(attr.hp) * 0.08
  }
}, 'spread']
