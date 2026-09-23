import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PRODUCT_VERSION } from './src/data/version'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-version-transform',
      transformIndexHtml(html) {
        return html.replaceAll('__PRODUCT_VERSION__', PRODUCT_VERSION)
      },
    },
  ],

  server: {
    host: '127.0.0.1',
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        en: 'en/index.html',
      },
    },
  },
})
