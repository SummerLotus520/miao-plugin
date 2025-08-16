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
  title: '追加攻击',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
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
  title: '秘技：攻击力提高[atkPct]%',
  data: {
    atkPct: 40
  }
}, {
  title: '行迹-效率：战技伤害提高25%',
  tree: 1,
  data: {
    eDmg: 25
  }
}, {
  title: '行迹-冰结：施放终结技时，对冻结状态下的敌人造成的伤害提高20%',
  tree: 3,
  data: {
    qDmg: 20
  }
}, {
  title: '战技：对生命值百分比大于等于50%的目标，战技造成的伤害提高20%',
  data: {
    eDmg: 20
  }
}, {
  title: '黑塔2命：叠满5层时，暴击率提高15%',
  cons: 2,
  data: {
    cpct: 15
  }
}, {
  title: '黑塔4命：天赋追加攻击造成的伤害提高10%',
  cons: 4,
  data: {
    tDmg: 10
  }
}, {
  title: '黑塔6命：施放终结技后，攻击力提高25%',
  cons: 6,
  data: {
    atkPct: 25
  }
}]

export const createdBy = 'Aluxes'
