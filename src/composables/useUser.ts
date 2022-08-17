/*
 * @Author: 贾二小
 * @Date: 2022-08-13 16:10:53
 * @LastEditTime: 2022-08-17 17:30:51
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/composables/useUser.ts
 */
import * as api from '@/apis/user'
import router from '@/router/register'

export default () => {
  const users = ref<ResponsePageResult<UserModel>>()
  const user = ref<UserModel>()
  const id = router.currentRoute.value.query.id as any

  const load = async (params: Record<any, any> = {}) => {
    users.value = await api.get(params)
  }

  const del = async (model: UserModel) => {
    await ElMessageBox.confirm(`确认删除【${model.real_name}】用户吗？`)
    await api.del(model.id!)
    load()
  }

  const add = async (model: UserModel) => {
    await api.add(model)
    //跳转到主页面
  }

  const update = async () => {
    await api.update(user.value!)
    //跳转到主页面
  }

  const find = async (id: any) => {
    user.value = await api.find(id)
  }

  const current = async () => {
    user.value = await api.find(id)
  }

  return { id, users, user, del, load, add, update, find, current }
}
