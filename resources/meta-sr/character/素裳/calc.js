export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '战技+剑势伤害',
  dmg: ({ talent }, dmg) => {
    let eDmg = dmg(talent.e['技能伤害'], 'e')
    let ePlusDmg = dmg.dynamic(talent.e['附加伤害'], 'e', { dynamicDmg: 20 })
    return {
      dmg: eDmg.dmg + ePlusDmg.dmg,
      avg: eDmg.avg + ePlusDmg.avg
    }
  }
}, {
  title: '终结技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.q['技能伤害'], 'q')
}, {
  title: '终结技后满剑势战技伤害',
  dmg: ({ talent }, dmg) => {
    let eDmg = dmg(talent.e['技能伤害'], 'e')
    let ePlusDmg = dmg.dynamic(talent.e['附加伤害'], 'e', { dynamicDmg: 20 })
    return {
      dmg: eDmg.dmg + ePlusDmg.dmg * 2,
      avg: eDmg.avg + ePlusDmg.avg * 2
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
export const defDmgIdx = 4

export const buffs = [{
  title: '天赋-游刃若水：敌方弱点被击破后，素裳速度提高[speedPct]%',
  data: {
    speedPct: ({ talent }) => talent.t['速度提高'] * 100
  }
}, {
  title: '行迹-逐寇：10层Buff提升【剑势】造成的伤害[_dmg]%',
  tree: 1,
  data: {
    _dmg: 20
  }
}, {
  title: '素裳4命：击破特攻提高[stance]%',
  cons: 4,
  data: {
    stance: 40
  }
}, {
  title: '素裳6命：天赋的加速效果额外提高[speedPct]%',
  cons: 6,
  data: {
    speedPct: ({ talent }) => talent.t['速度提高'] * 100
  }
}]

export const createdBy = 'Aluxes'
