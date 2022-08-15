/*
 * @Author: 贾二小
 * @Date: 2022-04-21 22:08:13
 * @LastEditTime: 2022-08-09 18:36:59
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/store/userStore.ts
 */
import { currentUserInfo } from '@/apis/user'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      info: {} as UserModel,
      permissions: [] as PermissionModel[],
    }
  },
  actions: {
    async getUserInfo() {
      this.info = await currentUserInfo()
      this.permissions = this.info.roles.reduce((permissions: PermissionModel[], role: RoleModel) => {
        permissions.push(...role.permissions)
        return permissions
      }, [])
    },
  },
})
