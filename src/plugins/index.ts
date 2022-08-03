import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import setupElementPlus from './elementui'
import setupPinia from './pinia'
import setupIconPark from './iconpark'
import setupDayjs from './dayjs'

export function setupPlugins(app: App) {
  setupTailwindcss()
  setupElementPlus(app)
  setupPinia(app)
  setupIconPark(app)
  setupDayjs()
}
