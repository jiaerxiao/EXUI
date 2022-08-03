/*
 * @Author: 贾二小
 * @Date: 2022-04-21 22:08:13
 * @LastEditTime: 2022-07-30 15:32:29
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/store/userStroe.ts
 */
import { CacheEnum } from '@/enum/cacheEnum'
import { info } from '@/apis/userApi'
import store from '@/utils/store'
import { defineStore } from 'pinia'
import menuStore from './menuStore'

export default defineStore('user', {
  state: () => {
    return {
      info: (store.get(CacheEnum.USER_DATA) ?? {}) as IUserModel,
    }
  },
  actions: {
    async getUserInfo() {
      if (store.get(CacheEnum.TOKEN_NAME)) {
        this.info = await info().then((r) => r.data)
        store.set(CacheEnum.USER_DATA, this.info)
        menuStore().setMenus(this.info.menu!)
      }
    },
  },
})
