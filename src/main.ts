/*
 * @Author: 贾二小
 * @Date: 2022-04-21 20:48:44
 * @LastEditTime: 2022-08-16 15:55:36
 * @LastEditors: 贾二小
 * @Description:
 * @FilePath: /EXUI/src/main.ts
 */
import { createApp } from 'vue'
import router, { setupRouter } from '@/router/register/index'
import plugin from '@/plugins'
import directive from '@/directives'
import App from './views/App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App)
  plugin(app)
  directive(app)
  setupRouter(app)
  await router.isReady()
  app.mount('#app')
}

void bootstrap()
