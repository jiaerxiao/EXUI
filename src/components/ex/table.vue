<!--
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-17 18:58:17
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/components/ex/table.vue
-->
<script setup lang="ts">
import dayjs from 'dayjs'

const { data, columns } = defineProps<{
  data?: Record<string, any>[]
  columns: TableColumnsType[]
}>()
const getPVal = (row: any, prop: string) => {
  console.log(row, prop)
  if (row) {
    return row['meta']['icon']
  }
  return '22'
}
</script>

<template>
  <el-table :data="data" border stripe :highlight-current-row="true" style="width: 100%">
    <el-table-column
      v-for="col in columns"
      :fixed="col.fixed || false"
      :prop="col.prop"
      :key="col.prop"
      :label="col.label"
      :width="col.width"
      :align="col.align"
      #default="{ row }">
      <template v-if="col.type === 'image'">
        <el-image
          preview-teleported
          :hide-on-click-modal="true"
          :preview-src-list="[row[col.prop]!]"
          :src="row[col.prop]"
          fit="cover"
          class="w-10 h-10 rounded-lg" />
      </template>
      <template v-else-if="col.type === 'radio'">
        <span v-for="c in col.options" v-show="c[1] == row[col.prop]">
          <el-tag>{{ c[0] }}</el-tag>
        </span>
      </template>
      <template v-else-if="col.type === 'tag'">
        <el-tag type="success" size="small" effect="dark" v-for="(b, key) of row[col.prop]" :key="key" class="m-1">
          {{ b[col.tag_field!] }}
        </el-tag>
      </template>
      <template v-else-if="col.type === 'date'"> {{ dayjs(row[col.prop]).format('YYYY-mm-DD') }} </template>

      <template v-else>
        {{ col.prop.includes('.') ? getPVal(row, col.prop) : row[col.prop] }}
      </template>
    </el-table-column>
  </el-table>
</template>
