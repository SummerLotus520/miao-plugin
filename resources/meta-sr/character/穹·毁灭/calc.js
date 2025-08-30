export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  params: { buff: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技单体伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['单体伤害'], 'q')
}, {
  title: '终结技伤害·主目标',
  params: { buff: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['扩散伤害'], 'q')
}, {
  title: '终结技伤害·副目标',
  dmg: ({ talent }, dmg) => dmg(talent.q['扩散伤害·相邻目标'], 'q')
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

export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '天赋-牵制盗垒：攻击力提高[atkPct]%',
  data: {
    atkPct: ({ talent }) => talent.t['攻击力提高'] * 100
  }
}, {
  title: '行迹-坚韧：防御力提高[defPct]%',
  tree: 2,
  data: {
    defPct: 20
  }
}, {
  title: '行迹-斗志：造成伤害提高[dmg]%',
  tree: 3,
  check: ({ params }) => params.buff === true,
  data: {
    dmg: 25
  }
}]

export const createdBy = 'Aluxes'
