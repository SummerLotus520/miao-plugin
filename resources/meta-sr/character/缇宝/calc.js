export const details = [{
  title: '普攻伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.a['技能伤害'], 'a')
}, {
  title: '天赋追加攻击伤害',
  params: { cons6: true },
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.t['追加攻击伤害'], 't')
}, {
  title: '终结技伤害',
  dmg: ({ talent, calc, attr }, { basic }) => basic(calc(attr.hp) * talent.q['技能伤害'], 'q')
}, {
  title: '单次结界附加伤害',
  dmg: ({ talent, cons, calc, attr }, { basic }) => {
    let num = cons > 1 ? 1.2 : 1
    return basic(calc(attr.hp) * talent.q['附加伤害'] * num, 'q')
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

export const defDmgIdx = 1
export const mainAttr = 'hp,cpct,cdmg'

export const buffs = [{
  title: '缇宝战技：当缇宝拥有【神启】时，我方全体目标全属性抗性穿透提高[kx]%',
  data: {
    kx: ({ talent }) => talent.e['抗性穿透提高'] * 100
  }
}, {
  title: '缇宝终结技：敌方目标受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: ({ talent }) => talent.q['受到的伤害提高'] * 100
  }
}, {
  title: '行迹-城墙外的羊羔儿…：施放天赋的追加攻击后，缇宝造成的伤害提高72%，该效果最多叠加3层',
  tree: 1,
  data: {
    dmg: 72 * 3
  }
}, {
  title: '行迹-长翅膀的玻璃球！：缇宝的生命上限提高，提高数值等同于我方全体角色生命上限之和的9%',
  tree: 2,
  data: {
    hpPlus: ({ calc, attr }) => calc(attr.hp) * 9 / 100
  }
}, {
  title: '缇宝4魂：【神启】持续期间，我方全体造成伤害时无视目标[ignore]%的防御',
  cons: 4,
  data: {
    ignore: 18
  }
}, {
  title: '缇宝6魂：天赋的追加攻击造成的伤害提高[tDmg]%',
  cons: 6,
  data: {
    tDmg: 729
  }
}]

export const createdBy = '冰翼'
