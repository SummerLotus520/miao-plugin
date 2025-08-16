export const details = [{
  title: '普攻首段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a', 'phy')
}, {
  title: 'E伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['上挑攻击伤害'], 'e')
}, {
  title: '0阶E伤害',
  dmg: ({ talent }, { dynamic }) => dynamic(talent.e['零阶高压粉碎伤害'], 'e', { dynamicDmg: 40, dynamicCpct: 15 })
}, {
  title: '4阶E伤害',
  dmg: ({ talent }, { dynamic }) => dynamic(talent.e['四阶高压粉碎伤害'], 'e', { dynamicPhy: 40, dynamicCpct: 15 }, 'phy')
}, {
  title: 'Q伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q状态·冰伤流4轮EEA',
  check: ({ calc, attr }) => calc(attr.phy) < 58,
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => {
    let normalEDmg = dmg(talent.e['上挑攻击伤害'], 'e')
    let e2Dmg = dmg.dynamic(talent.e['零阶高压粉碎伤害'], 'e', { dynamicDmg: 40, dynamicCpct: 15 })
    let a1Dmg = dmg(talent.a['一段伤害'], 'a', 'phy')
    return {
      dmg: (normalEDmg.dmg + e2Dmg.dmg + a1Dmg.dmg) * 4,
      avg: (normalEDmg.avg + e2Dmg.avg + a1Dmg.avg) * 4
    }
  }
}, {
  title: 'Q状态·物理流3轮EAAAA',
  check: ({ calc, attr }) => calc(attr.phy) >= 58,
  dmgKey: 'q',
  dmg: ({ talent }, dmg) => {
    let normalEDmg = dmg(talent.e['上挑攻击伤害'], 'e')
    let a1Dmg = dmg(talent.a['一段伤害'], 'a', 'phy')
    let a2Dmg = dmg(talent.a['二段伤害'], 'a', 'phy')
    let e2Dmg = dmg.dynamic(talent.e['四阶高压粉碎伤害'], 'e', { dynamicPhy: 40, dynamicCpct: 15 }, 'phy')
    return {
      dmg: (normalEDmg.dmg + a1Dmg.dmg * 2 + a2Dmg.dmg + e2Dmg.dmg) * 3,
      avg: (normalEDmg.avg + a1Dmg.avg * 2 + a2Dmg.avg + e2Dmg.avg) * 3
    }
  }
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

export const defDmgKey = 'q'
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '天赋-并流式冷凝机关：触发碎冰反应后，使浮冰增压·高压粉碎造成的伤害提高40%'
}, {
  title: '菲米尼1命：浮冰增压·高压粉碎的暴击率提高15%',
  cons: 1
}, {
  title: '菲米尼4命：触发冰冻、碎冰、超导反应后，满层Buff提升攻击力[atkPct]%',
  cons: 4,
  data: {
    atkPct: 18
  }
}, {
  title: '菲米尼6命：触发冰冻、碎冰、超导反应后，满层Buff提升暴击伤害[cdmg]%',
  cons: 6,
  data: {
    cdmg: 36
  }
}]

export const createdBy = 'Aluxes'
