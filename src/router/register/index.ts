/*
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-15 23:20:23
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/router/register/index.ts
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import register from './register'
import guard from './guard'

const router = createRouter({
  history: createWebHistory(),
  routes: [],
})

export async function setupRouter(app: App) {
  await register(router)
  guard(router)
  app.use(router)
}

export default router
