export const details = [{
  title: '开E后首段普攻',
  params: { pyro: false, cryo: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
}, {
  title: '开E后重击',
  params: { pyro: false, cryo: false },
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '开E满染火冰首段普攻',
  params: { pyro: true, cryo: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
}, {
  title: 'Q伤害',
  params: { pyro: true, cryo: true },
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

export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '羽画·风姿华歌：开启E后额外提升普通[aMulti]%伤害,重击[a2Multi]%伤害',
  data: {
    aMulti: ({ talent }) => talent.e['空居·不生断伤害'] - 100,
    a2Multi: ({ talent }) => talent.e['空居·刀风界伤害'] - 100
  }
}, {
  title: '天赋拾玉得花：火元素攻击力提升30%,冰元素暴击率提升20%',
  data: {
    atkPct: ({ params }) => params.pyro ? 30 : 0,
    cpct: ({ params }) => params.cryo ? 20 : 0
  }
}, {
  title: '二番·箙岛月白浪：至多使狂言·式乐五番造成的伤害提升200%',
  cons: 2,
  data: {
    qDmg: 200
  }
}]
