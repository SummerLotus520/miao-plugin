export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, cons }, dmg) => {
    let plusDmg = cons >= 1 ? 0.6 : 0
    return dmg(talent.a['技能伤害'] * (1 + plusDmg), 'a')
  }
}, {
  title: '战技伤害(单体)',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '战技伤害(扩散)',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] + talent.e['相邻目标伤害'] * 2, 'e')
}, {
  title: '秘技触电持续伤害',
  dmg: ({ talent }, dmg) => dmg(0.5, 'dot', 'skillDot')
}, {
  title: '战技触电持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['触电持续伤害'], 'dot', 'skillDot')
}, {
  title: '天赋附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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
  title: '希露瓦1命：普攻对敌方1个随机相邻目标造成等同于普攻伤害60%的雷属性伤害',
  cons: 1
}, {
  title: '希露瓦6命：对触电状态下的敌方目标造成伤害提高30%',
  cons: 6,
  data: {
    dmg: 30
  }
}, {
  title: '行迹-狂热：消灭敌方目标后，攻击力提高20%',
  tree: 3,
  data: {
    atkPct: 20
  }
}]

export const createdBy = 'Aluxes'
