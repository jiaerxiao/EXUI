/*
 * @Author: 贾二小
 * @Date: 2022-08-13 16:10:53
 * @LastEditTime: 2022-08-14 18:38:36
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/composables/useUser.ts
 */
import * as api from '@/apis/user'

export default () => {
  const users = ref<ResponsePageResult<UserModel>>()
  const user = ref<UserModel>()

  const load = async (params: Record<any, any> = {}) => {
    users.value = await api.getUserList(params)
  }

  const find = async (id: any) => {
    user.value = await api.getUser(id)
  }

  return { users, user, load, find }
}
