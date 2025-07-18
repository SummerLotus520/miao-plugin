export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['门前清·伤害'], 'a')
}, {
  title: '0层E暗杠·强化普攻主目标伤害',
  params: {
    eBuffCount: 0,
    hiddenHand: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·伤害'], 'a')
}, {
  title: '0层E暗杠·强化普攻副目标伤害',
  params: {
    eBuffCount: 0,
    hiddenHand: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·相邻目标伤害'], 'a')
}, {
  title: '4层E暗杠·强化普攻主目标伤害',
  params: {
    eBuffCount: 4,
    hiddenHand: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·伤害'], 'a')
}, {
  title: '4层E暗杠·强化普攻副目标伤害',
  params: {
    eBuffCount: 4,
    hiddenHand: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·相邻目标伤害'], 'a')
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '4层E暗杠·终结技伤害',
  params: {
    eBuffCount: 4,
    hiddenHand: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '4层E不求人·强化普攻主目标伤害',
  cons: 4,
  params: {
    eBuffCount: 4,
    tAttack: true
  },
  dmg: ({ talent }, dmg) => dmg(talent.a2['杠·伤害'], 't')
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

export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 3

export const buffs = [{
  title: '战技Buff：[_eBuffCount]层Buff使自身造成的伤害提高[dmg]%',
  check: ({ params }) => params.eBuffCount,
  data: {
    _eBuffCount: ({ params }) => params.eBuffCount,
    dmg: ({ params, talent }) => talent.e['伤害提高'] * 100 * params.eBuffCount
  }
}, {
  title: '天赋-帝垣琼玉：持有4张相同花色的牌时，进入【暗杠】状态，自身攻击力提高[atkPct]%',
  check: ({ params }) => params.hiddenHand,
  data: {
    atkPct: ({ talent }) => talent.t['攻击力提高'] * 100
  }
}, {
  title: '行迹-听牌：[_eBuffCount]层战技使自身造成的伤害提高效果额外提高[dmg]%',
  tree: 2,
  check: ({ params }) => params.eBuffCount,
  data: {
    _eBuffCount: ({ params }) => params.eBuffCount,
    dmg: ({ params }) => 10 * params.eBuffCount
  }
}, {
  title: '行迹-抢杠：速度提高[speedPct]%',
  tree: 3,
  data: {
    speedPct: 10
  }
}, {
  title: '青雀1命：终结技造成的伤害提高[qDmg]%',
  cons: 1,
  data: {
    qDmg: 10
  }
}, {
  title: '青雀4命：【不求人】状态下，释放普攻后额外进行一次追加攻击',
  check: ({ params }) => params.tAttack,
  cons: 4
}]

export const createdBy = 'Aluxes'
