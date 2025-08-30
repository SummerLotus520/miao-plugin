export const details = [{
  title: '天赋反击伤害·主目标',
  dmg: ({ talent }, dmg) => dmg(talent.t['反击·目标伤害'], 't')
}, {
  title: '天赋反击伤害·相邻目标',
  dmg: ({ talent }, dmg) => dmg(talent.t['反击·相邻目标伤害'], 't')
}, {
  title: '【勘破•灭】伤害·主目标',
  dmg: ({ talent }, dmg) => dmg(talent.q['反击·目标伤害'], 'q')
}, {
  title: '【勘破•灭】伤害·相邻目标',
  dmg: ({ talent }, dmg) => dmg(talent.q['反击·相邻目标伤害'], 'q')
}, {
  title: '【勘破•灭】伤害·随机单次',
  dmg: ({ talent }, dmg) => dmg(talent.q['勘破灭·随机伤害'], 'q')
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

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 2

export const buffs = [{
  title: '云璃额外能力：施放反击时，云璃的攻击力提高[atkPct]%',
  tree: 3,
  data: {
    atkPct: 30
  }
}, {
  title: '云璃终结技：下一次反击造成的暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.q['暴击伤害提高'] * 100
  }
}, {
  title: '云璃1魂：【勘破•斩】与【勘破•灭】造成的伤害提高[qDmg]%',
  cons: 1,
  data: {
    qDmg: 20
  }
}, {
  title: '云璃2魂：发动反击造成伤害时无视敌方目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 20
  }
}, {
  title: '云璃6魂：发动【勘破•斩】或【勘破•灭】造成伤害时暴击率提高[qCpct]%，物理属性抗性穿透提高[kx]%',
  cons: 6,
  data: {
    qCpct: 15,
    kx: 20
  }
}]

export const createdBy = '冰翼'
