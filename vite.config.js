import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "https://herokuvitetest-5ab34e4d0009.herokuapp.com/api/courses", // Your Heroku API URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
