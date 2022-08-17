/*
 * @Author: 贾二小
 * @Date: 2022-04-21 21:11:50
 * @LastEditTime: 2022-08-16 20:27:35
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite/plugins/index.ts
 */
import { Plugin } from 'vite'
import autoImport from './autoImport'
import setupMockPlugin from './mock'
import setupVisualizer from './visualizer'
import setupVue from './vue'

const plugins: Plugin[] = []

export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
  setupVue(plugins, isBuild, env)
  setupVisualizer(plugins, isBuild, env)
  setupMockPlugin(plugins, isBuild, env)
  autoImport(plugins, isBuild, env)

  return plugins
}
