export const details = [{
    title: '二段E伤害',
    dmgKey: 'e',
    dmg: ({ talent }, dmg) => dmg(talent.e['北国枪阵伤害'], 'e')
  },
  {
    title: 'Q释放伤害',
    dmg: ({ talent }, dmg) => dmg(talent.q['技能初始伤害'], 'q')
  },
  {
    title: 'Q单段伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['中间段月感电伤害'] / 100, '', 'lunarCharged')
  },
  {
    title: 'Q尾段伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['最终段月感电伤害'] / 100, '', 'lunarCharged')
  },
  {
    title: 'Q雷霆交响释放伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['雷霆交响伤害'] / 100, '', 'lunarCharged')
  },
  {
    title: 'Q雷霆交响额外伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['雷霆交响额外伤害'] / 100, '', 'lunarCharged')
  },
  {
    title: 'Q雷霆交响释放伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({ calc, attr, talent }, { basic }) => basic(calc(attr.atk) * talent.q['雷霆交响伤害'] / 100, '', 'lunarCharged')
  },
  {
    title: '单人月感电伤害',
    params: { Lunar: true, Moonsign: 3 },
    dmg: ({}, { reaction }) => reaction('lunarCharged')
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

export const defDmgIdx = 3
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [
  {
    check: ({ params }) => params.Lunar === true,
    title: '菲林斯天赋：处于满辉时月感电伤害提升[lunarCharged]%',
    data: {
      lunarCharged: 20
    }
  },
  {
    title: '菲林斯天赋：元素精通提升[mastery]',
    sort: 9,
    data: {
      mastery: ({ attr, calc, cons }) => Math.min((calc(attr.atk) / 100 * (cons >= 4 ? 10 : 8)), (cons >= 4 ? 220 : 160))
    }
  },
  {
    check: ({ params }) => params.Lunar === true,
    title: '月兆祝赐：触发感电反应时转为触发月感电反应,基础伤害提升[fypct]',
    sort: 9,
    data: {
      fypct: ({ attr, calc }) => Math.min((calc(attr.atk) / 100 * 0.7), 14)
    }
  },
  {
    title: '菲林斯2命：处于满辉时敌人的元素抗性降低[kx]%',
    cons: 2,
    data: {
      kx: 25
    }
  },
  {
    title: '菲林斯4命：攻击力提升[atkPct]%',
    cons: 4,
    data: {
      atkPct: 20
    }
  },
  {
    title: '菲林斯6命：对敌人造成的月感电反应伤害擢升[lunarChargedEle]%',
    cons: 6,
    data: {
      elevated: 45
    }
  }
]
