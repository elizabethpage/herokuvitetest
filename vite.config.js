import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://herokuvitetest-5ab34e4d0009.herokuapp.com',  // Your Heroku API URL
        changeOrigin: true, // This allows the request to be sent to a different origin
        secure: true, // You can keep this if your API uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: rewrites the path before sending the request
      },
    },
  },
});



