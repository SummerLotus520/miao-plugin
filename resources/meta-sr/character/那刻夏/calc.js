export const details = [{
  title: '普攻伤害',
  dmg: ({ talent }, dmg) => dmg(talent.a['技能伤害'], 'a')
}, {
  title: '战技单次伤害（1个敌方目标）',
  params: { Skill_SingleTarget: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '战技单次伤害（5个敌方目标）',
  params: { Skill_MultipleTarget: true },
  dmg: ({ talent }, dmg) => dmg(talent.e['技能伤害'], 'e')
}, {
  title: '终结技伤害',
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

export const defDmgIdx = 1
export const mainAttr = 'atk,cpct,cdmg'

export const buffs = [ {
  check: ({ params }) => params.Skill_SingleTarget === true,
  title: '那刻夏战技：施放时场上有1个可攻击的敌方目标，本次战技造成的伤害提高[dmg]%',
  data: {
    dmg: 20
  }
}, {
  check: ({ params }) => params.Skill_MultipleTarget === true,
  title: '那刻夏战技：施放时场上有5个可攻击的敌方目标，本次战技造成的伤害提高[dmg]%',
  data: {
    dmg: 100
  }
}, {
  title: '那刻夏天赋：那刻夏对处于【质性揭露】状态的目标造成的伤害提高[dmg]%',
  data: {
    dmg: ({ talent }) => talent.t['伤害提高'] * 100
  }
}, {
  title: '行迹-必要的留白：我方队伍中有2名「智识」命途角色时，我方全体造成的伤害提高[dmg]%',
  tree: 2,
  data: {
    dmg: 50
  }
}, {
  title: '行迹-质性的嬗变：敌方目标拥有7个不同属性的弱点时，那刻夏对其造成的伤害无视[ignore]%的防御力',
  tree: 3,
  data: {
    ignore: 28
  }
}, {
  title: '那刻夏1魂：施放战技击中敌方目标时，使目标防御力降低[enemyDef]%',
  cons: 1,
  data: {
    enemyDef: 16
  }
}, {
  title: '那刻夏2魂：敌方目标入场时，使其全属性抗性降低[kx]%',
  cons: 2,
  data: {
    kx: 20
  }
}, {
  title: '那刻夏4魂：施放战技时，攻击力最多提高[atkPct]% ',
  cons: 4,
  data: {
    atkPct: 60
  }
}, {
  title: '那刻夏6命：那刻夏造成的伤害为原伤害的130%。行迹【必要的留白】的2种效果都会直接触发，不再依赖我方队伍中「智识」命途角色的数量（这里补充效果1——那刻夏的暴击伤害提高[cdmg]%）',
  cons: 6,
  data: {
    multi: 30,
    cdmg: 140
  }
}]

export const createdBy = '冰翼'
