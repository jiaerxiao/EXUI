/*
 * @Author: 贾二小
 * @Date: 2022-08-15 14:48:47
 * @LastEditTime: 2022-08-16 23:32:29
 * @LastEditors: 贾二小
 * @FilePath: /exui/vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(({ command, mode }) => {
  const isBuild = command == 'build'
  const env = parseEnv(loadEnv(mode, process.cwd()))

  return {
    plugins: [...setupPlugins(isBuild, env), vueJsx({})],
    //静态文件 url 前缀
    base: '/',
    resolve: {
      alias,
    },
    build: {
      //编译文件生成目录
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              return id.split('/node_modules/').pop()?.split('/')[0]
            }
          },
        },
      },
    },
    server: {
      host: true,
      proxy: {
        '/api': {
          target: env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
