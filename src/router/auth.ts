/*
 * @Author: 贾二小
 * @Date: 2022-08-15 23:02:47
 * @LastEditTime: 2022-08-15 23:58:47
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/router/admin.ts
 */
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/auth',
  component: () => import('@/layouts/auth.vue'),
  meta: { guest: true },
  children: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/other/login.vue'),
    },
  ],
} as RouteRecordRaw
