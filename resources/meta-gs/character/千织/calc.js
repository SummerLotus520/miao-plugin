export const details = [{
  title: 'E后普攻一段',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
},{
  title: 'E突刺伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['上挑攻击伤害2'][0] * attr.atk / 100 + talent.e['上挑攻击伤害2'][1] * attr.def / 100 , 'e')
},{
  title: 'E人偶伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.e['袖伤害2'][0] * attr.atk / 100 + talent.e['袖伤害2'][1] * attr.def / 100 , 'e')
},{
  title: '2命人偶切斩伤害',
  check: ({ cons }) => cons >= 2,
  dmg: ({ talent, attr }, { basic }) => basic( ( talent.e['袖伤害2'][0] * attr.atk / 100 + talent.e['袖伤害2'][1] * attr.def / 100 ) * 1.7 , 'e')
},{
  title: 'Q伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害2'][0] * attr.atk / 100 + talent.q['技能伤害2'][1] * attr.def / 100 , 'q')
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

export const defDmgIdx = 2
export const mainAttr = 'atk,def,cpct,cdmg,dmg'

export const buffs = [{
  title: '千织天赋：队伍中角色创造岩造物时，获得[dmg]%岩伤加成',
  data: {
    dmg: 20
  }
},{
  title: '千织6命：普攻造成的伤害提升[aPlus]',
  sort: 9,
  cons: 6,
  data: {
    aPlus: ({ attr }) => attr.def * 235 / 100
  }
}]

export const createdBy = 'liangshi'
