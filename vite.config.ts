import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 8080,
  },
});
