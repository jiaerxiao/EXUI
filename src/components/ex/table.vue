<!--
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-18 19:01:46
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/components/ex/table.vue
-->
<script setup lang="ts">
import dayjs from 'dayjs'
import { getPropVal } from '@/utils/helper'

const { data, columns } = defineProps<{
  data?: Record<string, any>[]
  columns: TableColumnsType[]
}>()
const emptyText = ref('暂无数据')
</script>

<template>
  <el-table :data="data" border stripe :highlight-current-row="true" style="width: 100%">
    <slot></slot>
    <template v-for="(col, index) in columns" :key="index">
      <el-table-column
        v-if="!col.hide"
        :column-key="col.prop"
        :label="col.label"
        :prop="col.prop"
        :width="col.width"
        :sortable="col.sortable"
        :fixed="col.fixed">
        <template #default="scope">
          <template v-if="col.type === 'image'">
            <el-image
              preview-teleported
              :hide-on-click-modal="true"
              :preview-src-list="[scope.row[col.prop]!]"
              :src="scope.row[col.prop]"
              fit="cover"
              class="w-10 h-10 rounded-lg" />
          </template>
          <template v-else-if="col.type === 'radio'">
            <span v-for="c in col.options" v-show="c[1] == scope.row[col.prop]">
              <el-tag>{{ c[0] }}</el-tag>
            </span>
          </template>
          <template v-else-if="col.type === 'tag'">
            <el-tag
              type="success"
              size="small"
              effect="dark"
              v-for="(b, key) of scope.row[col.prop]"
              :key="key"
              class="m-1">
              {{ b[col.tag_field!] }}
            </el-tag>
          </template>
          <template v-else-if="col.type === 'date'"> {{ dayjs(scope.row[col.prop]).format('YYYY-mm-DD') }} </template>
          <slot v-else :name="col.prop" v-bind="scope">
            {{ col.prop.includes('.') ? getPropVal(col.prop.split('.'), scope.row) : scope.row[col.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
    <template #empty>
      <el-empty :description="emptyText" :image-size="100"></el-empty>
    </template>
  </el-table>
</template>
