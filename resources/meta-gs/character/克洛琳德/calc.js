export const details = [{
    title: 'E后普通攻击',
    dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害2'][0], 'a')
}, {
    title: 'E后穿透射击',
    params: { blPct: 0.5 },
    dmg: ({ talent }, dmg) => dmg(talent.e['驰猎伤害2'][1], 'a')
}, {
    title: 'E剑击伤害',
    params: { blPct: 0 },
    dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害2'][0], 'a')
}, {
    title: 'E强化剑击伤害',
    params: { blPct: 0.5 },
    dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害2'][1], 'a')
}, {
    title: 'E贯夜·契令伤害',
    dmg: ({ talent }, dmg) => dmg(talent.e['贯夜伤害2'][2], 'a')
}, {
    title: 'Q单段伤害',
    dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害2'][0], 'q')
}, {
    title: 'Q完整伤害',
    dmg: ({ talent }, dmg) => {
    let q1 = dmg(talent.q['技能伤害2'][0], 'q')
    return {
      dmg: q1.dmg * 5,
      avg: q1.avg * 5
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

export const defParams = ({ weapon }) => weapon.name === '海渊终曲' ? { BondOfLife: 35 * 3 + 25, blPct: 1 } : { BondOfLife: 35 * 3, blPct: 1 }// 生命之契在此调整,请勿超过200,默认生命之契未计入队友治疗转化
export const defDmgIdx = 4
export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'

export const buffs = [{
    title: '克洛琳德天赋：触发雷元素反应普通攻击与残光将终造成的伤害提升[aPlus]',
    data: {
      aPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800)),
      qPlus: ({ attr, cons }) => Math.min((attr.atk * (cons >= 2 ? 30 : 20) / 100 * 3), (cons >= 2 ? 2700 : 1800))
    }
}, {
    title: '克洛琳德天赋：生命之契的数值提升或降低时，暴击率提升[cpct]% ',
    data: {
      cpct: 10 * 2
    }
}, {
	title: '克洛琳德4命：[buffCount]%最大生命值的生命之契使残光将终造成的伤害提升[qDmg]',
    cons: 4,
    data: {
      buffCount: ({ talent, params, weapon }) => Math.min(params.blPct * (talent.q['赋予生命之契'] + params.BondOfLife), 200),
      qDmg: ({ talent, params, weapon }) => Math.min((params.blPct * (talent.q['赋予生命之契'] + params.BondOfLife) * 2), 200)
    }
}, {
    title: '克洛琳德6命：施放狩夜之巡后暴击率提高[cpct]%,暴击伤害提高[cdmg]%',
    cons: 6,
    data: {
      cpct: 10,
      cdmg: 70
    }
}]

export const createdBy = 'liangshi'