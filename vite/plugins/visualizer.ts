/*
 * @Author: 贾二小
 * @Date: 2022-08-16 20:27:17
 * @LastEditTime: 2022-08-16 22:38:19
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite/plugins/visualizer.ts
 */
import { Plugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

//显示编译信息
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  // plugins.push(visualizer())
}
