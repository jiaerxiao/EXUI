/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:39:09
 * @LastEditTime: 2022-08-09 23:06:32
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/plugins/elementui/index.ts
 */
import { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default (app: App) => {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
