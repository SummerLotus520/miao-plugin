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
  title: '[E]霜林圣域点按伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['点按伤害'], 'e')
}, {
  title: '[E]霜林圣域长按一段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['长按一段伤害'], 'e')
},{
  title: '[E-草露:1]霜林圣域长按二段伤害',
    params: { Moonsign: 3 },
    dmg: ({ talent, calc, attr }, { basic }) => {
      let e = basic(calc(attr.mastery) * talent.e['长按二段伤害'] / 100, '', 'lunarBloom')
      return {
        dmg: e.dmg * 1,
        avg: e.avg * 1
      }
    }
  },
  {
  title: '[E-草露:2]霜林圣域长按二段伤害',
    params: { Moonsign: 3 },
    dmg: ({ talent, calc, attr }, { basic }) => {
      let e = basic(calc(attr.mastery) * talent.e['长按二段伤害'] / 100, '', 'lunarBloom')
      return {
        dmg: e.dmg * 2,
        avg: e.avg * 2
      }
    }
  },
  {
  title: '[E-草露:3]霜林圣域长按二段伤害',
    params: { Moonsign: 3 },
    dmgKey: 'AE',
    dmg: ({ talent, calc, attr }, { basic }) => {
      let e = basic(calc(attr.mastery) * talent.e['长按二段伤害'] / 100, '', 'lunarBloom')
      return {
        dmg: e.dmg * 3,
        avg: e.avg * 3
      }
    }
  },
  {
  title: '[E]霜林圣域攻击伤害',
  params: { Linnunrata: true },
  dmg: ({ talent, attr }, { basic }) => {
    const A = talent.e['霜林圣域攻击伤害']
    const B = talent.e['霜林圣域攻击伤害2']
    const mastery = attr.mastery
    const atk = attr.atk
    return basic(A * atk / 100 + B * mastery / 100, 'e')
  }
},
  {
    title: '[反应]绽放伤害',
    params: { Moonsign: 1 },
    dmg: ({}, { reaction }) => {
      let r1 = reaction('bloom')
      return {
        dmg: r1.avg * 2,
        avg: r1.avg * 1.15
      }
    }
  }, {
    title: '[霜林圣域]绽放伤害',
    params: { Pale_Hymn: true, Moonsign: 1 },
    dmg: ({}, { reaction }) => {
      let r1 = reaction('bloom')
      return {
        dmg: r1.avg * 2,
        avg: r1.avg * 1.15
      }
    }
  },
  {
    check: ({ cons }) => cons >= 6,
    title: '[6命-满辉]霜林圣域额外月绽放伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 185 / 100, '', 'lunarBloom')
  },
  {
    check: ({ cons }) => cons >= 6,
    title: '[6命-满辉]苍色祷歌额外月绽放伤害',
    params: { Lunar: true, Pale_Hymn: true, Moonsign: 3 },
    dmg: ({ calc, attr }, { basic }) => basic(calc(attr.mastery) * 150 / 100, '', 'lunarBloom')
  }
]

export const defDmgKey = 'AE'
export const mainAttr = 'atk,mastery,cpct,cdmg'

export const buffs = [{
    check: ({ params }) => (params.Moonsign || 0) >= 2,
    title: '菈乌玛天赋：处于满辉时月绽放反应暴击率提升[cpct]%,暴击伤害提升[cdmg]%',
    data: {
      cpct: ({ params }) => params.Lunar === true ? 10 : 0,
      cdmg: ({ params }) => params.Lunar === true ? 20 : 0
    }
  }, {
    check: ({ params }) => params.Linnunrata === true,
    title: '菈乌玛天赋：元素战技造成的伤害提升[eDmg]%',
    sort: 9,
    data: {
      eDmg: ({ attr, calc }) => Math.min((calc(attr.mastery) * 0.04), 32)
    }
  }, {
    check: ({ params }) => params.Lunar === true,
    title: '菈乌玛天赋：触发绽放反应时转为触发月绽放反应，基础伤害提升[fypct]',
    sort: 9,
    data: {
      fypct: ({ attr, calc }) => Math.min((calc(attr.mastery) * 0.0175), 14)
    }
  }, {
    title: '菈乌玛技能：元素战技命中敌人时该敌人的抗性降低[kx]%',
    data: {
      kx: ({ talent }) => talent.e['元素抗性降低']
    }
  }, {
    check: ({ params }) => params.Pale_Hymn === true,
    title: '菈乌玛元素爆发：绽放、超绽放、烈绽放、月绽放反应造成的伤害提升[fyplus]',
    sort: 9,
    data: {
      fyplus: ({ attr, calc, talent, params }) => calc(attr.mastery) * (params.Lunar === true ? talent.q['月绽放反应伤害提升'] : talent.q['绽放、超绽放、烈绽放反应伤害提升']) / 100
    }
  }, {
    title: '菈乌玛2命：绽放、超绽放、烈绽放、月绽放伤害额外提升[fyplus],处于满辉时月绽放反应伤害提升[lunarBloom]%',
    sort: 9,
    cons: 2,
    data: {
      fyplus: ({ attr, calc, params }) => params.Pale_Hymn === true ? (calc(attr.mastery) * (params.Lunar === true ? 400 : 500) / 100) : 0,
      lunarBloom: ({ params }) => ((params.Moonsign || 0) >= 2 ? 40 : 0)
    }
  }, {
    check: ({ params }) => params.Lunar === true,
    title: '菈乌玛6命：[「我愿将这血与泪奉予月明」] 处于满辉时月绽放反应伤害擢升[elevated]%',
    cons: 6,
    data: {
      elevated: ({ params }) => ((params.Moonsign || 0) >= 2 ? 25 : 0)
    }
  }]
//月绽放伤害计算Buff取自https://github.com/yoimiya-kokomi/miao-plugin