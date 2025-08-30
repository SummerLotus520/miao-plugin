import { Format } from '#miao'

export const details = [{
  title: 'E技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: 'Q技能伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: 'Q护盾吸收量',
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent.q['圣眷护盾吸收量2'][0] * calc(attr.hp) / 100 + talent.q['圣眷护盾吸收量2'][1])
}, {
  title: '场上角色攻击速度提升',
  dmg: ({ cons, attr, calc }) => {
    let num = cons == 6 ? 0.1 : 0
    return {
      avg: Format.percent(Math.min(Math.floor(calc(attr.hp) / 1000) * 0.005, 0.2) + num),
      type: 'text'
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

export const defDmgIdx = 2
export const mainAttr = 'atk,hp,cpct,cdmg'

export const buffs = [{
  title: '塔利雅2命：处于「祝颂」效果唤出的圣眷护盾庇佑下时，场上角色的护盾强效提升[shield]%',
  cons: 2,
  data: {
    shield: 25,
  }
}]

export const createdBy = '冰翼'
