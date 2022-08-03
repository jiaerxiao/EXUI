import { useRouter } from 'vue-router'
/*
 * @Author: 贾二小
 * @Date: 2022-07-09 11:06:42
 * @LastEditTime: 2022-07-30 15:32:09
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/store/menuStore.ts
 */
import { defineStore } from 'pinia'
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'
import { RouteLocationNormalized } from 'vue-router'
import _ from 'lodash'

export default defineStore('menu', {
  state: () => {
    return {
      menus: ((store.get(CacheEnum.USER_DATA)?.menu ?? []) as MenuModel[]) || null,
      historyMenu: (store.get(CacheEnum.HISTORY_MENU) ?? []) as RouteLocationNormalized[],
    }
  },
  actions: {
    removeHistoryMenu(route: RouteLocationNormalized) {
      const index = this.historyMenu.indexOf(route)
      this.historyMenu.splice(index, 1)
      store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
    },
    addHistoryMenu(route: RouteLocationNormalized) {
      if (!route.meta?.title) return
      const isHas = this.historyMenu.some((menu) => menu.fullPath == route.fullPath)
      if (!isHas) {
        this.historyMenu.push(_.cloneDeep(route))
        store.set(CacheEnum.HISTORY_MENU, this.historyMenu)
      }
    },
    setMenus(menus: MenuModel[]) {
      this.menus = menus
    },
  },
})
