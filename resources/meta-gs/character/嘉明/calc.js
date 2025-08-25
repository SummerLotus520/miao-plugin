export const details = [{
  title: '下落攻击·踏云献瑞伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['下落攻击·踏云献瑞伤害'], 'a3')
}, {
  title: '下落攻击·踏云献瑞蒸发',
  dmg: ({ talent }, dmg) => dmg(talent.e['下落攻击·踏云献瑞伤害'], 'a3', 'vaporize')
}, {
  title: '猊兽·文仔砸击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['猊兽·文仔砸击伤害'], 'q')
}, {
  title: '猊兽·文仔砸击蒸发',
  dmg: ({ talent }, dmg) => dmg(talent.q['猊兽·文仔砸击伤害'], 'q', 'vaporize')
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
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  title: '嘉明天赋：生命值低于50%时,获得[heal]%受治疗加成。生命值高于或等于50%时,下落攻击·踏云献瑞造成的伤害提升[a3Dmg]%。',
  data: {
    heal: 20,
    a3Dmg: 20
  }
}, {
  title: '嘉明2命：受到治疗溢出,攻击力提升[atkPct]%',
  cons: 2,
  data: {
    atkPct: 20
  }
}, {
  title: '嘉明6命：下落攻击·踏云献瑞的暴击率提升[a3Cpct]%，暴击伤害提升[a3Cdmg]%',
  cons: 6,
  data: {
    a3Cpct: 20,
    a3Cdmg: 40
  }
}, 'vaporize']

export const createdBy = 'liangshi'
