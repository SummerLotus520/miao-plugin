export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.def, 'a')
}, {
  title: '战技护盾量',
  dmg: ({ talent, attr }, { shield }) => shield(talent.e['防御力百分比'] * attr.def + talent.e['固定值'])
}, {
  title: '终结技伤害',
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.def, 'q')
}, {
  title: '追击伤害',
  dmg: ({ talent, attr, cons }, { basic }) => {
    let count = cons < 4 ? 7 : 10
    let td = talent.t['每段伤害'] * count
    return basic(td * attr.def, 't')
  }
}, {
  title: '追击护盾量',
  dmg: ({ attr }, { shield }) => shield(attr.def * 0.07 + 96)
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

export const mainAttr = 'cpct,cdmg,def'
export const defDmgIdx = 1
export const defParams = ({ cons }) => cons < 4 ? { tArtisBuffCount: 4 } : { tArtisBuffCount: 5.5 }

export const buffs = [{
  title: '终结技-惊惶：击中【惊惶】状态下的敌方目标时，造成的暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent }) => talent.q['暴击伤害提高'] * 100
  }
}, {
  title: '天赋-枪口以右：效果抵抗提高[effDef]%',
  data: {
    effDef: ({ talent }) => talent.t['效果抵抗提高'] * 100
  }
}, {
  title: '行迹-杠杆：基于砂金防御力，提高其自身暴击率[cpct]%',
  tree: 2,
  sort: 9,
  data: {
    cpct: ({ attr }) => attr.def <= 1600 ? 0 : Math.min(Math.floor((attr.def - 1600) / 100) * 2, 48)
  }
}, {
  title: '砂金1命：暴击伤害提高[cdmg]%',
  cons: 1,
  data: {
    cdmg: 20
  }
}, {
  title: '砂金2命：目标全属性抗性降低[kx]%',
  cons: 2,
  data: {
    kx: 12
  }
}, {
  title: '砂金4命：防御力提高[defPct]%，天赋的追加攻击额外增加3段攻击段数',
  cons: 4,
  data: {
    defPct: 40
  }
}, {
  title: '砂金6命：造成的伤害提高[dmg]%',
  cons: 6,
  data: {
    dmg: 150
  }
}]

export const createdBy = 'Aluxes'
