<!--
 * @Author: 贾二小
 * @Date: 2022-07-30 15:39:07
 * @LastEditTime: 2022-08-19 18:37:52
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/views/user/index.vue
-->
<script setup lang="ts">
import { AddOne, Audit, Delete, Search, Filter } from '@icon-park/vue-next'
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
const input2 = ref('')
const onSearch = (a: string = '1111') => {
  console.log(a)
}
</script>

<template>
  <el-card shadow="hover">
    <div class="flex items-center h-10 mb-1">
      <div class="flex-grow w-[70%] space-x-1">
        <el-button type="primary" :icon="AddOne">添加</el-button>
        <el-button type="primary" :icon="Audit">审核</el-button>
        <el-button type="danger" :icon="Delete">删除</el-button>

        <el-button type="primary">分配角色</el-button>
        <el-button type="primary">权限设置</el-button>
      </div>
      <div class="flex-none w-72">
        <div class="flex items-center">
          <el-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
          <el-button type="primary" :icon="Search" @click="onSearch()" />
          <el-button type="primary" :icon="Filter" @click="onSearch()" />
        </div>
      </div>
    </div>

    <ExTable :data="users?.data" :columns="userTableColumns" :button-width="100">
      <el-table-column label="操作" fixed="right" align="left" width="170">
        <template #default="scope">
          <el-button-group>
            <el-button text type="primary" size="small">查看</el-button>
            <el-button text type="primary" size="small">编辑</el-button>
            <el-button text type="primary" size="small">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </ExTable>
    <ExPagination
      :total="users?.meta.total"
      :size="users?.meta.per_page"
      @change="currentChange"
      @sizeChange="sizeChange" />
  </el-card>
</template>

<style lang="scss"></style>
