export const details = [{
  title: '重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
}, {
  title: '兔兔伯爵爆炸',
  dmg: ({ talent }, dmg) => dmg(talent.e['爆炸伤害'], 'e')
}, {
  title: '兔兔伯爵蒸发',
  dmgKey: 'e',
  check: ({ cons }) => cons < 2,
  dmg: ({ talent }, dmg) => dmg(talent.e['爆炸伤害'], 'e', 'vaporize')
}, {
  title: '引爆兔兔伯爵蒸发',
  cons: 2,
  dmgKey: 'e',
  params: { e: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['爆炸伤害'], 'e', 'vaporize')
}, {
  title: 'Q箭雨总伤害',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['箭雨总伤害'], 'q')
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
export const defDmgKey = 'e'

export const buffs = [{
  title: '安柏天赋：命中弱点后攻击力提升15%',
  data: {
    atkPct: 15
  }
}, {
  title: '安柏被动：Q暴击率提高10%',
  data: {
    qCpct: 10
  }
}, {
  title: '安柏2命：瞄准引爆兔兔伯爵伤害提高200%',
  cons: 2,
  data: {
    eDmg: ({ params }) => params.e ? 200 : 0
  }
}, 'vaporize']
