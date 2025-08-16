import { Format } from '#miao'

export const details = [{
  title: 'E伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'], 'e')
}, {
  title: '2层E伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['基础伤害'] + talent.e['受击时伤害提升'] * 2, 'e')
}, {
  title: 'Q每跳伤害',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['闪雷伤害'], 'q')
}, {
  title: 'E弹反护盾量',
  dmg: ({ talent, attr }, { shield }) => shield(talent.e['护盾吸收量2'][0] / 100 * attr.hp + talent.e['护盾吸收量2'][1])
}, {
  title: 'Q护盾量',
  check: ({ cons }) => cons >= 1,
  dmg: ({ attr }, { shield }) => shield(0.16 * attr.hp)
}, {
  title: 'Q伤害减免',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.q['伤害减免'] / 100),
      type: 'text'
    }
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

export const buffs = [{
  title: '北斗6命：Q持续期间，周围敌人的雷元素抗性降低15%',
  cons: 6,
  data: {
    kx: ({ params }) => params.q ? 15 : 0
  }
}]
