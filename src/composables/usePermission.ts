/*
 * @Author: 贾二小
 * @Date: 2022-08-17 16:47:40
 * @LastEditTime: 2022-08-17 17:13:35
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/composables/usePermission.ts
 */
import * as api from '@/apis/permission'
import router from '@/router/register'

export default () => {
  const permissions = ref<ResponsePageResult<PermissionModel>>()
  const permission = ref<PermissionModel>()
  const id = router.currentRoute.value.query.id as any

  const load = async (params: Record<any, any> = {}) => {
    permissions.value = await api.get(params)
  }

  const del = async (model: PermissionModel) => {
    await ElMessageBox.confirm(`确认删除【${model.title}】权限吗？`)
    await api.del(model.id!)
    load()
  }

  const add = async (model: PermissionModel) => {
    await api.add(model)
    //跳转到主页面
  }

  const update = async () => {
    await api.update(permission.value!)
    //跳转到主页面
  }

  const find = async (id: any) => {
    permission.value = await api.find(id)
  }

  const current = async () => {
    permission.value = await api.find(id)
  }

  return { id, permissions, permission, del, load, add, update, find, current }
}
