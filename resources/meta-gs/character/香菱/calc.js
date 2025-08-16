export const details = [{
  title: '锅巴单口伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['喷火伤害'], 'e')
}, {
  title: '锅巴单口蒸发',
  dmg: ({ talent }, dmg) => dmg(talent.e['喷火伤害'], 'e', 'vaporize')
}, {
  title: '旋火轮单次伤害',
  params: { isQ: true},
  dmg: ({ talent }, dmg) => dmg(talent.q['旋火轮伤害'], 'q')
}, {
  title: '旋火轮单次蒸发',
  params: { isQ: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['旋火轮伤害'], 'q', 'vaporize')
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

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  cons: 1,
  title: '香菱1命：锅巴降低敌人火抗15',
  data: {
    kx: 15
  }
}, {
  check: ({ params }) => !params.isQ,
  title: '香菱6命：旋火轮持续期间获得15%火伤加成',
  cons: 6,
  data: {
    dmg: 15
  }
}, 'vaporize']
