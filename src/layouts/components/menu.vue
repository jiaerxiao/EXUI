<!--
 * @Author: 贾二小
 * @Date: 2022-07-04 20:25:15
 * @LastEditTime: 2022-08-16 15:45:44
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /EXUI/src/layouts/components/menu.vue
-->
<script setup lang="ts">
import menuStore from '@/store/menuStore'
import NavMenu from './navMenu.vue'
const route = useRoute()
const menuService = menuStore()
// watch(route, () => menuService.setCurrentMenu(route), { immediate: true })
//

const isCollapse = ref(false)
</script>

<template>
  <el-container>
    <div class="flex items-center justify-center space-x-2" style="height: 50px">
      <el-avatar :size="35">二</el-avatar>
      <span v-show="!isCollapse" class="text-opacity-80">XXX后台系统管理</span>
    </div>
    <el-aside>
      <el-scrollbar class="ex-scrollbar">
        <el-menu class="ex-menu" :default-active="$route.fullPath" router :collapse="isCollapse" :unique-opened="true">
          <nav-menu :nav-menus="menuService.menuTree"></nav-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
    <el-footer class="flex items-center justify-center" height="30px" @click="isCollapse = !isCollapse">
      <el-icon>
        <icon-expand-left theme="outline" v-if="isCollapse" />
        <icon-expand-right theme="outline" v-else />
      </el-icon>
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.ex-scrollbar {
  height: calc(100vh - 80px);
  overflow-x: hidden;
  border-right: none;
}
.ex-menu {
  border-right: none;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
