<!--
 * @Author: 贾二小
 * @Date: 2022-08-01 19:28:40
 * @LastEditTime: 2022-08-01 19:28:48
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/components/pagination.vue
-->
<script setup lang="ts">
  const { total, size } = defineProps<{
    total: any
    size: any
  }>()

  defineEmits(['change'])
</script>

<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :hide-on-single-page="true"
    :page-size="size"
    @current-change="$emit('change', $event)"
    class="mt-3"
  />
</template>

<style lang="scss"></style>
