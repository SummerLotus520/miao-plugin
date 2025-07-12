export const details = [{
  title: '零愿力Q首刀',
  params: {
    type: 1,
    num: 0
  },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['梦想一刀基础伤害'], 'q')
}, {
  title: '满愿力Q首刀',
  params: {
    type: 0,
    num: 60
  },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['梦想一刀基础伤害'], 'q')
}, {
  title: '满愿力Q后重击',
  params: {
    type: 1,
    num: 60
  },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['重击伤害'], 'q')
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

export const defParams = {
  num: 60,
  type: 0
}

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,recharge,dmg'

export const buffs = [{
  title: '恶曜开眼：开E元素爆发伤害提升[qDmg]%',
  data: {
    qDmg: ({ talent }) => talent.e['元素爆发伤害提高'] * 90
  }
}, {
  title: '梦想真说：Q满愿力获得[qPct]%大招倍率加成',
  data: {
    qPct: ({ talent, params }) => talent.q['愿力加成'][params.type || 0] * params.num
  }
}, {
  check: ({ cons }) => cons >= 2,
  title: '雷神2命：大招无视敌人[qIgnore]%防御力',
  data: {
    qIgnore: 60
  }
}, {
  title: '雷神被动：基于元素充能获得[dmg]%雷伤加成',
  sort: 4,
  data: {
    dmg: ({ attr }) => Math.max(attr.recharge.base + attr.recharge.plus - 100, 0) * 0.4
  }
}]
