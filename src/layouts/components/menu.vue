<!--
 * @Author: 贾二小
 * @Date: 2022-07-04 20:25:15
 * @LastEditTime: 2022-07-30 15:27:35
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /exui/src/layouts/components/menu.vue
-->
<script setup lang="ts">
  import menuStore from '@/store/menuStore'
  import NavMenu from './navMenu.vue'
  const route = useRoute()
  const menuService = menuStore()
  // watch(route, () => menuService.setCurrentMenu(route), { immediate: true })

  const isCollapse = ref(false)
</script>

<template>
  <div class="h-[calc(100vh-5rem)]">
    <el-scrollbar>
      <el-menu class="admin-menu" :default-active="$route.fullPath" router :collapse="isCollapse" :unique-opened="true">
        <nav-menu :nav-menus="menuService.menus"></nav-menu>
      </el-menu>
    </el-scrollbar>
  </div>
  <el-footer class="flex items-center justify-center" height="2rem" @click="isCollapse = !isCollapse">
    <el-icon>
      <icon-expand-left theme="outline" v-if="isCollapse" />
      <icon-expand-right theme="outline" v-else />
    </el-icon>
  </el-footer>
</template>
<style lang="scss">
  .admin-menu {
    @apply overflow-x-hidden;
  }
  .admin-menu:not(.el-menu--collapse) {
    @apply w-60;
  }
</style>
