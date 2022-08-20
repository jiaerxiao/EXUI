<!--
 * @Author: 贾二小
 * @Date: 2022-07-04 20:45:43
 * @LastEditTime: 2022-08-20 11:28:58
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /EXUI/src/layouts/components/tabBar.vue
-->
<script setup lang="ts">
import menuStore from '@/store/menuStore'
import { RouteLocationNormalized } from 'vue-router'
const menuService = menuStore()
const router = useRouter()
const route = useRoute()
const menus = ref(menuService.historyMenu)

const removeMenu = (menu: RouteLocationNormalized) => {
  menuService.removeHistoryMenu(menu)
  if (menu.name == route.name) {
    router.push({ name: menus.value.pop()?.name as string })
  }
}
</script>
<template>
  <ul>
    <li
      v-for="item in menus"
      :class="{ 'is-active': $route.name == item.name }"
      class="animate__animated animate__fadeInRights">
      <router-link :to="{ name: item.name as string }">
        {{ item.meta.title }}
      </router-link>
      <el-icon @click="removeMenu(item)"><Close /></el-icon>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
ul {
  @apply flex items-center space-x-2 overflow-x-auto;
  .is-active {
    color: var(--active-color);
  }
  li {
    transition-duration: var(--el-transition-duration);
    background-color: var(--bg-color);
    color: var(--text-color);
    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
    a {
      color: var(--el-text-color);
    }
    @apply flex items-center pl-4 pr-4 pt-1.5 pb-1 rounded-sm cursor-pointer  text-sm;
    i {
      @apply pl-1 text-gray-600;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
