/*
 * @Author: 贾二小
 * @Date: 2022-04-21 22:09:12
 * @LastEditTime: 2022-07-11 01:13:34
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/Auth.ts
 */
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'

class Auth {
  constructor(private router: Router) {}

  public run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.name != 'login' && !this.token()) return { name: 'login' }
  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME)
  }
}

export default (router: Router) => {
  new Auth(router).run()
}
