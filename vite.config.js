import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig( {
  plugins: [
    react(),
    VitePWA( {
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Portfolio',
        short_name: 'Portfolio',
        description: 'Portfolio of Agil Aryaddinata Abbas, Web Developer and Product Designer',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/images/logo192x192',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/logo512x512',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    } ),
  ],
} );
