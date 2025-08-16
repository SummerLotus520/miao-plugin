export const details = [{
  title: '先QA后E两段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '雨帘剑伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['剑雨伤害'], 'q')
}, {
  title: '雨帘剑蒸发',
  dmg: ({ talent }, dmg) => dmg(talent.q['剑雨伤害'], 'q', 'vaporize')
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
  title: '行秋被动：获得20%水伤加成',
  isStatic: true,
  data: {
    dmg: 20
  }
}, {
  title: '行秋2命：受到剑雨攻击的敌人水元素抗性降低15%',
  cons: 2,
  data: {
    kx: 15
  }
}, {
  title: '行秋4命：开Q后E的伤害提升50%',
  cons: 4,
  data: {
    eMulti: 50
  }
}, 'vaporize']
