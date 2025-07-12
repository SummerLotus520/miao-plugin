export const details = [{
  title: '冲天转转主动伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['冲天转转搭乘伤害'] / 100, 'e,nightsoul')
}, {
  title: '冲天转转自动伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.e['冲天转转独立伤害'] / 100, 'e,nightsoul')
}, {
  title: 'Q释放伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.def) * talent.q['技能伤害'] / 100, 'q')
}, {
  check: ({ cons }) => cons >= 6,
  title: '护盾替换摧毁伤害',
  dmg: ({ calc, attr }, { basic }) => basic(calc(attr.def) * 200 / 100, '')
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
export const mainAttr = 'def,cpct,cdmg,mastery'

export const buffs = [{
  title: '卡齐娜天赋：附近的角色触发「夜魂迸发」,岩元素伤害提升[dmg]%。',
  data: {
    dmg: 20
  }
}, {
  title: '卡齐娜天赋：冲天转转造成的伤害提升[ePlus]%。',
  sort: 9,
  data: {
    ePlus: ({ calc, attr }) => calc(attr.def) * 20 / 100 ,
    qPlus: ({ calc, attr }) => calc(attr.def) * 20 / 100
  }
}, {
  title: '卡齐娜4命：领域中的队伍中当前场上角色的防御力提升[defPct]%',
  cons: 4,
  data: {
    defPct: 20
  }
}]

export const createdBy = 'liangshi'

