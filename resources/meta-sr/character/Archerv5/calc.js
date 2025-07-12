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
  title: '[A]干将•莫邪-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[E]伪•螺旋剑-零层伤害',
  params: { E: true,A: true,B: false,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]伪•螺旋剑-一层伤害',
  params: { E: true,A: false,B: true,C: false,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]伪•螺旋剑-二层伤害',
  dmgKey: 'AE',
  params: { E: true,A: false,B: false,C: true,D: false},
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[Q]无限剑制-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[T]心眼（真）-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['技能伤害'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '守护者：暴击伤害提高60%',
  data: {
    cdmg: 60
  }
},{
  check: ({ cons, params }) => params.B === true,
  title: '回路连接：战技造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.e['伤害提高'] * 100
  }
},{
  check: ({ cons, params }) => params.C === true,
  title: '回路连接：战技造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.e['伤害提高'] * 200
  }
}, {
  title: '2命：终结技伤害提高120%',
  cons: 2,
  data: {
    qDmg: 120
  }
}, {
  title: '4命：量子属性的抗性降低10%',
  cons: 4,
  data: {
    kx: 10
  }
}, {
  check: ({ cons, params }) => params.E === true,
  title: '6命：战技伤害无视20%的防御力',
  cons: 6,
  data: {
    ignore: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
