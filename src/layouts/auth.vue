<!--
 * @Author: 贾二小
 * @Date: 2022-08-09 23:29:50
 * @LastEditTime: 2022-08-09 23:30:08
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/layouts/auth.vue
-->
<script setup lang="ts"></script>

<template>
  <router-view #default="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style lang="scss"></style>
