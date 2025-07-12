export const details = [{
  title: '触发特效后生命值',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]逐火救世，行则将至-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[E]黎明创世，地辟天开-目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'], 'e')
},{
  title: '[E]黎明创世，地辟天开-相邻目标伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[A+]逐火救世，行则将至-目标伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['目标伤害'] * 1, 'a')
},{
  title: '[A+]逐火救世，行则将至-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['相邻目标伤害'] * 1, 'a')
},{
  title: '[E+]灾厄•弑魂焚诏-反击伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏反击伤害'] * 1 * 1.2, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-单次额外伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 1 * 1 * 1.2, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-全部额外伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 4 * 1 * 1.2, 'e')
},{
  title: '[E+]支柱•死星天裁-最多造成伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁技能伤害'] * 1, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤单次伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁随机伤害'] * 1, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤四次伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁随机伤害'] * 4 * 1, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤额外伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁额外伤害'] * 1, 'e')
},{
  title: '[Q]永劫燔世，其将背负-最后一击伤害',
  check: ({ cons }) => cons < 2,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] * 1, 'q')
},{
  title: '[A+]逐火救世，行则将至-目标伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['目标伤害'] * 1.0, 'a')
},{
  title: '[A+]逐火救世，行则将至-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['相邻目标伤害'] * 1.0, 'a')
},{
  title: '[E+]灾厄•弑魂焚诏-反击伤害',
  check: ({ cons }) => cons > 1 && cons < 4,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏反击伤害'] * 1.2 * 1.0, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-单次额外伤害',
  check: ({ cons }) => cons > 1 && cons < 4,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 1 * 1.2 * 1.0, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-全部额外伤害',
  check: ({ cons }) => cons > 1 && cons < 4,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 4 * 1.2 * 1.0, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-反击伤害',
  check: ({ cons }) => cons > 3,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏反击伤害'] * 2 * 1.0, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-单次额外伤害',
  check: ({ cons }) => cons > 3,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 1 * 2 * 1.0, 'e')
},{
  title: '[E+]灾厄•弑魂焚诏-全部额外伤害',
  check: ({ cons }) => cons > 3,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['弑魂焚诏额外伤害'] * 4 * 2 * 1.0, 'e')
},{
  title: '[E+]支柱•死星天裁-最多造成伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁技能伤害'] * 1.0, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤单次伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁随机伤害'] * 1.0, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤四次伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁随机伤害'] * 4 * 1.0, 'e')
},{
  title: '[E+]支柱•死星天裁-毁伤额外伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.e2['死星天裁额外伤害'] * 1.0, 'e')
},{
  title: '[Q]永劫燔世，其将背负-最后一击伤害',
  check: ({ cons }) => cons > 1,
  params: { A: true,B: false,C: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] * 1.0, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) => params.A === true,
  title: '命运•此躯即神：攻击力提高[atkPct]%，生命上限提高[hpPct]%',
  data: {
    atkPct: ({ talent, attr }) => talent.t['攻击力提高'] * 100,
    hpPct: ({ talent, attr }) => talent.t['生命上限提高'] * 100
  }
},{
  title: '照见英雄本色：攻击力提高[atkPct]%',
  data: {
    atkPct: 50 * 2
  }
},{
  title: '身承炎炬万千：造成的伤害提高45%',
  data: {
    dmg: 45
  }
}, {
  title: '此身为炬：暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent, attr }) => talent.t['暴击伤害提高'] * 100
  }
}, {
  check: ({ cons, params }) => params.A === true,
  title: '1命：暴击伤害提高40%',
  cons: 1,
  data: {
    cdmg: 40
  }
}, {
  check: ({ cons, params }) => params.A === true,
  title: '2命：物理属性抗性穿透提高20%',
  cons: 2,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
