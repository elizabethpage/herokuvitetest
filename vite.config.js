import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Change this to 'build' if you want the output folder to be 'build'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://herokuvitetest-5ab34e4d0009.herokuapp.com',  // Your Heroku API URL
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            proxyReq.setHeader('Access-Control-Allow-Origin', '*');  // Fix CORS locally
          });
        },
      },
    },
  },
});




