/*
 * @Author: 贾二小
 * @Date: 2022-08-09 00:48:04
 * @LastEditTime: 2022-08-09 23:40:15
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/router/register/guard.ts
 */
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import { RouteLocationNormalized, Router } from 'vue-router'
import errorStore from '@/store/errorStore'

class Guard {
  constructor(private router: Router) {}

  public async run() {
    this.router.beforeEach(this.beforeEach.bind(this))
  }

  private async beforeEach(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    errorStore().resetError()

    if (to.name != 'login' && !this.token()) return { name: 'login' }

    // if (to.meta.auth && !this.token()) {
    //   store.set(CacheEnum.REDIRECT_ROUTE_NAME, to.fullPath)
    //   return { name: 'login' }
    // }

    // if (to.meta.guest && this.token()) return from
  }

  private token(): string | null {
    return store.get(CacheEnum.TOKEN_NAME)
  }
}

export default (router: Router) => {
  new Guard(router).run()
}
