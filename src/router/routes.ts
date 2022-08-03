/*
 * @Author: 贾二小
 * @Date: 2022-04-21 22:09:12
 * @LastEditTime: 2022-07-10 23:24:23
 * @LastEditors: 贾二小
 * @Description:
 * @FilePath: /exui/src/router/routes.ts
 */
import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: { auth: false },
  },
  {
    name: 'notFound',
    path: '/:any(.*)',
    meta: { auth: false },
    component: () => import('@/layouts/other/404.vue'),
  },
] as RouteRecordRaw[]

export default routes
