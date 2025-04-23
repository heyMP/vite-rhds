import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      // fixes the issue with Top Level Awaits in the
      // Vite dev server
      target: 'esnext'
    }
  },
})
