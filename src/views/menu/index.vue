<!--
 * @Author: 贾二小
 * @Date: 2022-08-17 13:37:29
 * @LastEditTime: 2022-08-18 14:54:53
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/views/menu/index.vue
-->
<script setup lang="ts">
const { load, menus } = useMenu()

const params = {
  page: 1,
  per_page: 5,
}
await load(params)

const currentChange = async (num: number) => {
  params.page = num
  await load(params)
}
const sizeChange = async (num: number) => {
  params.per_page = num
  await load(params)
}

const userTableColumns = [
  { prop: 'id', label: 'ID', align: 'center', width: 80 },
  { prop: 'pid', label: 'PID', align: 'center', width: 80 },
  { prop: 'name', label: '名称', search: true },
  { prop: 'path', label: '地址', search: true },
  { prop: 'meta.icon', label: '图标' },
  { prop: 'meta.title', label: '标题' },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]
</script>

<template>
  <el-card shadow="hover">
    <ExTable :data="menus?.data" :columns="userTableColumns" :button-width="100" />
    <ExPagination
      :total="menus?.meta.total"
      :size="menus?.meta.per_page"
      @change="currentChange"
      @sizeChange="sizeChange" />
  </el-card>
</template>

<style lang="scss"></style>
