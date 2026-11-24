import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Relative paths, so the build works at johnebden.com and at the old github.io/john-ebden/ address.
  // Every page is index.html with a query string, so relative paths always resolve the same way.
  base: command === 'build' ? './' : '/',
  plugins: [react()],
}))
