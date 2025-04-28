import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  root:'./',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      appType: 'spa',
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB
      },
      devOptions:{
        enabled: true
      },
      manifest: {
        id:'/',
        name: 'Sure Bank',
        short_name: 'Sure Bank',
        description: 'Chemical importation and sales platform',
        theme_color: '#0d9488',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ]
      }
    })
  ]
})
