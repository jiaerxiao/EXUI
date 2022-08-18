<!--
 * @Author: 贾二小
 * @Date: 2022-07-06 20:21:14
 * @LastEditTime: 2022-08-18 18:11:19
 * @LastEditors: 贾二小
 * @FilePath: /EXUI/src/layouts/components/header.vue
-->
<script setup lang="ts">
import menuStore from '@/store/menuStore'
import { useDark, useToggle } from '@vueuse/core'
const router = useRouter()
const route = useRoute()

const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'uc':
      router.push({ name: 'abort' })
      break
    case 'clearCache':
      ElMessageBox.confirm('清除缓存会将系统初始化，包括登录状态、主题、语言设置等，是否继续？', '提示', {
        type: 'info',
      }).then(() => {
        router.replace('/login')
        setTimeout(() => {
          location.reload()
        }, 1000)
      })
      break
    case 'outLogin':
      ElMessageBox.confirm('确认是否退出当前用户？', '提示', {
        type: 'warning',
        confirmButtonText: '退出',
        confirmButtonClass: 'el-button--danger',
      }).then(() => {
        router.replace('/login')
      })
      break
    default:
  }
}

//面包屑
const foundFar = (data: MenuModel[], val: string): MenuModel[] | undefined => {
  for (var i = 0; i < data.length; i++) {
    if (data[i] && data[i].name == val) {
      return [] as MenuModel[]
    }
    if (data[i] && data[i].children) {
      var far = foundFar(data[i].children!, val)
      if (far) {
        return far.concat(data[i])
      }
    }
  }
}

const breadcrumbList = computed(() => {
  return foundFar(menuStore().menuTree, route.name as string)!
})

//全屏切换
const isFullscreen = ref(false)
const toggle = () => {
  isFullscreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
  isFullscreen.value = !isFullscreen.value
}

//主题切换
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <div class="h-full flex items-center">
    <div class="flex-grow left-4">
      <div class="flex items-center space-x-1">
        <el-breadcrumb>
          <el-breadcrumb-item v-for="item in breadcrumbList">
            <span class="flex items-center space-x-1">
              <el-icon v-if="item.meta && item.meta?.title">
                <component :is="item.meta?.icon || 'el-icon-menu'" />
              </el-icon>
              <span>{{ item.meta?.title }}</span>
            </span>
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <span class="flex items-center space-x-1">
              <el-icon v-if="$route.meta && $route.meta?.title">
                <component :is="$route.meta?.icon || 'el-icon-menu'" />
              </el-icon>
              <span>{{ $route.meta?.title }}</span>
            </span>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="flex-grow absolute right-4">
      <div class="flex items-center space-x-4">
        <el-icon @click="toggle">
          <icon-off-screen theme="outline" v-if="isFullscreen" />
          <icon-full-screen theme="outline" v-else />
        </el-icon>
        <el-icon @click="toggleDark()">
          <icon-dark-mode theme="outline" v-if="isDark" />
          <icon-sun-one theme="outline" v-else />
        </el-icon>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link flex items-center space-x-1">
            <el-avatar :size="35">A</el-avatar>
            <span>张三</span>
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="uc">系统信息</el-dropdown-item>
              <el-dropdown-item command="clearCache">清除缓存</el-dropdown-item>
              <el-dropdown-item command="outLogin" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
