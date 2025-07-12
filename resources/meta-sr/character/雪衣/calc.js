export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害·主目标',
  dmg: ({ talent }, dmg) => dmg(talent.e['单体伤害'], 'e')
}, {
  title: '战技伤害·副目标',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '追击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['追加攻击单次伤害'] * 3, 't')
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

export const mainAttr = 'atk,cpct,cdmg,stance'
export const defDmgIdx = 4

export const buffs = [{
  title: '终结技-天罚贯身：终结技伤害提高[qDmg]%',
  data: {
    qDmg: ({ talent }) => talent.q['伤害提高上限'] * 100
  }
}, {
  title: '行迹-预兆机杼：基于击破特攻，提高造成的伤害[dmg]%',
  tree: 1,
  sort: 9,
  data: {
    dmg: ({ attr }) => Math.min(attr.stance, 240)
  }
}, {
  title: '行迹-摧锋轴承：对韧性大于等于其自身上限50%的敌人，释放终结技造成的伤害提高[qDmg]%',
  tree: 2,
  data: {
    qDmg: 10
  }
}, {
  title: '雪衣1命：天赋的追加攻击造成的伤害提高[tDmg]%',
  cons: 1,
  data: {
    tDmg: 40
  }
}, {
  title: '雪衣4命：施放终结技时，击破特攻提高[stance]%，持续多个回合',
  cons: 4,
  data: {
    stance: 40
  }
}]

export const createdBy = 'Aluxes'
