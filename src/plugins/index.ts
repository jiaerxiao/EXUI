/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:39:09
 * @LastEditTime: 2022-08-09 18:02:22
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/plugins/index.ts
 */
import { App } from 'vue'
import _ from 'lodash'

export default (app: App) => {
  register(app, import.meta.globEager('./**/index.ts'))
}

function register(app: App, modules: Record<string, any>) {
  Object.entries(modules).map(([, module]) => {
    module.default(app)
  })
}
