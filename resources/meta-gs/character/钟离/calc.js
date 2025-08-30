export const details = [{
  title: '玉璋护盾量',
  talent: 'e',
  dmg: ({ attr, calc, talent }, { shield }) => shield(talent.e['护盾基础吸收量'] + calc(attr.hp) * talent.e['护盾附加吸收量'] / 100)
}, {
  title: '共鸣伤害',
  talent: 'e',
  dmg: ({ talent }, dmg) => dmg(talent.e['岩脊伤害/共鸣伤害'][1], 'e') // 6856
}, {
  title: '天星伤害',
  talent: 'q',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
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

export const mainAttr = 'hp,atk,cpct,cdmg'

export const buffs = [{
  title: '钟离被动：满层Buff下护盾强效提高25%',
  data: {
    shield: 25
  }
}, {
  title: '岩系护盾：岩系护盾吸收效率150%',
  data: {
    shieldInc: 50
  }
}, {
  title: '钟离被动：基于生命值上限，共鸣伤害提高[ePlus]，天星伤害提高[qPlus]',
  sort: 9,
  data: {
    ePlus: ({ attr, calc }) => calc(attr.hp) * 0.019,
    qPlus: ({ attr, calc }) => calc(attr.hp) * 0.33
  }
}, {
  title: '玉璋护盾：降低敌人全抗性20%',
  data: {
    kx: 20
  }
}]
