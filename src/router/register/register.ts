/*
 * @Author: 贾二小
 * @Date: 2022-08-09 00:48:04
 * @LastEditTime: 2022-08-09 23:26:57
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/register/register.ts
 */
import { Router, RouteRecordRaw, RouteRecordNormalized } from 'vue-router'
import userStore from '@/store/userStore'
import env from '@/utils/env'
import getRoutes from './view'

//注册路由
function autoloadModuleRoutes(): RouteRecordNormalized[] {
  const routes = [] as RouteRecordNormalized[]
  register(routes, import.meta.globEager('../*.ts'))

  return routes
}

//绑定路由
function register(routes: RouteRecordNormalized[], modules: Record<string, any>) {
  Object.keys(modules).forEach((key) => {
    routes.push(modules[key].default)
  })
}

export default (router: Router) => {
  const user = userStore()

  let routes = getRoutes()

  // let routes = autoloadModuleRoutes().map((route) => {
  //   //根据权限过滤
  //   // route.children = route.children?.filter((r: RouteRecordRaw) => {
  //   //   const permission = r.meta?.permission
  //   //   return permission ? user.permissions.find((p) => p.name == permission) : true
  //   // })
  //   return route
  // })

  //过滤掉children为空的路由
  // routes = routes.filter((r) => r.children.length)
  routes.forEach((r) => router.addRoute(r as RouteRecordRaw))
}
