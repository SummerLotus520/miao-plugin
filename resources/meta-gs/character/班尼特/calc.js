export const details = [{
  title: '点赞攻击力提升',
  dmg: ({ attr, talent, cons }) => {
    let baseAtk = attr.atk.base
    let pct = talent.q['攻击力加成比例']
    if (cons >= 1) {
      pct += 20
    }
    return {
      avg: baseAtk * pct / 100
    }
  }
}, {
  title: 'Q+点E总伤害',
  dmg: ({ attr, talent, cons }, dmg) => {
    let eDmg = dmg(talent.e['点按伤害'], 'e')
    let qDmg = dmg(talent.q['技能伤害'], 'q')
    return {
      avg: eDmg.avg + qDmg.avg,
      dmg: eDmg.dmg + qDmg.dmg
    }
  }
}, {
  title: '点赞每跳治疗',
  dmg: ({ attr, calc, talent }, { heal }) => heal(talent.q['持续治疗2'][0] * calc(attr.hp) / 100 + talent.q['持续治疗2'][1] * 1)
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
  cons: 1,
  title: '班尼特1命：Q攻击力提升比例提高20%'
}, {
  cons: 6,
  title: '班尼特6命：获得15%火伤加成',
  data: {
    dmg: 15
  }
}]
