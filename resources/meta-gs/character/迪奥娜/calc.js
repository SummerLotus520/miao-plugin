export const details = [{
  title: '长按E总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['猫爪伤害'] * 5, 'e')
}, {
  title: '长按E护盾量',
  dmg: ({ talent, attr, calc, cons }, { shield }) => {
    const sheildPlus = cons >= 2 ? 1.15 : 1
    return shield((talent.e['护盾基础吸收量2'][0] * calc(attr.hp) / 100 + talent.e['护盾基础吸收量2'][1] * 1) * 1.75 * sheildPlus)
  }

}, ({ cons }) => {
  return {
    title: `${cons === 6 ? '半血' : ''}Q每跳治疗`,
    dmg: ({ talent, calc, attr }, { heal }) =>
      heal(talent.q['持续治疗量2'][0] * calc(attr.hp) / 100 + talent.q['持续治疗量2'][1] * 1)
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

export const defDmgIdx = 1
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '迪奥娜天赋：长按E获得75%护盾吸收量加成',
  data: {
    _shield: 75
  }
}, {
  title: '迪奥娜2命：猫爪冻冻造成的伤害提高15%，护盾吸收量提高15%',
  cons: 2,
  data: {
    eDmg: 15,
    _shield: 15
  }
}, {
  title: '迪奥娜6命：生命值低于50%时受治疗加成提升30%',
  cons: 6,
  data: {
    heal: 30
  }
}]
