/*
 * @Author: 贾二小
 * @Date: 2022-07-01 22:30:04
 * @LastEditTime: 2022-08-09 17:59:14
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/directive/index.ts
 */
import { App } from 'vue'
import _ from 'lodash'

export default (app: App) => {
  register(app, import.meta.globEager('./*/index.ts'))
}

function register(app: App, modules: Record<string, any>) {
  Object.entries(modules).map(([file, module]) => {
    const name = file.match(/^\.\/(.*)*\//)?.[1] as string
    app.directive(name, module.default)
  })
}
