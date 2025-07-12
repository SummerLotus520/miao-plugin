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
  title: '[A]风王结界-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[A+]解放的金色王权-大于三敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'], 'a')
},{
  title: '[A+]解放的金色王权-等于二敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] + talent.a2['额外伤害A'], 'a')
},{
  title: '[A+]解放的金色王权-仅剩一敌人伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.a2['技能伤害'] + talent.a2['额外伤害B'], 'a')
},{
  title: '[E-炉心共鸣:0]风王铁锤-目标伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'], 'e')
},{
  title: '[E-炉心共鸣:0]风王铁锤-相邻目标伤害',
  params: { Q: false,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'], 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-目标伤害',
  check: ({ cons }) => cons < 2,
  dmgKey: 'AE',
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons < 2,
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + 1 * 1.07 * talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:1]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.07 * talent.e['倍率提高'] * 1, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + 1 * 1.35 * talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:5]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.35 * talent.e['倍率提高'] * 5, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-目标伤害',
  check: ({ cons }) => cons > 1,
  dmgKey: 'AE',
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['目标伤害'] + 1 * 1.70 * talent.e['倍率提高'] * 10, 'e')
},{
  title: '[E-炉心共鸣:10]风王铁锤-相邻目标伤害',
  check: ({ cons }) => cons > 1,
  params: { Q: false,A: false,B: false,C: false,D: true},
  dmg: ({ talent }, dmg) => dmg(talent.e['相邻目标伤害'] + 1 * 1.70 * talent.e['倍率提高'] * 10, 'e')
},{
  title: '[Q]风王铁锤-全体伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[Q]风王铁锤-单段伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['随机伤害'], 'q')
},{
  title: '[Q]风王铁锤-十段伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['随机伤害'] * 10, 'q')
},{
  title: '[Q]风王铁锤-总共伤害',
  params: { Q: true,A: false,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['随机伤害'] * 10, 'q')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) => params.A === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50
  }
},{
  check: ({ cons, params }) => params.B === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4
  }
},{
  check: ({ cons, params }) => params.C === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4 * 5
  }
},{
  check: ({ cons, params }) => params.D === true,
  title: '星之冠冕：暴击伤害提高[cdmg]%',
  data: {
    cdmg: 50 + 4 * 10
  }
},{
  title: '龙之骑士：暴击率提高20%',
  data: {
    cpct: 20
  }
}, {
  title: '龙之炉心：伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.t['伤害提高'] * 100
  }
}, {
  title: '1命：终结技伤害提高60%',
  cons: 1,
  data: {
    qDmg: 60
  }
}, {
  check: ({ cons, params }) => params.A === true,
  title: '2命：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 0
  }
}, {
  check: ({ cons, params }) => params.B === true,
  title: '2命：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1
  }
}, {
  check: ({ cons, params }) => params.C === true,
  title: '2命：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 5
  }
}, {
  check: ({ cons, params }) => params.D === true,
  title: '2命：无视目标[ignore]%的防御力',
  cons: 2,
  data: {
    ignore: 1 * 10
  }
}, {
  title: '4命：风属性抗性穿透提高20%',
  cons: 4,
  data: {
    kx: 20
  }
}, {
  check: ({ cons, params }) => params.Q === true,
  title: '6命：终结技伤害的风属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
