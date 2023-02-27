import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/natrolite-places-frontend/",
  plugins: [react()],
})
