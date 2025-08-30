export const details = [{
  title: 'E技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: 'E「冻霜芭菲」伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['冻霜芭菲伤害'], 'e')
}, {
  title: 'Q技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q释放治疗量',
  dmg: ({ talent, attr, calc }, { heal }) => heal(talent.q['治疗量2'][0] / 100 * calc(attr.atk) + talent.q['治疗量2'][1])
}, {
  title: '天赋每跳治疗',
  dmg: ({ attr, calc }, { heal }) => heal(138.24 / 100 * calc(attr.atk))
}, {
  title: '6命「特级冻霜芭菲」伤害',
  cons: 6,
  dmg: ({}, dmg) => dmg(500, 'e')
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

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '双冰共鸣：攻击冰元素附着或冻结状态下的敌人时，暴击率提高[cpct]%',
  data: {
    cpct: 15
  }
}, {
  title: '爱可菲天赋：当队伍中存在4名水/冰元素角色时，爱可菲的元素战技或元素爆发命中敌人后，将使该敌人的水元素抗性与冰元素抗性降低[kx]%',
  data: {
    kx: 55
  }
}, {
  title: '爱可菲1命：队伍中所有角色的元素类型均为水/冰元素时，爱可菲施放元素战技或元素爆发后，冰元素伤害的暴击伤害提升[cdmg]%',
  cons: 1,
  data: {
    cdmg: 60
  }
}]

export const createdBy = '冰翼'
