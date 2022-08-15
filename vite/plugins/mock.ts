/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:11:50
 * @LastEditTime: 2022-08-13 10:53:16
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite/plugins/mock.ts
 */
import { viteMockServe } from 'vite-plugin-mock'
export function setupMockPlugin(isBuild: boolean) {
  return viteMockServe({
    mockPath: 'mock',
    localEnabled: !isBuild,
  })
}
