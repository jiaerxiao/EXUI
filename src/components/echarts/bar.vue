<!--
 * @Author: 贾二小
 * @Date: 2022-08-13 11:25:09
 * @LastEditTime: 2022-08-13 12:36:35
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/components/echarts/bar.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts/core'
import { TitleComponent, GridComponent, GridComponentOption } from 'echarts/components'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TitleComponent, GridComponent, BarChart, CanvasRenderer])
type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>
const props = defineProps<{ options: EChartsOption }>()
const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null
const resizeHandler = () => {
  chart?.resize()
}
onMounted(() => {
  nextTick(() => {
    chart = echarts.init(chartRef.value as HTMLDivElement)
    chart.setOption({ ...props.options })
  })

  window.addEventListener('resize', resizeHandler)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
  chart?.dispose()
})
</script>

<template><div ref="chartRef"></div></template>

<style lang="scss"></style>
