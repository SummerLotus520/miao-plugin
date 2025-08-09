export const details = [{
  title: '重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '重击蒸发',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2', 'vaporize')
}, {
  title: 'Q泡影破裂伤害',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['泡影破裂伤害'], 'q')
}, {
  title: 'Q泡影破裂蒸发',
  params: { q: true },
  dmg: ({ talent }, dmg) => dmg(talent.q['泡影破裂伤害'], 'q', 'vaporize')
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
export const mainAttr = 'atk,cpct,cdmg,recharge'

export const buffs = [{
  title: '莫娜被动：基于元素充能效率获得水元素伤害[dmg]%',
  sort: 4,
  data: {
    dmg: ({ calc, attr }) => calc(attr.recharge) * 0.2
  }
}, {
  title: '莫娜1命：命中星异状态下的敌人水元素相关反应效果提升15%',
  cons: 1,
  data: {
    vaporize: ({ params }) => params.q ? 15 : 0
  }
}, {
  title: '莫娜4命：攻击处于星异状态下的敌人时暴击率提升15%',
  cons: 4,
  data: {
    cpct: ({ params }) => params.q ? 15 : 0
  }
}, {
  title: '莫娜6命：虚实流动状态后满Buff提升重击180%伤害',
  cons: 6,
  data: {
    a2Dmg: 180
  }
}, {
  title: '莫娜天赋：开Q获得[dmg]%伤害加成',
  data: {
    dmg: ({ talent }) => talent.q['伤害加成']
  }
}, 'vaporize']
