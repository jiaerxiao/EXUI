<!--
 * @Author: 贾二小
 * @Date: 2022-07-30 15:39:07
 * @LastEditTime: 2022-08-17 17:39:49
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/views/user/index.vue
-->
<script setup lang="ts">
const { load, users } = useUser()

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
  { prop: 'name', label: '昵称', search: true },
  { prop: 'email', label: '邮箱', width: 300, search: true },
  {
    prop: 'sex',
    label: '性别',
    align: 'center',
    type: 'radio',
    options: [
      ['男', 1],
      ['女', 2],
    ],
    width: 80,
    filters: [
      {
        text: '男',
        value: 1,
      },
      {
        text: '女',
        value: 2,
      },
    ],
  },
  { prop: 'created_at', label: '注册时间', type: 'date', width: 120 },
  { prop: 'updated_at', label: '更新时间', type: 'date', width: 120 },
] as TableColumnsType[]
</script>

<template>
  <div class="">
    <ExTable :data="users?.data" :columns="userTableColumns" :button-width="100" />

    <ExPagination
      :total="users?.meta.total"
      :size="users?.meta.per_page"
      @change="currentChange"
      @sizeChange="sizeChange" />
  </div>
</template>

<style lang="scss"></style>
