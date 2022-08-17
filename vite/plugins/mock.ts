/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:11:50
 * @LastEditTime: 2022-08-16 20:26:47
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite/plugins/mock.ts
 */
import { Plugin } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'

//mockJs测试数据插件
export default (plugins: Plugin[], isBuild: boolean, env: ImportMetaEnv) => {
  if (env.VITE_MOCK_ENABLE && !isBuild) {
    plugins.push(
      viteMockServe({
        mockPath: 'mock',
        watchFiles: true,
      }),
    )
  }
}
