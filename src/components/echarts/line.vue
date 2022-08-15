<!--
 * @Author: 贾二小
 * @Date: 2022-08-13 11:25:18
 * @LastEditTime: 2022-08-13 12:36:42
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/components/echarts/line.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts/core'
import { TitleComponent, GridComponent, GridComponentOption } from 'echarts/components'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TitleComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition])
type EChartsOption = echarts.ComposeOption<GridComponentOption | LineSeriesOption>
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
