<!--
 * @Author: 贾二小
 * @Date: 2022-08-13 16:06:36
 * @LastEditTime: 2022-08-13 21:48:14
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/components/ex/pagination.vue
-->
<script setup lang="ts">
const { total, size } = defineProps<{
  total: any
  size: any
}>()

defineEmits(['change', 'sizeChange'])
</script>

<template>
  <!-- <el-pagination
    background
    layout="total, sizes, prev, pager, next, jumper"
    :page-sizes="[5, 10, 15, 30, 50]"
    :total="total"
    :hide-on-single-page="true"
    :page-size="size"
    @size-change="$emit('change', $event)"
    @current-change="$emit('change', $event)"
    class="mt-3" /> -->

  <el-pagination
    background
    :small="true"
    layout="total, sizes, prev, pager, next"
    :page-sizes="[5, 10, 15, 30, 50]"
    :total="total"
    :hide-on-single-page="true"
    :page-size="size"
    @size-change="$emit('sizeChange', $event)"
    @current-change="$emit('change', $event)"
    class="mt-3" />
</template>

<style lang="scss"></style>
