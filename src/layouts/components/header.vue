<!--
 * @Author: 贾二小
 * @Date: 2022-07-06 20:21:14
 * @LastEditTime: 2022-07-30 12:30:52
 * @LastEditors: 贾二小
 * @FilePath: /exui/src/layouts/components/header.vue
-->
<script setup lang="ts">
  const router = useRouter()

  const handleCommand = (command: string | number | object) => {
    switch (command) {
      case 'uc':
        router.push({ name: 'abort' })
        break
      case 'clearCache':
        ElMessageBox.confirm('清除缓存会将系统初始化，包括登录状态、主题、语言设置等，是否继续？', '提示', {
          type: 'info',
        }).then(() => {
          router.replace({ name: 'login' })
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
          router.replace({ name: 'login' })
        })
        break
      default:
    }
  }

  const isFullscreen = ref(false)
  const toggle = () => {
    isFullscreen.value ? document.exitFullscreen() : document.documentElement.requestFullscreen()
    isFullscreen.value = !isFullscreen.value
  }
</script>
<template>
  <div class="flex-grow absolute left-4">
    <div class="flex items-center space-x-1">
      <el-avatar :size="35">二</el-avatar>
      <span class="text-slate-800 text-opacity-80">XXX后台系统管理</span>
    </div>
  </div>

  <div class="flex-grow absolute right-4">
    <div class="flex items-center space-x-4">
      <el-icon @click="toggle">
        <icon-off-screen theme="outline" v-if="isFullscreen" />
        <icon-full-screen theme="outline" v-else />
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
</template>
