import userStore from '@/store/userStroe'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import autoload from './autoload'
import auth from './Auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
})

export async function setupRouter(app: App) {
  autoload(router)
  auth(router)
  app.use(router)
}

export default router
