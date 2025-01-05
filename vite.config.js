import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@i18n': path.resolve(__dirname, './src/i18n')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@styles/variables.scss";`
      }
    }
  }
})
