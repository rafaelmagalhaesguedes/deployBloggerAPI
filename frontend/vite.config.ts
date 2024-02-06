import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['axios', 'react', 'react-dom'],
  },
  build: {
    commonjsOptions: {
      include: ['axios', 'react', 'react-dom'],
    },
  },
})