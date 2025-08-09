export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '3负面·追加攻击',
  dmg: ({ talent, cons }, dmg) => {
    const extraPct = cons >= 2 ? 60 : 0
    return {
      dmg: dmg(talent.t['追加攻击伤害'], 't').dmg + dmg(extraPct / 100).dmg,
      avg: dmg(talent.t['追加攻击伤害'], 't').avg + dmg(extraPct / 100).avg
    }
  }
}, {
  title: '5负面·追加攻击',
  params: { debuffCount: 5 },
  dmg: ({ talent, cons }, dmg) => {
    const extraPct = cons >= 2 ? 80 : 0
    return {
      dmg: dmg(talent.t['追加攻击伤害'], 't').dmg + dmg(extraPct / 100).dmg,
      avg: dmg(talent.t['追加攻击伤害'], 't').avg + dmg(extraPct / 100).avg
    }
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

export const defParams = { debuffCount: 3 }
export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '天赋-归纳：叠满[_count]层时，真理医生暴击率提高[cpct]%，暴击伤害提高[cdmg]%',
  tree: 2,
  data: {
    _count: ({ cons }) => cons < 1 ? 6 : 10,
    cpct: ({ cons }) => cons < 1 ? 15 : 25,
    cdmg: ({ cons }) => cons < 1 ? 30 : 50
  }
}, {
  title: '天赋-推理：目标持有[_count]个负面状态，真理医生造成伤害提高[dmg]%',
  tree: 3,
  data: {
    _count: ({ params }) => params.debuffCount,
    dmg: ({ params }) => params.debuffCount * 10
  }
}, {
  title: '真理2命：天赋的追加攻击额外造成[_atkPct]%的附加伤害',
  cons: 2,
  data: {
    _atkPct: ({ params }) => Math.min(params.debuffCount * 20, 80)
  }
}, {
  title: '真理6命：天赋的追加攻击造成伤害提高[tDmg]%',
  cons: 6,
  data: {
    tDmg: 50
  }
}]

export const createdBy = 'Aluxes'
