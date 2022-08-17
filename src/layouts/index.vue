<!--
 * @Author: 贾二小
 * @Date: 2022-05-04 14:41:44
 * @LastEditTime: 2022-08-16 20:15:13
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /exui/src/layouts/index.vue
-->
<script setup lang="ts">
import Menu from './components/menu.vue'
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
// await Promise.all([userStore().getUserInfo(), menuStore().getMenus()])
</script>

<template>
  <el-container class="h-screen w-screen">
    <el-aside class="ex-aside" width="auto">
      <Menu />
    </el-aside>
    <el-container>
      <el-header class="ex-header" height="50px">
        <Header />
      </el-header>

      <el-container class="ex-container bg-gray-100">
        <el-header class="ex-bar flex items-center" height="45px">
          <tab-bar />
        </el-header>
        <el-scrollbar>
          <el-main class="ex-main">
            <router-view #default="{ Component, route }">
              <component :is="Component" class="gap-2.5" />
            </router-view>
          </el-main>
        </el-scrollbar>
      </el-container>

      <el-footer class="ex-footer" height="30px">
        <Footer />
      </el-footer>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.ex-aside {
  border-right: solid 1px var(--el-border-color);
}
.ex-bar {
  --el-header-padding: 0 10px;
}
.ex-header {
  --el-header-padding: 0 10px;
  border-bottom: solid 1px var(--el-border-color);
}

.ex-container {
  background-color: var(--el-bg-color-page);
  --el-header-padding: 0 10px;
  .ex-main {
    --el-main-padding: 0px 10px 10px 10px;
    height: calc(100vh - 125px);
  }
}

.ex-footer {
  --el-footer-padding: 0 10px;
  border-top: solid 1px var(--el-border-color);
}
</style>
