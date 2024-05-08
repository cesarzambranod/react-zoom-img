import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/Zoom.tsx',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react'],
      output: {
        dir: 'dist/vite',
        entryFileNames: 'Zoom.js',
        format: 'es'
      }
    }
  }
});
