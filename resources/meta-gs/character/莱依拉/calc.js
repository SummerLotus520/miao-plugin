export const details = [{
  title: '满层E护盾量',
  dmg: ({ attr, calc, talent, cons }, { shield }) => {
    const sheildPlus = cons >= 1 ? 1.2 : 1
    return shield((calc(attr.hp) * talent.e['护盾基础吸收量2'][0] / 100 + talent.e['护盾基础吸收量2'][1]) * sheildPlus)
  }
}, {
  title: 'E飞星单伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['飞星伤害'], 'e')
}, {
  title: 'Q星光弹伤害',
  dmg: ({ attr, calc, talent }, { basic }) => basic(calc(attr.hp) * talent.q['星光弹伤害'] / 100)
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
  title: '莱依拉1命：安眠帷幕护盾的伤害吸收量提高20%',
  cons: 1,
  data: {
    _shield: 20
  }
}, {
  title: '莱依拉6命：飞星与星光弹造成的伤害提升40%',
  cons: 6,
  data: {
    eDmg: 40,
    qDmg: 40
  }
}, {
  title: '莱依拉被动：满层护盾强效提升24%',
  data: {
    shield: 24
  }
}, {
  title: '莱依拉被动：飞星造成的伤害值基于生命值提高[ePlus]',
  sort: 9,
  data: {
    ePlus: ({ attr, calc }) => calc(attr.hp) * 0.015
  }
}]
