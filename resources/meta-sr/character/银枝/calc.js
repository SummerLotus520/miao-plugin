export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '强化终结技总伤害',
  params: { q: true },
  dmg: ({ talent }, dmg) => {
    const td = talent.q2['技能伤害'] + talent.q2['额外随机伤害'] * 6
    return dmg(td, 'q')
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
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '行迹-勇气：对当前生命百分比小于等于50%的敌人目标造成的伤害提高[dmg]%',
  trees: 2,
  data: {
    dmg: 15
  }
}, {
  title: '天赋-崇高的客体：[_count]层【升格】提升暴击率[cpct]%',
  data: {
    _count: ({ cons }) => cons < 4 ? 10 : 12,
    cpct: ({ cons }) => cons < 4 ? 25 : 30
  }
}, {
  title: '银枝1命：[_count]层【升格】提升暴击伤害[cdmg]%',
  cons: 1,
  data: {
    _count: ({ cons }) => cons < 4 ? 10 : 12,
    cdmg: ({ cons }) => cons < 4 ? 40 : 48
  }
}, {
  title: '银枝2命：释放终结技命中3名及以上敌人时，攻击力提高[atkPct]%',
  cons: 2,
  check: ({ params }) => params.q === true,
  data: {
    atkPct: 40
  }
}, {
  title: '银枝4命：天赋【升格】可叠加上限提高至12层',
  cons: 4
}, {
  title: '银枝6命：释放终结技时，无视敌方目标[ignore]%的防御力',
  cons: 6,
  check: ({ params }) => params.q === true,
  data: {
    ignore: 30
  }
}]

export const createdBy = 'Aluxes'
