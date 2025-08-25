export const details = [{
  title: 'E伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['挥舞伤害'], 'e')
}, {
  title: '三级护盾量',
  dmg: ({ talent, calc, attr }, { shield }) =>
    shield(talent.e['三级护盾吸收量2'][0] * calc(attr.def) / 100 + talent.e['三级护盾吸收量2'][1] * 1)
}, {
  title: 'Q释放伤害',
  params: { phy: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'phy')
}, {
  title: '重击循环伤害',
  params: { a2: true, phy: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击循环伤害'], 'a2', 'phy')
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

export const mainAttr = 'atk,def,cpct,cdmg'
export const enemyName = '魔偶/女士/雷神/丘丘'

export const buffs = [{
  title: '辛焱被动：处于护盾下物理伤害提高15%',
  data: {
    phy: 15
  }
}, {
  title: '辛焱2命：Q的暴击率提升100%',
  cons: 2,
  data: {
    qCpct: 100
  }
}, {
  title: '辛焱4命：E造成伤害使敌人物理抗性降低15%',
  cons: 4,
  check: ({ params }) => params.phy === true,
  data: {
    kx: 15
  }
}, {
  title: '辛焱6命：进行重击时，基于防御力的50%获得[atkPlus]攻击力加成',
  cons: 6,
  sort: 9,
  check: ({ params }) => params.a2 === true,
  data: {
    atkPlus: ({ attr, calc }) => calc(attr.def) * 0.5
  }
}]
