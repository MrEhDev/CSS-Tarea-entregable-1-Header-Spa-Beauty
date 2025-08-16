// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true,   // vigila cambios por sondeo
      interval: 200,      // ajusta si quieres (ms)
    },
  },
});
