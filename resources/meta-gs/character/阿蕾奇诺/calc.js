export const details = [{
  title: 'E后普攻首段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['一段伤害'], 'a')
}, {
  check: ({ cons }) => cons >= 2,
  title: '2命血偿勒令回收伤害',
  dmg: ({ attr }, { basic }) => basic(attr.atk * 900 / 100, '')
}, {
  title: 'Q伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q蒸发伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q', 'vaporize')
}, {
  title: 'Q治疗量',
  params: { BondOfLife: 145 },
  dmg: ({ attr, weapon }, { heal }) => heal(150 / 100 * ((weapon.name === '赤月之形' ? 170 : 145) / 100) * attr.hp + 150 / 100 * attr.atk)
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
export const mainAttr = 'atk,cpct,cdmg,mastery,dmg'
export const defParams = ({ weapon }) => weapon.name === '赤月之形' ? { BondOfLife: 155 } : { BondOfLife: 130 }// 生命之契在此调整,请勿超过200

export const buffs = [{
  title: '阿蕾奇诺天赋：[buffCount]%最大生命值的生命之契,普通攻击伤害提升[aPlus]',
  data: {
    buffCount: ({ params }) => Math.min(params.BondOfLife, 200),
    aPlus: ({ talent, attr, params, cons }) => attr.atk * Math.min(params.BondOfLife, 200) / 100 * (cons >= 1 ? (talent.a['红死之宴提升'] + 100) : talent.a['红死之宴提升']) / 100
  }
}, {
  title: '阿蕾奇诺天赋：在战斗状态下获得[dmg]%伤害加成',
  data: {
    dmg: 40
  }
}, {
  title: '阿蕾奇诺6命：Q造成的伤害提高[qPlus],且释放后普通攻击与元素爆发的暴击率提高[aCpct]%,暴击伤害提高[aCdmg]%',
  cons: 6,
  data: {
    qPlus: ({ attr, params }) => attr.atk * Math.min(params.BondOfLife, 200) / 100 * 700 / 100,
    aCpct: 10,
    aCdmg: 70,
    qCpct: 10,
    qCdmg: 70
  }
}, 'vaporize']

export const createdBy = 'liangshi'
