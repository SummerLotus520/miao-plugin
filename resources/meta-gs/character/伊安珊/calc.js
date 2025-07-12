export const details = [{
  title: '雷霆飞缒伤害',
  dmg: ({ talent, attr }, dmg) => dmg(talent.a['雷霆飞缒伤害'], 'a2,nightsoul')
},{
  title: 'E技能伤害',
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['技能伤害'], 'e,nightsoul')
},{
  title: 'E后Q技能伤害',
  params: { Precise_Movement: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},{
  title: '动能标示攻击力最多提升',
  params: { Precise_Movement: true },
  dmg: ({ talent, calc, attr }) => {
    return {
      avg: Math.min(calc(attr.atk) * 27 / 100, talent.q['最大攻击力加成'])
    }
  }
},{
  title: '「热身效应」每跳治疗',
  dmg: ({ calc, attr }) => {
    return {
      avg: calc(attr.atk) * 60 / 100
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

export const defParams = { Nightsoul: true }
export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ params }) => params.Precise_Movement === true,
  title: '伊安珊天赋：「雷霆飞缒」命中敌人后，伊安珊的攻击力提升[atkPct]%',
  data: {
    atkPct: 20
  }
},{
  title: '伊安珊6命：若夜魂值恢复量溢出，使队伍中自己的当前场上角色造成的伤害提升[dmg]%',
  cons: 6,
  data: {
    dmg: 25
  }
}]

export const createdBy = '冰翼'
