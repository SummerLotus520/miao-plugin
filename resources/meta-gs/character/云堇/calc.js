export const details = [{
  title: 'Q提供普攻基础伤害',
  dmg: ({ talent, attr }) => {
    return {
      avg: (talent.q['伤害值提升'] / 100 + 0.115) * attr.def
    }
  }
}, {
  title: '二段蓄力E伤害',
  dmg: ({ talent, attr }, { basic }) => {
    let ret = talent.e['二段蓄力伤害'] / 100 * attr.def
    return basic(ret, 'e')
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

export const mainAttr = 'atk,def,cpct,cdmg'

export const buffs = [{
  title: '云堇被动：队伍存在4元素类型角色时，Q提供的普攻伤害提高[_q]',
  sort: 9,
  data: {
    _q: ({ attr }) => {
      return attr.def * 0.115
    }
  }
}]
