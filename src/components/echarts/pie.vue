<!--
 * @Author: 贾二小
 * @Date: 2022-08-13 11:25:31
 * @LastEditTime: 2022-08-13 12:36:19
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/components/echarts/pie.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts/core'
import { TooltipComponent, TooltipComponentOption, LegendComponent, LegendComponentOption } from 'echarts/components'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout])
type EChartsOption = echarts.ComposeOption<TooltipComponentOption | LegendComponentOption | PieSeriesOption>
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
