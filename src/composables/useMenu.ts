/*
 * @Author: 贾二小
 * @Date: 2022-08-17 16:45:55
 * @LastEditTime: 2022-08-17 17:28:32
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/composables/useMenu.ts
 */
import * as api from '@/apis/menu'
import router from '@/router/register'

export default () => {
  const menus = ref<ResponsePageResult<MenuModel>>()
  const menu = ref<MenuModel>()
  const id = router.currentRoute.value.query.id as any

  const load = async (params: Record<any, any> = {}) => {
    menus.value = await api.get(params)
  }

  const del = async (model: MenuModel) => {
    await ElMessageBox.confirm(`确认删除【${model.meta?.title}】菜单吗？`)
    await api.del(model.id!)
    load()
  }

  const add = async (model: MenuModel) => {
    await api.add(model)
    //跳转到主页面
  }

  const update = async () => {
    await api.update(menu.value!)
    //跳转到主页面
  }

  const find = async (id: any) => {
    menu.value = await api.find(id)
  }

  const current = async () => {
    menu.value = await api.find(id)
  }

  return { menus, menu, load, find }
}
