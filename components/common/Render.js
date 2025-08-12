import { Version, Cfg } from '#miao'
import { miaoPath } from '#miao.path'

const Render = {
  async render (path, params, cfg) {
    let { e } = cfg
    if (!e.runtime) {
      console.log('未找到e.runtime，请升级至最新版Yunzai')
    }
    return e.runtime.render(cfg.plugin || 'miao-plugin', path, params, {
      retType: cfg.retType || (cfg.retMsgId ? 'msgId' : 'default'),
      beforeRender ({ data }) {
        let pluginName = ''
        if (data.pluginName !== false) {
          pluginName = ` & ${data.pluginName || 'Miao-Plugin'}`
          if (data.pluginVersion !== false) {
            pluginName += `<span class="version">${data.pluginVersion || Version.version}`
          }
        }
        let resPath = data.pluResPath
        const layoutPath = miaoPath + '/resources/common/layout/'
        return {
          _miao_path: resPath,
          ...data,
          _res_path: resPath,
          _layout_path: layoutPath,
          _tpl_path: miaoPath + '/resources/common/tpl/',
          defaultLayout: layoutPath + 'default.html',
          elemLayout: layoutPath + 'elem.html',
          sys: {
            scale: Cfg.scale(cfg.scale || 1)
          },
            copyright: `
<span style="font-weight: bold; color: gold;">Yunzai-Fork</span> &
<span style="font-weight: bold; color: gold;">Miao-Plugin-Fork</span> By
<span style="font-weight: bold; color: #90ee90;">Lotus</span><br>
<span style="font-weight: bold; font-size: larger;">
  <span style="color: #00BFFF;">机器人主人：</span>
  <span style="color: #90ee90;">荷花</span>
  <span style="color: #00BFFF;"> 荷花的小群：</span>
  <span style="color: #ff3030; font-weight: bold; font-size: x-large;">702211431</span>
</span><br>
服务器到期/机器人停运日期：<span style="color: #ff3030; font-weight: bold; font-size: x-large;">2026/01</span><br>
感谢您的<span style="color: #ff3030; font-weight: bold; font-size: x-large;">捐赠</span><br>
你的捐赠是对机器人运行最大的支持续命！<br>
<br>`


        }
      }
    })
  }
}

export default Render
