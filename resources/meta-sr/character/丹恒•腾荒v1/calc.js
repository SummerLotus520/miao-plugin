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
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.heal) * 1)
    }
  }
}, {
  title: '触发特效后护盾加成',
  dmg: ({ attr, calc }) => {
    return {
      avg: Math.min(calc(attr.shield) * 1)
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
  title: '[A]镇恶护生-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '[E]战技护盾量',
  dmg: ({ talent, attr }, { shield }) => shield(talent.e['护盾量百分比'] * attr.atk + talent.e['护盾量固定值'])
}, {
  title: '[Q]终结技护盾量',
  dmg: ({ talent, attr }, { shield }) => shield(talent.q['护盾量百分比'] * attr.atk + talent.q['护盾量固定值'])
}, {
  title: '[T]天赋护盾量',
  dmg: ({ talent, attr }, { shield }) => shield(talent.t['护盾量百分比'] * attr.atk + talent.t['护盾量固定值'])
}, {
  title: '[限制]最高护盾量',
  dmg: ({ talent, attr }, { shield }) => shield((talent.e['护盾量百分比'] * attr.atk + talent.e['护盾量固定值'])*3)
}, {
  title: '[Q]亢龙无悔，移山辟世-伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '[召唤物]龙灵-追击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['追加伤害'], 't')
}]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '6命：敌方全体受到的伤害提高20%',
  cons: 6,
  data: {
    enemydmg: 20
  }
}]

export const createdBy = 'Ehya丶Calc'
