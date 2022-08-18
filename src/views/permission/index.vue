<!--
 * @Author: 贾二小
 * @Date: 2022-08-17 17:32:23
 * @LastEditTime: 2022-08-18 14:55:06
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/views/permission/index.vue
-->
<script setup lang="ts">
const { load, permissions } = usePermission()

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
  { prop: 'category', label: '分类', width: 300, search: true },
  { prop: 'title', label: '标题', width: 300, search: true },
  { prop: 'key', label: '键', search: true },
  { prop: 'value', label: '值', width: 300, search: true },
  { prop: 'created_at', label: '创建时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]
</script>

<template>
  <el-card shadow="hover">
    <ExTable :data="permissions?.data" :columns="userTableColumns" :button-width="100" />
    <ExPagination
      :total="permissions?.meta.total"
      :size="permissions?.meta.per_page"
      @change="currentChange"
      @sizeChange="sizeChange" />
  </el-card>
</template>

<style lang="scss"></style>
