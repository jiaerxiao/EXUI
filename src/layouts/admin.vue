<!--
 * @Author: 贾二小
 * @Date: 2022-05-04 14:41:44
 * @LastEditTime: 2022-08-10 00:06:14
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /exui/src/layouts/admin.vue
-->
<script setup lang="ts">
import Menu from './components/menu.vue'
import Breadcrumb from './components/breadcrumb.vue'
import Footer from './components/footer.vue'
import TabBar from './components/tabBar.vue'
import Header from './components/header.vue'
import menuStore from '@/store/menuStore'
import userStore from '@/store/userStore'

const route = useRoute()
watch(
  route,
  () => {
    menuStore().addHistoryMenu(route)
  },
  { immediate: true },
)

await Promise.all([userStore().getUserInfo(), menuStore().getMenus()])
</script>

<template>
  <el-container class="h-screen w-screen">
    <el-header class="flex items-center bg-red-200" height="3rem">
      <Header />
    </el-header>

    <el-container class="h-[calc(100vh-3rem)]">
      <el-aside width="auto">
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="flex items-center" height="2rem">
          <breadcrumb />
        </el-header>
        <el-header class="flex items-center" height="2.5rem">
          <tab-bar />
        </el-header>
        <el-scrollbar class="bg-gray-50">
          <el-main>
            <router-view #default="{ Component, route }">
              <component :is="Component" class="gap-2.5" />
            </router-view>
          </el-main>
        </el-scrollbar>

        <el-footer height="1.5rem">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
