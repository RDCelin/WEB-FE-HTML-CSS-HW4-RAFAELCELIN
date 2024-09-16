import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/WEB-FE-HTML-CSS-HW4-RAFAELCELIN/',
  plugins: [react()],
})
