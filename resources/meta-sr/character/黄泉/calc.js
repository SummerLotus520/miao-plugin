export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, cons }, dmg) => {
    return cons < 6 ? dmg(talent.a['技能伤害'], 'a') : dmg(talent.a['技能伤害'], 'a,q')
  }
}, {
  title: '战技伤害·主目标',
  dmg: ({ talent, cons }, dmg) => {
    return cons < 6 ? dmg(talent.e['单体伤害'], 'e') : dmg(talent.e['单体伤害'], 'e,q')
  }
}, {
  title: '战技伤害·副目标',
  dmg: ({ talent, cons }, dmg) => {
    return cons < 6 ? dmg(talent.e['相邻目标伤害'], 'e') : dmg(talent.e['相邻目标伤害'], 'e,q')
  }
}, {
  title: '终结技伤害·对单',
  params: { q: true },
  dmg: ({ talent, trees }, dmg) => {
    let extraTd = trees['103'] ? 1.5 : 0
    return dmg(talent.q['单体伤害'] + extraTd, 'q')
  }
}, {
  title: '终结技伤害·对无花目标',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['相邻目标伤害'], 'q')
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

export const mainAttr = 'atk,cpct,cdmg,dmg'
export const defDmgIdx = 3

export const buffs = [{
  title: '天赋：终结技期间使敌方全属性抗性降低[kx]%',
  check: ({ params }) => params.q === true,
  data: {
    kx: ({ talent }) => talent.t['全属性抗性降低'] * 100
  }
}, {
  title: '行迹-奈落：黄泉普攻、战技、终结技造成的伤害为原伤害的160%',
  tree: 2,
  data: {
    multi: 60
  }
}, {
  title: '行迹-雷心：黄泉造成的伤害提高[dmg]%，终结技额外造成150%攻击力的伤害（仅在对单时计算）',
  tree: 3,
  data: {
    dmg: 90
  }
}, {
  title: '黄泉1命：对处于负面状态敌方造成伤害时暴击率提高[cpct]%',
  cons: 1,
  data: {
    cpct: 18
  }
}, {
  title: '黄泉4命：使敌方陷入终结技易伤状态，受到终结技伤害提高[qEnemydmg]%',
  cons: 4,
  data: {
    qEnemydmg: 8
  }
}, {
  title: '黄泉6命：造成的终结技伤害全属性抗性穿透提高[kx]%，释放的普攻、战技伤害同时视为终结技伤害',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Aluxes'
