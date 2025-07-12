export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['目标伤害'], 'a')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '追击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
}, {
  title: '强化追击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['追加攻击倍率提高'] + talent.t['技能伤害'], 't')
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

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '天赋-剔烁之牙：50层【当品】使暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.t['每层爆伤提高'] * 50 * 100
  }
}, {
  title: '行迹-绝当品：50层【当品】额外提升攻击力[atkPct]%',
  tree: 3,
  data: {
    atkPct: 0.5 * 50
  }
}, {
  title: '翡翠1魂：追击伤害提高[tDmg]%',
  cons: 1,
  data: {
    tDmg: 32
  }
}, {
  title: '翡翠2魂：【当品】叠加至15层时，暴击率提高[cpct]%',
  cons: 2,
  data: {
    cpct: 18
  }
}, {
  title: '翡翠4魂：释放终结技后，造成的伤害无视敌方[ignore]%防御力',
  cons: 4,
  data: {
    ignore: 12
  }
}, {
  title: '翡翠6魂：量子抗性穿透提高[kx]%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Aluxes'
