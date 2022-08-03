/*
 * @Author: 贾二小
 * @Date: 2022-05-25 10:21:02
 * @LastEditTime: 2022-07-30 15:18:31
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/autoload/index.ts
 */
import { Router, RouteRecordRaw } from 'vue-router'
import getRoutes from './view'
// import userStore from '@/store/userStore'

let routes: RouteRecordRaw[] = getRoutes()

function autoload(router: Router) {
  // const user = userStore()
  // routes = routes.map((route) => {
  //   route.children = route.children?.filter((r) => {
  //     const permission = r.meta?.permission
  //     return permission ? user.info?.permissions?.includes(permission) : true
  //   })
  //   return route
  // })

  console.log(routes)

  routes.forEach((r) => router.addRoute(r))
}
export default autoload
