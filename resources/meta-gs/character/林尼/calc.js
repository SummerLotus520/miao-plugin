export const details = [{
  title: '满蓄力重击伤害',
  params: { a2: true },
  dmg: ({ talent }, dmg) => dmg(talent.a['隐具魔术箭伤害'], 'a2')
}, {
  title: '礼花术弹伤害',
  params: { catcathat: true },
  dmg: ({ talent, attr, calc }, { basic }) => {
    const atk = calc(attr.atk)
    const a2dmg = atk * 0.8 + atk * talent.a['礼花术弹伤害'] / 100
    return basic(a2dmg, 'a2')
  }
}, {
  title: '满层E伤害',
  dmg: ({ talent }, dmg) => {
    let eDmg = dmg(talent.e['技能伤害'], 'e')
    let ePlusDmg = dmg(talent.e['技能伤害加成'] * 5, 'e')
    return {
      dmg: eDmg.dmg + ePlusDmg.dmg,
      avg: eDmg.avg + ePlusDmg.avg
    }
  }
}, {
  title: 'Q总伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'] + talent.q['引爆礼花伤害'], 'q')
},
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

export const defDmgIdx = 0
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  check: ({ params }) => params.catcathat === true,
  title: '天赋-惊险演出：基于攻击力的80%，提高怪笑猫猫帽造成的伤害'
}, {
  title: '天赋-完场喝彩：队伍有三名火元素角色时，对处于火元素影响下的敌人造成的伤害提升[dmg]%',
  data: {
    dmg: 100
  }
}, {
  title: '双火共鸣：攻击力提高[atkPct]%',
  data: {
    atkPct: 25
  }
}, {
  title: '林尼2命：在场6秒后，暴击伤害提高60%',
  cons: 2,
  data: {
    cdmg: 60
  }
}, {
  title: '林尼4命：重击命中敌人后，降低敌人火元素抗性20%',
  cons: 4,
  data: {
    kx: 20
  }
}, {
  check: ({ params }) => params.a2 === true,
  title: '林尼6命：发射隐具魔术箭时，额外发射一枚礼花术弹·重奏，造成礼花术弹80%的伤害',
  sort: 9,
  cons: 6,
  data: {
    a2Plus: ({ talent, attr, calc }) => talent.a['礼花术弹伤害'] / 100 * calc(attr.atk) * 0.8
  }
}]

export const createdBy = 'Aluxes'
