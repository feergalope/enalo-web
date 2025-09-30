import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          styled: ['styled-components'],
          motion: ['framer-motion'],
        },
        // Añadir hash a los archivos para cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `assets/images/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Configurar caché para assets
    assetsInlineLimit: 4096, // Inline assets menores a 4kb
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: true
    },
    // Headers para desarrollo
    headers: {
      'Cache-Control': 'no-cache'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'styled-components', 'framer-motion', '@emailjs/browser'],
    // Forzar pre-bundling de dependencias críticas
    force: true
  },
  define: {
    // Definir process.env para el navegador
    'process.env': process.env
  },
  // Configurar headers de caché para producción
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  }
});
