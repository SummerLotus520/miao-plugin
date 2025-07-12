export const details = [{
  title: '满战意E焚曜之环伤害',
  params: { Ring: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['焚曜之环伤害'], 'e,nightsoul')
},{
  title: '满战意驰轮车重击循环伤害',
  params: { Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2,nightsoul')
},{
  title: '满战意驰轮车重击循环融化伤害',
  params: { Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2,nightsoul', 'melt')
},{
  title: '满战意Q技能伤害',
  params: { Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul')
},{
  title: '满战意Q融化伤害',
  params: { Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'melt')
},{
  title: '班玛希茜满战意驰轮车重击循环融化伤害',
  params: { team: true, Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.e['驰轮车重击循环伤害'], 'a2,nightsoul', 'melt')
},{
  title: '班玛希茜满战意Q融化伤害',
  params: { team: true, Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'melt')
},{
  title: '班玛希茜(高配)满战意Q融化伤害',
  params: { team_best: true, Flamestrider: true },
  dmg: ({ talent, attr }, dmg) => dmg(talent.q['技能伤害'], 'q,nightsoul', 'melt')
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

export const defParams = { Nightsoul: true }
export const defDmgIdx = 6
export const mainAttr = 'atk,cpct,cdmg,mastery'

export const buffs = [{
  check: ({ params }) => params.Flamestrider === true,
  title: '玛薇卡元素爆发：满战意施放元素爆发后，坠日斩伤害提升[qPlus]，驰轮车普通攻击伤害提升[aPlus]，驰轮车重击伤害提升[a2Plus]',
  sort: 9,
  data: {
    qPlus: ({ talent, calc, attr }) => 200 * talent.q['坠日斩伤害提升'] * calc(attr.atk) / 100 ,
    aPlus: ({ talent, calc, attr }) => 200 * talent.q['驰轮车普通攻击伤害提升'] * calc(attr.atk) / 100 ,
    a2Plus: ({ talent, calc, attr }) => 200 * talent.q['驰轮车重击伤害提升'] * calc(attr.atk) / 100 ,
  }
},{
  title: '玛薇卡天赋：队伍中的附近的角色触发「夜魂迸发」时，攻击力提升[atkPct]%',
  data: {
    atkPct: 30
  }
},{
  title: '玛薇卡天赋：施放元素爆发后，如果拥有满层战意，则造成的伤害提升[dmg]%',
  data: {
    dmg: 40
  }
},{
  title: '玛薇卡1命：获取战意后，玛薇卡的攻击力提升[atkPct]%',
  cons: 1,
  data: {
    atkPct: 40
  }
},{
  title: '玛薇卡2命：基础攻击力提升[atkBase]',
  sort: 2,
  cons: 2,
  data: {
    atkBase: 200
  }
},{
  check: ({ params }) => params.Ring === true,
  title: '玛薇卡2命：夜魂加持状态下时，焚曜之环附近的敌人的防御力降低[enemyDef]',
  cons: 2,
  data: {
    enemyDef: 20
  }
},{
  title: '玛薇卡2命：夜魂加持状态下时，普通攻击伤害提升[aPlus]，重击伤害提升[a2Plus]，元素爆发伤害提升[qPlus]',
  sort: 9,
  cons: 2,
  data: {
    aPlus: ({ calc, attr }) => calc(attr.atk) * 60 / 100,
    a2Plus: ({ calc, attr }) => calc(attr.atk) * 90 / 100,
    qPlus: ({ calc, attr }) => calc(attr.atk) * 120 / 100
  }
},{
  title: '玛薇卡4命：施放元素爆发燔天之时后额外获得[dmg]%伤害加成 ',
  cons: 4,
  data: {
    dmg: 10
  }
},{
  check: ({ params }) => params.Flamestrider === true,
  title: '玛薇卡6命：驾驶驰轮车时使附近的敌人的防御力降低[enemyDef]% ',
  cons: 6,
  data: {
    enemyDef: 20
  }
},{
  check: ({ params }) => params.team === true,
  title: '班玛希茜：班尼特6命风鹰剑宗室4、希诺宁0+0勇者4、茜特菈莉0+0',
  data: {
    atkPlus: 1203,
    atkPct: 25 + 20,
    dmg: 15 + 40,
    kx: 36 + 20
  }
},{
  check: ({ params }) => params.team_best === true,
  title: '班玛希茜（高配）：班尼特6命风鹰剑宗室4、希诺宁6+5教官4、茜特菈莉6+5勇者4（茜特菈莉精通最终面板，按1500计）',
  data: {
    atkPlus: 1203,
    atkPct: 25 + 20 + 45,
    dmg: 15 + 40 + 51.2 + 56 + 60,
    kx: 45 + 20 + 20,
    qPlus: 1500 * 2,
    mastery: 250 + 120
  }
}]

export const createdBy = '冰翼'
