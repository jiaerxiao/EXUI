/*
 * @Author: 贾二小
 * @Date: 2022-05-25 10:21:02
 * @LastEditTime: 2022-07-30 14:56:01
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/autoload/view.ts
 */
import { RouteRecordRaw } from 'vue-router'
const layouts = import.meta.globEager('../../layouts/*.vue')
const views = import.meta.globEager('../../views/**/*.vue')

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[]

  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module)
    route.children = getChildrenRoutes(route)
    layoutRoutes.push(route)
  })
  return layoutRoutes
}

//获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const routes = [] as RouteRecordRaw[]
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module)
      routes.push(route)
    }
  })
  return routes
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, '')
  const route = {
    name: name.replace('/', '.'),
    path: `/${name}`,
    component: module.default,
  } as RouteRecordRaw

  return Object.assign(route, module.default?.route)
}

export default getRoutes

// function getChildrenRoutes() {
//   const routes = [] as RouteRecordRaw[]
//   Object.entries(views).forEach(([file, module]) => {
//     const route = getRouteByModule(file, module)
//     if (!route.name.startsWith('auth')) routes.push(route)
//   })
//   return routes
// }

// function getRouteByModule(file: string, module: { [key: string]: any }) {
//   const name = file.replace(/.+views\/|\.vue/gi, '')
//   const route = {
//     name: name.replace('/', '.'),
//     path: `/${name}`,
//     component: module.default,
//     meta: { auth: true, type: 'menu' },
//   } as RouteRecordRaw
//   return Object.assign(route, module.default?.route)
// }

// export default getChildrenRoutes
