export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
}, {
  title: '战技治疗量(目标生命<=30%)',
  params: { tBuff: true },
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.e['治疗·百分比生命'] + talent.e['治疗·固定值'])
}, {
  title: '终结技治疗量',
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.q['百分比生命'] + talent.q['固定值'])
}, {
  title: '终结技治疗量(目标生命<=30%)',
  params: { tBuff: true },
  dmg: ({ talent, calc, attr }, { heal }) => heal(calc(attr.hp) * talent.q['百分比生命'] + talent.q['固定值'])
}, {
  title: '1命治疗量',
  params: { tBuff: true },
  dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 0.15 + 400)
}, {
  title: '2命持续治疗量',
  params: { tBuff: true },
  dmg: ({ calc, attr }, { heal }) => heal(calc(attr.hp) * 0.06 + 160)
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

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg,hp'

export const buffs = [{
  title: '娜塔莎6命',
  cons: 6,
  data: {
    aPlus: ({ calc, attr }) => calc(attr.hp) * 0.4
  }
}, {
  title: '天赋-生机焕发：对生命值小于等于30%的目标提供治疗时，治疗量提高50%',
  check: ({ params }) => params.tBuff === true,
  data: {
    heal: 50
  }
}, {
  title: '行迹-医者：治疗量提高10%',
  tree: 2,
  data: {
    heal: 10
  }
}]

export const createdBy = 'Aluxes'
