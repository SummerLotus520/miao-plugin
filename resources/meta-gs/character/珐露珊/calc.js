export const details = [{
  title: '开Q提供风系伤害',
  dmg: ({ attr }) => {
    return {
      avg: (attr.atk.base || 0) * 0.32
    }
  }
}, {
  title: 'E减抗后Q伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  check: ({ cons }) => cons >= 6,
  title: '开Q后E后台伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['风压坍陷风涡伤害'], 'e')
}, {
  title: '开Q后飓烈箭伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['满蓄力瞄准射击'], 'a2')
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
  title: '珐露珊6命：Q提升暴击伤害40%',
  cons: 6,
  data: {
    cdmg: 40
  }
}, {
  title: '诡风之祸：降低敌人风抗[kx]%',
  data: {
    kx: 30
  }
}, {
  title: '祈风之赐：获得风伤加成[dmg]%',
  data: {
    dmg: ({ talent }) => talent.q['风元素伤害加成']
  }
}, {
  title: '珐露珊天赋：处于「祈风之赐」效果下角色的普通攻击、重击、下落攻击、元素战技或元素爆发对敌人造成风元素伤害时，基于珐露珊基础攻击力的32%，提高造成的伤害。',
  data: {
    aPlus: ({ attr }) => attr.atk.base * 32 / 100 ,
    a2Plus: ({ attr }) => attr.atk.base * 32 / 100 ,
    a3Plus: ({ attr }) => attr.atk.base * 32 / 100 ,
    ePlus: ({ attr }) => attr.atk.base * 32 / 100 ,
    qPlus: ({ attr }) => attr.atk.base * 32 / 100
  }
}]
