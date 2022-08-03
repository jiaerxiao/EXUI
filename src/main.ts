/*
 * @Author: 贾二小
 * @Date: 2022-04-21 20:48:44
 * @LastEditTime: 2022-07-10 12:50:11
 * @LastEditors: 贾二小
 * @Description:
 * @FilePath: /exui/src/main.ts
 */
import { App as AppType, createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupPlugins } from './plugins'
import '@/styles/global.scss'
import registerDirective from './directive'
import 'animate.css'

class Main {
  public async bootstrap() {
    const app = this.app()
    await router.isReady()
    app.mount('#app')
  }
  //初始应用
  private app(): AppType {
    const app = createApp(App)
    setupPlugins(app)
    setupRouter(app)
    registerDirective(app)
    return app
  }
}

new Main().bootstrap()
