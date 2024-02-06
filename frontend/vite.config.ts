import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/main.js'
    }
  },
  optimizeDeps: {
    include: ['react-router-dom', 'react-router']
  }
});
