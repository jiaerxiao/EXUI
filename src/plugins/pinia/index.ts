/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:39:09
 * @LastEditTime: 2022-08-09 23:05:33
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/plugins/pinia/index.ts
 */
import { App } from 'vue'
import { createPinia } from 'pinia'

export default (app: App) => {
  app.use(createPinia())
}
