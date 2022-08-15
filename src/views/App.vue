<script setup lang="ts">
  import { ElLoading } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn'
  const loadingInstance = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.6)',
  })
</script>
<template>
  <el-config-provider :locale="zhCn">
    <RouterView #default="{ Component }">
      <suspense @resolve="loadingInstance.close()">
        <template #default>
          <component :is="Component" />
        </template>
      </suspense>
    </RouterView>
  </el-config-provider>
</template>
