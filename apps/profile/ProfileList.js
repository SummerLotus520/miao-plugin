import lodash from 'lodash'
import { getTargetUid } from './ProfileCommon.js'
import { Common, Data } from '#miao'
import { Button, ProfileRank, Player, Character } from '#miao.models'

const ProfileList = {
  /**
   * 实际的刷新面板逻辑
   * @param e
   * @param fromMys
   * @returns {Promise<boolean|*>}
   */
  async doRefresh (e, fromMys = false) {
    let uid = await getTargetUid(e)
    if (!uid) {
      e._replyNeedUid || e.reply(['请使用"#扫码登录"指令绑定机器人，使用"#帮助"指令查看具体流程、问题处理及使用教程。', new Button(e).bindUid()])
      return true
    }

    // 数据更新
    let player = Player.create(e)
    await player.refreshProfile(2, fromMys)    

    if (!player?._update?.length) {
        e._isReplyed || e.reply(['获取角色面板数据失败。\n请复制验证码插件链接到浏览器打开并完成验证码，若验证码未出现请使用"#米游社验证"指令。\n若完成验证码后指令未正常工作，请等待之前失败的指令执行完毕后再次发送指令。', new Button(e).profileList(uid)])
      e._isReplyed = true
    } else {
      let ret = {}
      lodash.forEach(player._update, (id) => {
        let char = Character.get(id)
        if (char) {
          ret[char.name] = true
        }
      })
      if (lodash.isEmpty(ret)) {
          e._isReplyed || e.reply(['获取角色面板数据失败。\n请复制验证码插件链接到浏览器打开并完成验证码，若验证码未出现请使用"#米游社验证"指令。\n若完成验证码后指令未正常工作，请等待之前失败的指令执行完毕后再次发送指令。', new Button(e).profileList(uid)])
        e._isReplyed = true
      } else {
        e.newChar = ret
        e.isNewCharFromMys = fromMys
        return await ProfileList.render(e)
      }
    }
    return true
  },

  /**
   * 刷新面板
   * @param e
   * @returns {Promise<boolean|*>}
   */
  async refresh (e) {
    return await ProfileList.doRefresh(e, false)
  },

  /**
   * 米游社刷新面板
   * @param e
   * @returns {Promise<boolean|*>}
   */ 
  async refreshMys (e) {
    // 【解决方案】创建一个不包含循环引用的“干净”的e对象
    // 只保留Player.create()和后续逻辑需要的核心属性
    const cleanE = {
      uid: await getTargetUid(e), // 确保uid已经获取到
      user_id: e.user_id,
      group_id: e.group_id,
      game: e.game,
      msg: e.msg,
      isMaster: e.isMaster,
      runtime: { user: e.runtime?.user } // runtime里主要是user有用
    }

    // 使用“干净”的e对象来创建Player实例
    let player = Player.create(cleanE)
    player._profile = 0

    // 判断是否为星铁更新请求
    const isSrUpdate = (e.msg && /^#?(米游社|mys)?\s*(星铁)\s*(全部面板更新|更新全部面板|获取游戏角色详情|更新面板|面板更新)/.test(e.msg)) ||  
                    (e.game === 'sr')

    // 先使用米游社API更新所有角色数据，这里仍然传递原始的e对象，因为它包含了完整的上下文信息，如回复函数等
    const result = await ProfileList.doRefresh(e, true)

    // 若更新失败则中止，不进行展板更新
    if (result === true && !e.newChar) {
      e.reply('米游社数据更新失败，已终止更新流程。')
      return result
    }

    // 星铁请求，继续展板更新
    if (isSrUpdate) {
      // uid已在cleanE中获取，这里无需重复
      let uid = cleanE.uid
      if (!uid) {
        return result
      }

      const firstUpdateChars = e.newChar ? { ...e.newChar } : {}

      e.reply(`米游社API数据更新完成！`)
      await new Promise(resolve => setTimeout(resolve, 1000))

      e.reply(`由于高速角色的速度计算可能存在误差，请将高速角色放置到展柜，并开启"显示角色详情"，正在通过展板API进行更新以获取准确数据...`)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // 复用之前创建的player实例，并为第二次更新再次重置状态
      player._profile = 0

      // 第二次更新也传递原始的e对象
      const secondResult = await ProfileList.doRefresh(e, false)

      // 合并角色数据
      if (e.newChar && firstUpdateChars) {
        for (const charName in firstUpdateChars) {
          if (!e.newChar[charName]) {
            e.newChar[charName] = firstUpdateChars[charName]
          }
        }
      }

      return secondResult
    }

    return result
  },

  /**
   * 渲染面板
   * @param e
   * @returns {Promise<boolean|*>}
   */

  async render (e) {
    let uid = await getTargetUid(e)
    if (!uid) {
      e._replyNeedUid || e.reply(['请先发送【#绑定+你的UID】来绑定查询目标\n星铁请使用【#星铁绑定+UID】', new Button(e).bindUid()])
      return true
    }

    let isSelfUid = false
    if (e.runtime && e.runtime?.user) {
      let uids = []
      let user = e.runtime.user
      if (typeof user.getCkUidList === 'function') {
        uids = user.getCkUidList(e.game).map(i => i.uid) || []
      } else {
        uids = user.ckUids || []
      }
      isSelfUid = uids.some(ds => ds === uid + '')
    }
    let rank = false

    let hasNew = false
    let newCount = 0

    let chars = []
    let msg = ''
    let newChar = {}
    if (e.newChar) {
      msg = '获取角色面板数据成功'
      newChar = e.newChar
    }
    const cfg = await Data.importCfg('cfg')
    // 获取面板数据
    let player = Player.create(e)
    let servName = e.isNewCharFromMys ? '米游社' : Player.getProfileServName(uid, player.game)
    if (!player.hasProfile) {
      await player.refresh({ profile: true })
    }
    if (!player.hasProfile) {
      e.reply([`本地暂无uid${uid}[${player.game}]的面板数据...`, new Button(e).profileList(uid)])
      return true
    }
    let profiles = player.getProfiles()

    // 检测标志位
    let qq = (e.at && !e.atBot) ? e.at : e.user_id
    await ProfileRank.setUidInfo({ uid, profiles, qq, uidType: isSelfUid ? 'ck' : 'bind' })

    let groupId = e.group_id
    if (groupId) {
      rank = await ProfileRank.create({ groupId, uid, qq: e.user_id })
    }
    const rankCfg = await ProfileRank.getGroupCfg(groupId)
    const groupRank = rank && (cfg?.diyCfg?.groupRank || false) && rankCfg.status !== 1
    for (let id in profiles) {
      let profile = profiles[id]
      let char = profile.char
      let tmp = char.getData('id,face,name,abbr,element,star')
      let imgs = char.getImgs(profile.costume)
      tmp.face = imgs.qFace || imgs.face
      tmp.level = profile.level || 1
      tmp.cons = profile.cons
      tmp.isNew = 0
      if (newChar[char.name]) {
        tmp.isNew = 1
        newCount++
      }
      if (rank) {
        tmp.groupRank = await rank.getRank(profile, !!tmp.isNew)
      }
      chars.push(tmp)
    }

    // mys 更新不是通过橱窗展柜，可能突破此限制
    // if (newCount > 0) {
    //   hasNew = newCount <= 12
    // }
    hasNew = newCount > 0

    chars = lodash.sortBy(chars, ['isNew', 'star', 'level', 'id'])
    chars = chars.reverse()

    player.save()
    // 渲染图像
    return e.reply([await Common.render('character/profile-list', {
      save_id: uid,
      uid,
      chars,
      servName,
      hasNew,
      msg,
      groupRank,
      updateTime: player.getUpdateTime(),
      allowRank: rank && rank.allowRank,
      rankCfg,
      elem: player.isGs ? 'hydro' : 'sr'
    }, { e, scale: 1.6, retType: 'base64' }), new Button(e).profileList(uid, newChar)])
  },

  /**
   * 删除面板数据
   * @param e
   * @returns {Promise<boolean>}
   */
  async del (e) {
    let ret = /^#(星铁)?(删除全部面板|删除面板|删除面板数据)\s*(\d{9,10})?$/.exec(e.msg)
    let uid = await getTargetUid(e)
    if (!uid) {
      return true
    }
    let targetUid = ret[3]

    let user = e?.runtime?.user || {}
    if (!user.hasCk && !e.isMaster) {
      e.reply('为确保数据安全，目前仅允许扫码登录用户删除自己UID的面板数据，请联系Bot主人删除...')
      return true
    }

    if (!targetUid) {
      e.reply([`你确认要删除面板数据吗？ 请回复 #删除面板${uid} 以删除面板数据`, new Button(e).profileList(uid)])
      return true
    }

    const game = /星铁/.test(e.msg) ? 'sr' : 'gs'
    let uidList = user?.getCkUidList(game)
    let ckUids = (lodash.map(uidList, (ds) => ds.uid) || []).join(',').split(',')
    if (!ckUids.includes(targetUid) && !e.isMaster) {
      e.reply([`仅允许删除自己的UID数据[${ckUids.join(',')}]`, new Button(e).profileList(uid)])
      return true
    }

    Player.delByUid(targetUid, game)
    e.reply([`UID${targetUid}的本地数据已删除，排名数据已清除...`, new Button(e).profileList(uid)])
    return true
  },

  async reload (e) {
    let uid = await getTargetUid(e)
    if (!uid) {
      return true
    }
    let player = Player.create(e)
    player.reload()
    return ProfileList.render(e)
  }
}
export default ProfileList
