import { Format } from '#miao'

export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'] * 5, 'e')
}, {
  title: '普攻灼烧持续伤害',
  tree: 3,
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'] * 0.5, 'dot', 'skillDot')
}, {
  title: '蓄能5层全队加攻',
  dmg: ({ talent }) => {
    return {
      avg: Format.percent(talent.t['攻击力提高'] * 5),
      type: 'text'
    }
  }
}, {
  title: '终结技全队速度提高',
  dmg: ({ talent }) => {
    return {
      avg: talent.q['速度提高']
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
  title: '触发特效后速度',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.speed) * 1) })
}, {
  title: '触发特效后暴击率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cpct) * 1) })
}, {
  title: '触发特效后暴击伤害',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.cdmg) * 1) })
}, {
  title: '触发特效后击破特攻',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.stance) * 1) })
}, {
  title: '触发特效后效果命中',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effPct) * 1) })
}, {
  title: '触发特效后效果抵抗',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.effDef) * 1) })
}, {
  title: '触发特效后充能效率',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.recharge) * 1) })
}, {
  title: '触发特效后治疗加成',
  dmg: ({ attr, calc }) => ({ avg: Math.min(calc(attr.heal) * 1) })
}, {
  title: '当前遗器套装',
  dmg: ({ artis }) => ({ avg: artis, type: 'text' })
}
]

export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [{
  title: '行迹-点燃：我方全体火属性伤害提高18%',
  tree: 3,
  data: {
    dmg: 18
  }
}, {
  title: '蓄能5层：攻击力提高[atkPct]%',
  data: {
    atkPct: ({ talent }) => talent.t['攻击力提高'] * 5 * 100
  }
}]

export const createdBy = 'Aluxes'
