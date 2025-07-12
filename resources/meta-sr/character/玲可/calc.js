export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(talent.a['技能伤害'] * calc(attr.hp), 'a')
}, {
  title: '战技提高生命上限值',
  dmg: ({ talent, calc, attr, cons }) => {
    const c6Plus = cons >= 6 ? 0.06 : 0
    const hpPctData = talent.e['生命提高·百分比生命'] + c6Plus
    return {
      avg: calc(attr.hp) * hpPctData + talent.e['生命提高·固定值']
    }
  }
}, {
  title: '战技生命回复',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比'] + talent.e['治疗·固定值'])
}, {
  title: '终结技生命回复',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.q['治疗·百分比生命'] + talent.q['治疗·固定值'])
}, {
  title: '天赋持续回复',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.t['治疗·百分比生命'] + talent.t['治疗·固定值'])
}, {
  title: '天赋额外回复',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.t['额外治疗·百分比生命'] + talent.t['额外治疗·固定值'])
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

export const mainAttr = 'cpct,cdmg,hp'
export const defDmgIdx = 2

export const buffs = [{
  title: '玲可1命：为生命值百分比<=50%的目标提供治疗时，治疗量提高[heal]%',
  cons: 1,
  data: {
    heal: 20
  }
}, {
  title: '玲可6命：战技提供的生命上限提高效果额外提高,提高[_hpPlus]',
  cons: 6,
  data: {
    _hpPlus: ({ calc, attr }) => calc(attr.hp) * 0.06
  }
}]

export const createdBy = 'Aluxes'
