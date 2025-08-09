export const details = [
  {
    title: 'E一段伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['一段伤害'], 'e')
  }, {
    title: 'E二段伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['二段伤害'], 'e')
  }, {
    title: 'Q水弹伤害',
    dmg: ({ talent }, dmg) => dmg(talent.q['水弹伤害'], 'q')
  }, {
    check: ({ cons }) => cons >= 2,
    title: '二命额外伤害',
    params: { Lunar: true },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.mastery) + 300, 'q')
  }, {
    title: '满辉月感电伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({}, { reaction }) => reaction('lunarCharged')
  }, {
    title: '满辉绽放伤害',
    params: { Moonsign: 3 },
    dmg: ({}, { reaction }) => reaction('bloom')
  }
,
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
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后元素精通',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.mastery) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '触发特效后护盾强效',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.shield) * 1) })
}, {
  title: '当前圣遗物套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]

export const defDmgIdx = 2
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [
  {
    title: '爱诺天赋：[结构化功率提升] 元素爆发造成的伤害提升[qPlus]',
    sort: 9,
    data: {
      qPlus: ({ attr, calc }) => calc(attr.mastery) * 50 / 100
    }
  },
  {
    title: '爱诺1命：施放元素战技或元素爆发后元素精通提升[mastery]点',
    cons: 1,
    data: {
      mastery: 80
    }
  },
  {
    title: '爱诺6命：施放元素爆发后,当前场上角色触发的感电、绽放、月感电、月绽放造成的伤害提升[lunarBloom]%',
    cons: 6,
    data: {
      electroCharged: 35,
      bloom: 35,
      lunarCharged: 35,
      lunarBloom: 35
    }
  }
]
