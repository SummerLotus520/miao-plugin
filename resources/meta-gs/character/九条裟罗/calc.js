export const details = [{
  title: 'E提升攻击力',
  dmg: ({ talent, attr }) => {
    return {
      avg: talent.e['攻击力加成比例'] * attr.atk.base / 100
    }
  }
}, {
  title: 'E后Q首段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['天狗咒雷·金刚坏 伤害'], 'q')
}, {
  title: 'E后Q每段',
  dmg: ({ talent }, dmg) => dmg(talent.q['天狗咒雷·雷砾 伤害'], 'q')
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
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '九条E技能：提升攻击力[atkPlus]',
  data: {
    atkPlus: ({ attr, talent }) => talent.e['攻击力加成比例'] * attr.atk.base / 100
  }
}, {
  title: '九条6命：提升60%雷元素爆伤',
  cons: 6,
  data: {
    cdmg: 60
  }
}]
