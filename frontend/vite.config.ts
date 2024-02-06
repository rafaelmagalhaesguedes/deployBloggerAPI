import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['axios', 'react-router-dom', 'react-query', 'react-query/devtools', 'react-query/hydration', 'react-query/mutation', 'react-query/query', 'react-query/queryClient', 'react-query/queryClientProvider'],
  },
  build: {
    commonjsOptions: {
      include: ['axios', 'react-router-dom', 'react-query', 'react-query/devtools', 'react-query/hydration', 'react-query/mutation', 'react-query/query', 'react-query/queryClient', 'react-query/queryClientProvider'],
    },
  },
})