<!--
 * @Author: 贾二小
 * @Date: 2022-07-07 20:21:46
 * @LastEditTime: 2022-08-20 11:37:23
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /EXUI/src/layouts/components/navMenu.vue
-->
<script setup lang="ts">
defineProps<{ navMenus?: MenuModel[] | null }>()

const hasChildren = (item: MenuModel) => {
  return item.children && !item.children.every((item) => item.meta?.hidden)
}
</script>

<template>
  <div v-if="navMenus && navMenus.length <= 0" class="p-5">
    <el-alert title="无子集菜单" center type="info" :closable="false"></el-alert>
  </div>
  <template v-for="(navMenu, index) in navMenus" v-bind:key="navMenu">
    <el-menu-item v-if="!hasChildren(navMenu)" :index="navMenu.path">
      <template #title>
        <el-icon v-if="navMenu.meta && navMenu.meta.icon">
          <component :is="navMenu.meta.icon || 'el-icon-menu'" />
        </el-icon>
        <span>{{ navMenu.meta?.title }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="navMenu.path!">
      <template #title>
        <el-icon v-if="navMenu.meta && navMenu.meta.icon">
          <component :is="navMenu.meta.icon || 'el-icon-menu'" />
        </el-icon>
        <span>{{ navMenu.meta?.title }}</span>
      </template>
      <nav-menu v-if="navMenu.children" :nav-menus="navMenu.children"></nav-menu>
    </el-sub-menu>
  </template>
</template>
