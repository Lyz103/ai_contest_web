import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/contest/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 9882
  }
})
