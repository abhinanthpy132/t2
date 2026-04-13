import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/reactwater2/', // Match your new repository name for GitHub Pages
  build: {
    outDir: 'dist'
  }
})
