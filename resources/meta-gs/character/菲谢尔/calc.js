export const details = [{
  title: '奥兹攻击激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['奥兹攻击伤害'], 'e', 'aggravate')
}, {
  title: '奥兹攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['奥兹攻击伤害'], 'e')
}, {
  title: '奥兹召唤伤害',
  params: { e: true },
  dmg: ({ talent, cons }, dmg) => dmg(talent.e['召唤伤害'], 'e')
}, {
  title: '至夜幻现伤害',
  dmg: ({ talent, cons }, dmg) => dmg(talent.q['落雷伤害'], 'q')
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

export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '皇女2命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
  data: {
    ePct: ({ params }) => params.e ? 200 : 0
  }
}, {
  title: '皇女4命：施放夜巡影翼时，能额外造成200%攻击力的伤害',
  data: {
    qPct: ({ params }) => params.q ? 222 : 0
  }
}, 'aggravate']
