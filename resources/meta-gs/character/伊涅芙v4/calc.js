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
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.mastery) * 1)
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
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
    }
  }
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[E]高阶清扫模块启动伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
},{
  title: '[E]薇尔琪塔放电伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['薇尔琪塔放电伤害'], 'e')
},{
  title: '[E]光流屏障护盾量',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent.e['护盾基础吸收量'] + calc(attr.atk) * talent.e['护盾附加吸收量'] / 100)
},{
  title: '[Q]发射薇尔琪塔伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
},{
  title: '[T]薇尔琪塔雷暴云额外伤害',
  params: { LBY: true },
  dmg: ({ attr }, { basic }) => basic(attr.atk * 0.8, '')
},{
  title: '[6命]载流复合雷暴云额外伤害',
  check: ({ cons }) => cons > 5,
  params: { LBY: true },
  dmg: ({ attr }, { basic }) => basic(attr.atk * 2, '')
},{
  title: '[T]提升场上角色元素精通',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 0.06)
    }
  }
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '参数重构：元素精通提升[mastery]点',
  data: {
    mastery: ({ calc, attr }) => Math.min(calc(attr.atk) * 0.06)
  }
},{
  title: '月兆祝赐·象拟中继：提升月感电反应伤害[dmg]%',
  check: ({ params }) => params.LBY === true,
  data: {
    dmg: ({ calc, attr }) => Math.min(14, attr.atk / 100 * 0.7)
  }
},{
  title: '1命：提升月感电反应伤害[dmg]%',
  cons: 1,
  check: ({ params }) => params.LBY === true,
  data: {
    dmg: ({ calc, attr }) => Math.min(50, attr.atk / 100 * 2.5)
  }
},{
  title: '支离轮光：提升月感电反应伤害[dmg]%',
  check: ({ params , cons, weapon }) => params.LBY === true && weapon.name === '支离轮光' && weapon.affix === 1,
  data: {
    dmg: 40
  }
},{
  title: '支离轮光：提升月感电反应伤害[dmg]%',
  check: ({ params , cons, weapon }) => params.LBY === true && weapon.name === '支离轮光' && weapon.affix === 2,
  data: {
    dmg: 50
  }
},{
  title: '支离轮光：提升月感电反应伤害[dmg]%',
  check: ({ params , cons, weapon }) => params.LBY === true && weapon.name === '支离轮光' && weapon.affix === 3,
  data: {
    dmg: 60
  }
},{
  title: '支离轮光：提升月感电反应伤害[dmg]%',
  check: ({ params , cons, weapon }) => params.LBY === true && weapon.name === '支离轮光' && weapon.affix === 4,
  data: {
    dmg: 70
  }
},{
  title: '支离轮光：提升月感电反应伤害[dmg]%',
  check: ({ params , cons, weapon }) => params.LBY === true && weapon.name === '支离轮光' && weapon.affix === 5,
  data: {
    dmg: 80
  }
},{
  title: '元素反应：提升月感电反应伤害[dmg]%',
  check: ({ cons, params, attr }) =>  attr.mastery >= 500 && params.LBY === true,
  data: {
    dmg: 96
  }
},{
  title: '元素反应：提升月感电反应伤害[dmg]%',
  check: ({ cons, params, attr }) =>  attr.mastery >= 1000 && params.LBY === true,
  data: {
    dmg: 65
  }
},{
  title: '元素反应：提升月感电反应伤害[dmg]%',
  check: ({ cons, params, attr }) =>  attr.mastery >= 1500 && params.LBY === true,
  data: {
    dmg: 47
  }
},{
  title: '元素反应：提升月感电反应伤害[dmg]%',
  check: ({ cons, params, attr }) =>  attr.mastery >= 2000 && params.LBY === true,
  data: {
    dmg: 36
  }
},{
  title: '元素反应：提升月感电反应伤害[dmg]%',
  check: ({ cons, params, attr }) =>  attr.mastery >= 3000 && params.LBY === true,
  data: {
    dmg: 50
  }
}]
