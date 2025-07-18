export const details = [{
  title: '战技伤害',
  dmg: ({ talent }, dmg) => dmg(talent.e['单体伤害'], 'e')
}, {
  title: '追加攻击伤害',
  dmg: ({ talent }, dmg) => dmg(talent.t['追加伤害'], 't')
}, {
  title: '战技+引爆dot伤害',
  params: { isDot: true },
  dmg: ({ talent, cons, weapon }, dmg) => {
    let plusDot = cons >= 6 ? 1.56 : 0
    let weaponDot = weapon.name === '只需等待' ? (weapon.affix * 10 + 50) / 100 : 0
    let eDmg = dmg(talent.e['单体伤害'], 'e')
    let dotDmg = dmg((talent.q['回合持续伤害'] + plusDot + weaponDot) * talent.e['额外持续伤害'], 'dot', 'skillDot')
    return {
      dmg: eDmg.dmg + dotDmg.avg,
      avg: eDmg.avg + dotDmg.avg
    }
  }
}, {
  title: '终结技伤害',
  params: { isDot: true },
  dmg: ({ talent, cons, weapon }, dmg) => {
    let plusDot = cons >= 6 ? 1.56 : 0
    let weaponDot = weapon.name === '只需等待' ? (weapon.affix * 10 + 50) / 100 : 0
    let qDmg = dmg(talent.q['技能伤害'], 'q')
    let dotDmg = dmg((talent.q['回合持续伤害'] + plusDot + weaponDot) * talent.q['额外持续伤害'], 'dot', 'skillDot')
    return {
      dmg: qDmg.dmg + dotDmg.avg,
      avg: qDmg.avg + dotDmg.avg
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

export const defParams = { tArtisBuffCount: 6 }
export const mainAttr = 'atk,cpct,cdmg'
export const defDmgIdx = 3

export const buffs = [{
  title: '卡芙卡1命：目标受到的持续伤害提高30%',
  cons: 1,
  data: {
    dotEnemydmg: 30
  }
}, {
  title: '卡芙卡2命：我方全体造成的持续伤害提高25%',
  cons: 2,
  data: {
    dotDmg: 25
  }
}, {
  title: '卡芙卡六命：持续伤害倍率提高156%',
  cons: 6
}, {
  title: '只需等待-游丝：游丝状态下，敌方目标陷入触电状态，每回合开始受到等同于装备者攻击力[dotData]%的雷属性持续伤害',
  check: ({ weapon, params }) => (weapon.name === '只需等待' && params.isDot === true),
  data: {
    dotData: ({ weapon }) => weapon.affix * 10 + 50
  }
}]

export const createdBy = 'Aluxes'
