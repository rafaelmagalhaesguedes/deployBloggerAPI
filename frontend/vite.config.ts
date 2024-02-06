import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/frontend/index.js',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
})
