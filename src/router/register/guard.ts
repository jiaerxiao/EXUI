/*
 * @Author: 贾二小
 * @Date: 2022-08-09 00:48:04
 * @LastEditTime: 2022-08-16 23:49:06
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/register/guard.ts
 */
import { RouteLocationNormalized, Router, RouteRecordRaw } from 'vue-router'
import errorStore from '@/store/errorStore'
import { isLogin } from '@/utils/helper'
import userStore from '@/store/userStore'
import menuStore from '@/store/menuStore'

class Guard {
  constructor(private router: Router) {}

  /**
   * 是否加载动态路由
   */
  private isLoadRoute = true

  // private views = import.meta.globEager('../../views/**/*.vue')

  public async run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  /**
   * 前置守卫
   * @param to
   * @param from
   * @returns
   */
  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    //清空错误信息
    errorStore().resetError()

    if (to.name != 'login' && !isLogin()) return { name: 'login' }

    if (this.isLoadRoute && isLogin()) {
      this.isLoadRoute = false
      //加载用户信息和菜单
      await Promise.all([userStore().getUserInfo(), menuStore().getMenus()])
      //注册路由
      const adminRoute: RouteRecordRaw = {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: () => import('@/layouts/index.vue'),
        children: [],
      }
      let routes = this.getRoutes()
      menuStore().menus.forEach((m) => {
        //是否找到对应的路由
        routes
          .filter((r) => r.name == m.name)
          .map((item) => {
            adminRoute.children.push({
              name: m.name,
              path: m.path,
              redirect: m.redirect,
              component: item.component,
              meta: m.meta,
            } as RouteRecordRaw)
          })
      })
      this.router.addRoute(adminRoute)
      return { path: to.path }
    }
  }

  /**
   * 获取路由列表
   * @returns
   */
  private getRoutes() {
    let views = import.meta.glob('../../views/**/*.vue')
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) => {
      routes.push(this.getRouteByModule(file, module))
    })
    return routes
  }

  /**
   * 获取路由信息
   * @param file
   * @param module
   * @returns
   */
  private getRouteByModule(file: string, module: { [key: string]: any }) {
    const name = file.replace(/.+views\/|\.vue/gi, '')
    return {
      name: name.replace('/', '.'),
      path: `/${name}`,
      component: module,
      meta: {},
    } as RouteRecordRaw
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
