import lodash from 'lodash'

export const details = [{
  check: ({ cons }) => cons < 2,
  title: '半血水母每跳治疗',
  dmgKey: 'q',
  dmg: ({ attr, talent, calc }, { heal }) => {
    let t = talent.e['治疗量2']
    let hp = calc(attr.hp)
    return heal(hp * t[0] / 100 + t[1] * 1)
  }
}, {
  cons: 2,
  title: '半血水母每跳治疗',
  dmgKey: 'q',
  dmg: ({ attr, talent, calc }, { heal }) => {
    let t = talent.e['治疗量2']
    let hp = calc(attr.hp)
    return heal(hp * t[0] / 100 + t[1] * 1 + hp * 0.045)
  }
}, {
  title: '开Q普攻三段伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['三段伤害'], 'a')
}, {
  title: '开Q重击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['重击伤害'], 'a2')
}, {
  title: '开Q普攻三段总伤',
  dmg: ({ attr, talent, cons, calc }, dmg) => {
    let ret = { dmg: 0, avg: 0 }
    lodash.forEach('一二三'.split(''), (num) => {
      let dmgRet = dmg(talent.a[`${num}段伤害`], 'a')
      ret.dmg += dmgRet.dmg
      ret.avg += dmgRet.avg
    })
    if (cons > 0) {
      let dmgRet = dmg.basic(calc(attr.hp) * 0.3)
      ret.dmg += dmgRet.dmg
      ret.avg += dmgRet.avg
    }
    return ret
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
export const defDmgIdx = 2
export const mainAttr = 'hp,atk'

export const buffs = [{
  title: '心海被动：暴击率降低100%，治疗加成提高25%',
  isStatic: true,
  data: {
    cpct: -100,
    heal: 25
  }
}, {
  title: '心海被动：开Q后重击伤害基于治疗加成提高[aPlus]',
  sort: 9,
  data: {
    aPlus: ({ attr, calc }) => calc(attr.hp) * calc(attr.heal) * 0.15 / 100,
    a2Plus: ({ attr, calc }) => calc(attr.hp) * calc(attr.heal) * 0.15 / 100
  }
}, {
  title: '海人化羽：开Q后普攻伤害提高[aPlus]',
  sort: 9,
  data: {
    aPlus: ({ attr, talent, calc }) => calc(attr.hp) * talent.q['普通攻击伤害提升'] / 100
  }
}, {
  title: '海人化羽：开Q后重击伤害提高[a2Plus]',
  sort: 9,
  data: {
    a2Plus: ({ attr, talent, calc }) => calc(attr.hp) * talent.q['重击伤害提升'] / 100
  }
}, {
  title: '心海1命：开Q后第三段普攻额外释放一只游鱼，造成生命值上限30%的水元素伤害',
  cons: 1
}, {
  title: '心海6命：开Q攻击获得治疗后，获得40%水伤加成',
  sort: 6,
  cons: 6,
  data: {
    dmg: 40
  }
}]
