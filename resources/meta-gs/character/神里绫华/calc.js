export const details = [{
  title: '霰步E后重击总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '神里流·冰华 伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '神里流·霜灭 单段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['切割伤害'], 'q')
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

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 2

export const buffs = [{
  passive: 1,
  title: '神里被动：释放E后普攻与重击伤害提高30%',
  data: {
    aDmg: 30,
    a2Dmg: 30
  }
}, {
  passive: 2,
  title: '神里被动：霰步命中敌人获得18%冰伤加成',
  data: {
    dmg: 18
  }
}, {
  cons: 4,
  title: '神里4命：元素爆发后敌人防御力降低30%',
  data: {
    qDef: 30
  }
}, {
  cons: 6,
  title: '神里6命：每10秒重击伤害提高[a2Dmg]%',
  data: {
    a2Dmg: 298
  }
}]
