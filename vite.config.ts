import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/h-podcast/',
  plugins: [
    vue(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,vue}"',
        dev: {
          logLevel: ['error']
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
