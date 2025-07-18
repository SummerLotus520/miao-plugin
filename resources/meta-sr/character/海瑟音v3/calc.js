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
  title: '[A]小调，止水中回响-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
},{
  title: '[E]泛音，暗流后齐鸣-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '[Q]绝海回涛，噬魂舞曲-技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'e')
}, {
  title: '[Q]展开结界-持续伤害',
  dmgKey: 'AE',
  dmg: ({ talent }, dmg) => dmg(talent.q['持续伤害'], 'dot', 'skillDot')
}, {
  title: '[T]风化状态-持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['持续伤害'], 'dot', 'windShear')
}, {
  title: '[T]裂伤状态-持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['持续伤害'], 'dot', 'bleed')
}, {
  title: '[T]灼烧状态-持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['持续伤害'], 'dot', 'burn')
}, {
  title: '[T]触电状态-持续伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['持续伤害'], 'dot', 'shock')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '珍珠的琴弦：造成的伤害提高[dmg]%',
  check: ({ cons, params, attr }) =>  attr.effPct >= 60,
  data: {
    cdmg: ({ calc, attr, params }) => Math.min(90, (calc(attr.effPct)-60) / 10 * 15)
  }
},{
  title: '泛音，暗流后齐鸣：敌方全体受到的伤害提高[enemydmg]%',
  data: {
    enemydmg: ({ talent }) => talent.e['伤害提高'] * 100
  }
}, {
  title: '绝海回涛，噬魂舞曲：敌方目标攻击力降低15%，防御力降低[ignore]%',
  data: {
    ignore: ({ talent }) => talent.q['防御力降低'] * 100
  }
},{
  title: '2命：敌方全体全属性抗性降低20%',
  cons: 2,
  data: {
    kx: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
