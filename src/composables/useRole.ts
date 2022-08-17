/*
 * @Author: 贾二小
 * @Date: 2022-08-17 16:45:56
 * @LastEditTime: 2022-08-17 17:37:17
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/composables/useRole.ts
 */
import * as api from '@/apis/role'
import router from '@/router/register'

export default () => {
  const roles = ref<ResponsePageResult<RoleModel>>()
  const role = ref<RoleModel>()
  const id = router.currentRoute.value.query.id as any

  const load = async (params: Record<any, any> = {}) => {
    roles.value = await api.get(params)
  }

  const del = async (model: RoleModel) => {
    await ElMessageBox.confirm(`确认删除【${model.title}】角色吗？`)
    await api.del(model.id!)
    load()
  }

  const add = async (model: RoleModel) => {
    await api.add(model)
    //跳转到主页面
  }

  const update = async () => {
    await api.update(role.value!)
    //跳转到主页面
  }

  const find = async (id: any) => {
    role.value = await api.find(id)
  }

  const current = async () => {
    role.value = await api.find(id)
  }

  return { id, roles, role, del, load, add, update, find, current }
}
