export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, cons, attr }, { basic }) => {
    let atkTd = talent.a['技能伤害']
    let defTd = cons >= 1 ? 0.25 : 0
    return basic(atkTd * attr.atk + defTd * attr.def, 'a')
  }
}, {
  title: '强化普攻扩散伤害',
  dmg: ({ talent, cons, attr }, { basic }) => {
    let atkTd = talent.a2['技能伤害'] + talent.a2['相邻目标伤害'] * 2
    let defTd = cons >= 1 ? 0.5 * 3 : 0
    return basic(atkTd * attr.atk + defTd * attr.def, 'a')
  }
}, {
  title: '终结技伤害',
  dmg: ({ talent, attr }, { basic }) => {
    let atkTd = talent.q['攻击力倍率']
    let defTd = talent.q['防御力倍率']
    return basic(atkTd * attr.atk + defTd * attr.def, 'q')
  }
}, {
  title: '天赋护盾量',
  dmg: ({ talent, attr, cons }, { shield }) => {
    let extraDefTd = cons >= 2 ? 0.02 : 0
    let extraConstTd = cons >= 2 ? 27 : 0
    let defTd = extraDefTd + talent.t['百分比防御']
    let constTd = extraConstTd + talent.t['固定值']
    return shield(defTd * attr.def + constTd)
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
export const mainAttr = 'atk,cpct,cdmg,def'

export const buffs = [{
  title: '开拓者6命：提高防御力[defPct]%',
  cons: 6,
  data: {
    defPct: 30
  }
}]

export const createdBy = 'Aluxes'
