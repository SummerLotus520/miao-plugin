import lodash from 'lodash'
import { Cfg, Common, Data } from '#miao'
import { RoleCombat, MysApi, Player } from '#miao.models'

export async function RoleCombatSummary (e) {
  let isMatch = /^#(喵喵)(幻想|幻境|剧诗|幻想真境剧诗)(数据)?$/.test(e.original_msg || e.msg || '')
  if (!Cfg.get('roleCombat', false) && !isMatch) {
    return false
  }
  // 需要自身 ck 查询
  let mys = await MysApi.init(e, 'cookie')
  if (!mys || !mys.uid) {
    if (isMatch) {
      e.reply(`请#扫码登录后再使用${e.original_msg || e.msg}`)
    }
    return false
  }
  let uid = mys.uid
  let player = Player.create(e)
  let resDetail, resRole
  try {
    resRole = await mys.getRoleCombat(true)
    let lvs = Data.getVal(resRole, 'data.0')
    // 检查是否查询到了幻想真境剧诗信息
    // TODO: 有个 has_data，有个 has_detail_data
    // 注意可能出现 has_data 为 false，但是 has_detail_data 为 true 的情形
    // 不知道怎么搞，分别做适配？
    if (!lvs || !lvs.has_detail_data) {
      e.reply('暂未获得本期幻想真境剧诗挑战数据...')
      return true
    }

    resDetail = await mys.getCharacter()
    if (!resDetail || !resRole || !resDetail.avatars || resDetail.avatars.length <= 3) {
        e.reply('角色信息获取失败。\n请复制验证码插件链接到浏览器打开并完成验证码，若验证码未出现请使用"#米游社验证"指令。\n若完成验证码后指令未正常工作，请等待之前失败的指令执行完毕后再次发送指令。')
      return true
    }
    delete resDetail._res
    delete resRole._res
  } catch (err) {
    // console.log(err);
  }

  // 更新player信息
  player.setMysCharData(resDetail)

  if (resRole.data.length === 0) {
    e.reply('暂未获得本期幻想真境剧诗挑战数据...')
    return true
  }
  let role = new RoleCombat(resRole.data[0])
  let roleData = role.getData()
  let ownAvatarIds = role.getOwnAvatars()
  let ownAvatarData = player.getAvatarData(ownAvatarIds)
  let otherAvatarData = role.getOtherAvatarsData()

  let avatarData = lodash.merge(ownAvatarData, otherAvatarData)
  return await Common.render('stat/role-summary', {
    role: roleData,
    avatars: avatarData,
    save_id: uid,
    uid
  }, { e, scale: 1.2 })
}
