<!--
 * @Author: 贾二小
 * @Date: 2022-07-07 20:42:50
 * @LastEditTime: 2022-08-16 23:51:07
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/views/other/abort.vue
-->
<script setup lang="ts">
import env from '@/utils/env'
import packageJson from '@/../package.json'
</script>
<template>
  <el-row :gutter="15">
    <el-col :lg="24">
      <el-card shadow="never" class="border-0 bg-gradient-to-r from-blue-400 to-green-500">
        <div class="text-center text-white font-bold">
          <img src="@/assets/img/logo.png" class="w-24 m-auto" />
          <h2 class="mt-2 text-3xl">{{ env.VITE_APP_NAME }}</h2>
          <p class="mt-2 text-xl">{{ env.VITE_APP_VERSION }}</p>
        </div>
      </el-card>
      <el-card shadow="never" header="dependencies" class="mt-2.5">
        <el-descriptions border :column="3">
          <el-descriptionsItem v-for="(value, key) in packageJson.dependencies" :key="key" :label="key">
            {{ value }}
          </el-descriptionsItem>
        </el-descriptions>
      </el-card>
      <el-card shadow="never" header="devDependencies" class="mt-2.5">
        <el-descriptions border :column="3">
          <el-descriptionsItem v-for="(value, key) in packageJson.devDependencies" :key="key" :label="key">
            {{ value }}
          </el-descriptionsItem>
        </el-descriptions>
      </el-card>
    </el-col>
  </el-row>
</template>
