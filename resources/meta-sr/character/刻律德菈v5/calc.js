import { Format } from '#miao'

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
  title: '[A]易位，兵贵神速-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[军功]目标攻击力提高',
  dmgKey: 'AE',
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Math.min(calc(attr.atk) * talent.t['攻击力提高'])
    }
  }
}, {
  title: '[爵位]目标暴击伤害提高',
  dmg: ({ talent }) => {
    return {
      avg: Math.min(talent.e['暴击伤害提高'] * 100),
      type: 'text'
    }
  }
}, {
  title: '[来者]自身暴击伤害提高',
  dmg: ({ attr, calc, talent }) => {
    return {
      avg: Math.min(360, (calc(attr.atk)-2000) / 100 * 18),
      type: 'text'
    }
  }
}, {
  title: '[Q]世事如棋，四步堪杀-技能伤害',
  check: ({ cons }) => cons < 4,
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[Q]世事如棋，四步堪杀-技能伤害',
  check: ({ cons }) => cons > 3,
  dmg: ({ talent }, dmg) => dmg((talent.q['技能伤害'] + 2.4), 'q')
}, {
  title: '[T]荣光属于凯撒-附加伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['附加伤害'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '来者：暴击伤害提升[cdmg]%',
  check: ({ cons, params, attr }) =>  attr.atk >= 2000,
  data: {
    cdmg: ({ calc, attr, params }) => Math.min(360, (calc(attr.atk)-2000) / 100 * 18)
  }
},{
  title: '见者：暴击率提高100%',
  data: {
    cpct: 100
  }
}, {
  title: '征服者：速度提高20点',
  data: {
    speed: 20
  }
}, {
  title: '1命：无视目标36%的防御力',
  cons: 1,
  data: {
    ignore: 36
  }
}, {
  title: '2命：造成的伤害提高160%',
  cons: 2,
  data: {
    dmg: 160
  }
}, {
  title: '6命：全属性抗性穿透提高40%',
  cons: 6,
  data: {
    kx: 40
  }
}]

export const createdBy = 'Ehya丶Calc'
