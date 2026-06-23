import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use `npm run build:ghpages` when deploying to GitHub Pages project sites.
  base: mode === 'ghpages' ? '/kiwi-logics-pipe-line/' : '/',
  plugins: [react()],
}))
