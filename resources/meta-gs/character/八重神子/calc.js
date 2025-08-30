export const details = [{
  check: ({ cons }) => cons < 2,
  dmgKey: 'e',
  title: '叄阶杀生樱伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['杀生樱伤害·叁阶'], 'e')
}, {
  check: ({ cons }) => cons >= 2,
  dmgKey: 'e',
  title: '肆阶杀生樱伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['杀生樱伤害·肆阶'], 'e')
}, {
  check: ({ cons }) => cons < 2,
  title: '叄阶杀生樱激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['杀生樱伤害·叁阶'], 'e', 'aggravate')
}, {
  check: ({ cons }) => cons >= 2,
  title: '肆阶杀生樱激化伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['杀生樱伤害·肆阶'], 'e', 'aggravate')
}, {
  title: '四段Q总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['天狐霆雷伤害'] * 3, 'q')
}, {
  title: '四段Q总激化伤害',
  dmg: ({ talent }, dmg) => {
    let q1j = dmg(talent.q['技能伤害'], 'q', 'aggravate')
    let q2j = dmg(talent.q['天狐霆雷伤害'], 'q', 'aggravate')
    return {
      dmg: q1j.dmg + q2j.dmg * 3,
      avg: q1j.avg + q2j.avg * 3
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

export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'
export const defDmgKey = 'e'

export const buffs = [{
  title: '被动天赋：基于元素精通提高杀生樱伤害[eDmg]%',
  sort: 9,
  data: {
    eDmg: ({ attr, calc }) => calc(attr.mastery) * 0.15
  }
}, {
  check: ({ cons }) => cons >= 4,
  title: '4命效果：杀生樱命中敌人后提高雷伤[dmg]%',
  data: {
    dmg: 20
  }
}, {
  cons: 6,
  title: '6命效果：杀生樱无视敌人[eDef]%防御',
  data: {
    eDef: 60
  }
}, 'aggravate']
