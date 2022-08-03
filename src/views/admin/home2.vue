<!--
 * @Author: 贾二小
 * @Date: 2022-07-02 00:06:51
 * @LastEditTime: 2022-07-30 15:14:56
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/views/admin/home2.vue
-->
<script lang="ts">
  export default {
    route: { name: 'home2', path: '/home2', meta: { title: '工作台2' } },
  }
</script>
<script setup lang="ts">
  import * as echarts from 'echarts/core'
  import {
    TitleComponent,
    TitleComponentOption,
    PolarComponent,
    PolarComponentOption,
    TooltipComponent,
    TooltipComponentOption,
  } from 'echarts/components'
  import { BarChart, BarSeriesOption } from 'echarts/charts'
  import { CanvasRenderer } from 'echarts/renderers'

  echarts.use([TitleComponent, PolarComponent, TooltipComponent, BarChart, CanvasRenderer])

  type EChartsOption = echarts.ComposeOption<
    TitleComponentOption | PolarComponentOption | TooltipComponentOption | BarSeriesOption
  >

  var option: EChartsOption

  option = {
    title: [
      {
        text: 'Tangential Polar Bar Label Position (middle)',
      },
    ],
    polar: {
      radius: [30, '80%'],
    },
    angleAxis: {
      max: 4,
      startAngle: 75,
    },
    radiusAxis: {
      type: 'category',
      data: ['a', 'b', 'c', 'd'],
    },
    tooltip: {},
    series: {
      type: 'bar',
      data: [2, 1.2, 2.4, 3.6],
      coordinateSystem: 'polar',
      label: {
        show: true,
        position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
        formatter: '{b}: {c}',
      },
    },
  }

  onMounted(() => {
    nextTick(() => {
      echarts.init(document.getElementById('main')!).setOption(option)
      document.getElementById('main')!.setAttribute('_echarts_instance_', '')
    })
  })
</script>

<template>
  <el-card>
    <div id="main" class="h-[500px]"></div>
  </el-card>
</template>

<style lang="scss"></style>
