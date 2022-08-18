<!--
 * @Author: 贾二小
 * @Date: 2022-07-02 00:06:51
 * @LastEditTime: 2022-08-18 14:54:40
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/views/dashboard/home.vue
-->
<script setup lang="ts">
const optionBar = {
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
}
const optionLine = {
  title: {
    text: 'ECharts 入门示例',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}

const optionPie = {
  title: {
    text: 'ECharts 入门示例',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
}
</script>

<template>
  <div class="grid grid-cols-2">
    <el-card shadow="hover">
      <echarts-bar :options="optionBar" class="h-72 w-full" />
    </el-card>
    <el-card shadow="hover">
      <echarts-pie :options="optionPie" class="h-72 w-full" />
    </el-card>
    <el-card shadow="hover" class="col-span-2">
      <echarts-line :options="optionLine" class="h-72 w-full" />
    </el-card>
  </div>
</template>
