export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '强化普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
}, {
  title: '战技生命回复',
  dmg: ({ talent }, { heal }) => heal(talent.e['生命值回复'])
}, {
  title: '天赋生命回复',
  dmg: ({ talent }, { heal }) => heal(talent.t['生命值回复'])
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
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) })
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) })
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) })
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '当前遗器套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]

export const mainAttr = 'atk,heal,stance'
export const defDmgIdx = 3

export const buffs = [{
  title: '行迹-崭新配方：基于自身击破特攻，提高治疗量[heal]%',
  tree: 1,
  sort: 9,
  data: {
    heal: ({ attr }) => Math.min(attr.stance * 0.5, 75)
  }
}, {
  title: '天赋-鏖战正酣：终结技Debuff使敌方受到的击破伤害提高[breakEnemydmg]%',
  data: {
    breakEnemydmg: ({ talent }) => talent.t['击破伤害提高'] * 100
  }
}, {
  title: '加拉赫1命：效果抵抗提高[effDef]%',
  cons: 1,
  data: {
    effDef: 50
  }
}, {
  title: '加拉赫6命：击破特攻提高[stance]%',
  cons: 6,
  data: {
    stance: 20
  }
}]

export const createdBy = 'Aluxes'
