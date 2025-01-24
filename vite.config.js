import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://course-review-d137f8c06075.herokuapp.com', // Your Heroku API URL
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
