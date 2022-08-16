/*
 * @Author: 贾二小
 * @Date: 2022-08-09 00:48:04
 * @LastEditTime: 2022-08-16 00:59:04
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/router/register/register.ts
 */
import { Router, RouteRecordRaw, RouteRecordNormalized } from 'vue-router'

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

export default async (router: Router) => {
  let routes = autoloadModuleRoutes()

  //过滤掉children为空的路由
  // routes = routes.filter((r) => r.children.length)

  routes.forEach((r) => {
    router.addRoute(r as RouteRecordRaw)
  })
}
