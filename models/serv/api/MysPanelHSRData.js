import lodash from "lodash"
import { propertyType2attrName } from "./MysPanelHSRMappings.js"
import { Data, Meta } from "#miao"
import { Character, Artifact } from "#miao.models"

let MysPanelHSRData = {
  setAvatar(player, ds) {
    let char = Character.get(ds.id)
    let avatar = player.getAvatar(ds.id, true)
    if (!char) return false

    const setData = {
      level: ds.level,
      cons: ds.rank,
      weapon: ds.equip ? MysPanelHSRData.getWeapon(ds.equip) : null,
      talent: MysPanelHSRData.getTalent(char, ds.rank, ds.skills, ds.servant_detail?.servant_skills),
      trees: MysPanelHSRData.getTrees(ds.skills),
      artis: MysPanelHSRData.getArtifact([ ...ds.relics, ...ds.ornaments ])
    }

    avatar.setAvatar(setData, "mysPanelHSR")

    if (!avatar.attr) return avatar
    if (ds.properties[3].final - avatar.attr.speed > 0.2) {
      let errNum = Math.ceil((ds.properties[3].final - avatar.attr.speed) / 0.3)
      let eachCalc = (errNums) => {
        lodash.forEach(setData.artis, (ds, key) => {
          lodash.forEach(ds.attrIds, (values, idx) => {
            if (values.startsWith("7")) {
              let [ id, time, time2 ] = values.split(",")
              if (errNums > 0 && time2 < (time > 2 ? 6 : time * 2) && Math.floor((time * 2) + (time2 * 0.3)) === Math.floor((time * 2) + ((time2 * 1 + 1) * 0.3))) {
                setData.artis[key].attrIds[idx] = `${id},${time},${time2 * 1 + 1}`
                errNums--
              }
            }
          })
        })
        return errNums
      }
      for (let i = 1; i <= 3; i++) {
        if (errNum <= 0) break
        errNum = eachCalc(errNum)
      }
      avatar.setAvatar(setData, "mysPanelHSR")
    }
    return avatar
  },

  getWeapon(data) {
    return {
      id: data.id,
      level: data.level,
      affix: data.rank
    }
  },

  getTalent(char, cons, ds = [], servant = []) {
    let { talentCons = {} } = char.meta
    let remake = {
      "普攻": "a",
      "战技": "e",
      "终结技": "q",
      "天赋": "t",
      "秘技": "z",
      "忆灵技": "me",
      "忆灵天赋": "mt"
    }
    if (servant.length > 0) ds = [ ...ds, ...servant ]
    let ret = {}
    lodash.forEach(ds, (talent_data) => {
      const lv = talent_data.level
      if (remake[talent_data.remake]) ret[remake[talent_data.remake]] = lv
    })
    if (cons >= 3) {
      lodash.forEach(talentCons, (lv, key) => {
        let addTalent = { a: 1, e: 2, q: 2, t: 2, me: 1, mt: 1 }
        if (lv != 0 && ret[key] && cons >= lv) ret[key] = Math.max(1, ret[key] - addTalent[key])
      })
    }
    return ret
  },

  getTrees(data) {
    return lodash.sortBy(data.filter(skill => skill.point_type !== 2 && skill.is_activated), "point_id").map(skill => skill.point_id)
  },

  getArtifact(data) {
    let ret = {}
    lodash.forEach(data, (ds) => {
      let idx = ds.pos
      if (!idx) return
      let arti = Artifact.get(ds.id, "sr")
      if (!arti) return true

      ret[idx] = {
        level: Math.min(15, (ds.level) || 0),
        id: ds.id,
        mainId: MysPanelHSRData.getArtifactMainId(idx, ds.main_property),
        attrIds: MysPanelHSRData.getArtifactAttrIds(ds.rarity, ds.properties)
      }
    })
    return ret
  },

  getArtifactMainId(pos, main_property) {
    const { metaData } = Meta.getMeta("sr", "arti")
    const propertyName = propertyType2attrName[main_property.property_type]
    const propertyName2Id = lodash.invert(metaData.mainIdx[pos])
    const ret = +propertyName2Id[propertyName]
    return ret
  },

  getArtifactAttrIds(rarity, sub_property_list) {
    let attrIds = []
    const { metaData } = Meta.getMeta("sr", "arti")
    const starData = metaData.starData[rarity]
    const getArtifactAttrId = (sub, curTime, propertyId, valueStr) => {
      const { key, base, step } = sub
      let destValueSum
      if (valueStr.substring(-1) == "%") {
        destValueSum = parseFloat(valueStr.slice(0, -1))
      } else {
        destValueSum = parseFloat(valueStr)
      }
      if (key === "speed") curTime = Math.floor(destValueSum / base) || 1
      const numSteps = Math.ceil((destValueSum - (curTime * base)) / step)
      return `${propertyId},${curTime},${numSteps}`
    }
    lodash.forEach(sub_property_list, (sub_property) => {
      const { property_type, value, times } = sub_property
      const propertyId = lodash.findKey(starData.sub, obj => obj.key === propertyType2attrName[property_type])
      const sub = starData.sub[propertyId]
      const combination = getArtifactAttrId(sub, times, propertyId, value)
      attrIds.push(combination)
    })
    return attrIds
  }
}
export default MysPanelHSRData