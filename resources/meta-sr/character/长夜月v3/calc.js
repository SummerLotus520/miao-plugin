export const details = [{
  title: '触发特效后生命值',
  params: { team: false,YL: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.hp) * 1)
    }
  }
}, {
  title: '触发特效后攻击力',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.atk) * 1)
    }
  }
}, {
  title: '触发特效后防御力',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.def) * 1)
    }
  }
}, {
  title: '触发特效后速度',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.speed) * 1)
    }
  }
}, {
  title: '触发特效后暴击率',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cpct) * 1)
    }
  }
}, {
  title: '触发特效后暴击伤害',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
}, {
  title: '触发特效后击破特攻',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.stance) * 1)
    }
  }
}, {
  title: '触发特效后效果命中',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effPct) * 1)
    }
  }
}, {
  title: '触发特效后效果抵抗',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.effDef) * 1)
    }
  }
}, {
  title: '触发特效后充能效率',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.recharge) * 1)
    }
  }
},{
  title: '当前增伤百分比',
  params: { team: false,YL: false },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.dmg) * 1)
    }
  }
}, {
  title: '当前遗器套装',
  params: { team: false,YL: false },
  dmg: ({ artis , attr, calc, talent }) => {
    return {
      avg: artis ,
      type: 'text'
    }
  }
},{
  title: '[A]从此岁月朦胧-伤害',
  params: { team: false,YL: false },
  dmg: ({ talent, attr }, { basic }) => basic(talent.a['技能伤害'] * attr.hp, 'a')
},{
  title: '[忆灵]触发特效后暴击伤害',
  params: { team: false,YL: true },
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.cdmg) * 1)
    }
  }
},{
  title: '[忆灵]晚安，全世界无眠-伤害',
  check: ({ cons }) => cons < 1,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp, 'me')
},{
  title: '[忆灵-敌人≥4]晚安，全世界无眠-伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp * 1.2, 'me')
},{
  title: '[忆灵-敌人=3]晚安，全世界无眠-伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp * 1.25, 'me')
},{
  title: '[忆灵-敌人=2]晚安，全世界无眠-伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp * 1.3, 'me')
},{
  title: '[忆灵-敌人=1]晚安，全世界无眠-伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q['技能伤害'] * attr.hp * 1.5, 'me')
},{
  title: '[忆灵]追忆，蹁跹，如雨-总伤害',
  check: ({ cons }) => cons < 1,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['技能伤害'] + talent.q2['额外伤害'] * 3) * attr.hp, 'me')
},{
  title: '[忆灵-敌人≥4]追忆，蹁跹，如雨-总伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['技能伤害'] + talent.q2['额外伤害'] * 3) * attr.hp * 1.2, 'me')
},{
  title: '[忆灵-敌人=3]追忆，蹁跹，如雨-总伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['技能伤害'] + talent.q2['额外伤害'] * 3) * attr.hp * 1.25, 'me')
},{
  title: '[忆灵-敌人=2]追忆，蹁跹，如雨-总伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['技能伤害'] + talent.q2['额外伤害'] * 3) * attr.hp * 1.3, 'me')
},{
  title: '[忆灵-敌人=1]追忆，蹁跹，如雨-总伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['技能伤害'] + talent.q2['额外伤害'] * 3) * attr.hp * 1.5, 'me')
},{
  title: '[忆灵]迷梦，流失，如露-主目标伤害',
  dmgKey: 'AE',
  check: ({ cons }) => cons < 1,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['主目标伤害'] * 16) * attr.hp, 'me')
},{
  title: '[忆灵-敌人≥4]迷梦，流失，如露-主目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['主目标伤害'] * 16 * attr.hp * 1.2, 'me')
},{
  title: '[忆灵-敌人=3]迷梦，流失，如露-主目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['主目标伤害'] * 16 * attr.hp * 1.25, 'me')
},{
  title: '[忆灵-敌人=2]迷梦，流失，如露-主目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['主目标伤害'] * 16 * attr.hp * 1.3, 'me')
},{
  title: '[忆灵-敌人=1]迷梦，流失，如露-主目标伤害',
  dmgKey: 'AE',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['主目标伤害'] * 16 * attr.hp * 1.5, 'me')
},{
  title: '[忆灵]迷梦，流失，如露-其他目标伤害',
  check: ({ cons }) => cons < 1,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic((talent.q2['其他目标伤害'] * 16) * attr.hp, 'me')
},{
  title: '[忆灵-敌人≥4]迷梦，流失，如露-其他目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['其他目标伤害'] * 16 * attr.hp * 1.2, 'me')
},{
  title: '[忆灵-敌人=3]迷梦，流失，如露-其他目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['其他目标伤害'] * 16 * attr.hp * 1.25, 'me')
},{
  title: '[忆灵-敌人=2]迷梦，流失，如露-其他目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['其他目标伤害'] * 16 * attr.hp * 1.3, 'me')
},{
  title: '[忆灵-敌人=1]迷梦，流失，如露-其他目标伤害',
  check: ({ cons }) => cons > 0,
  params: { team: false,YL: true },
  dmg: ({ talent, attr }, { basic }) => basic(talent.q2['其他目标伤害'] * 16 * attr.hp * 1.5, 'me')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ cons, params }) =>  params.YL === true,
  title: '白昼悄然离去：我方全体忆灵的暴击伤害提高[cdmg]%',
  data: {
    cdmg: ({ talent, attr }) => talent.e['暴击伤害提高'] * 100
  }
},{
  title: '至暗之谜：敌方全体受到的伤害提高[enemydmg]%,长夜月和忆灵「长夜」造成的伤害提高[dmg]%',
  data: {
    enemydmg: ({ talent, attr }) => talent.q['受到的伤害提高'] * 100,
    dmg: ({ talent, attr }) => talent.q['伤害提高'] * 100
  }
},{
  title: '孤独，浮游，漆黑：长夜月和忆灵「长夜」造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent, attr }) => talent.e2['伤害提高'] * 100
  }
},{
  check: ({ cons, params }) =>  params.YL === true,
  title: '天亮了，雨落了：我方全体忆灵的暴击伤害提高[cdmg]%',
  data: {
    cdmg: 65
  }
},{
  title: '天黑黑，月寂寂：长夜月和忆灵「长夜」的暴击率提高30%',
  data: {
    cpct: 35
  }
},{
  title: '6命：全属性抗性穿透提高20%',
  cons: 6,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
