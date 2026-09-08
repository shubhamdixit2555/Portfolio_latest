import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lottie': ['lottie-react'],
          'icons': ['react-icons'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  server: {
    host: '0.0.0.0',   // expose to LAN
    port: 5173,
  },
});
