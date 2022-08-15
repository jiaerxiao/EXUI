<!--
 * @Author: 贾二小
 * @Date: 2022-07-04 20:45:43
 * @LastEditTime: 2022-08-14 17:33:37
 * @LastEditors: 贾二小
 * @Description: 
 * @FilePath: /exui/src/layouts/components/tabBar.vue
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
      class="animate__animated animate__fadeInRight animate__faster">
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
    color: var(--el-menu-active-color);
  }
  li {
    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
    @apply flex items-center pl-2 pr-2 flex-shrink-0 rounded-md cursor-pointer bg-white text-[18px];
    i {
      @apply pl-1 text-gray-600;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
