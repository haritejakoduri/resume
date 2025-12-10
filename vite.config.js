import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/resume/', // Based on homepage in package.json
  build: {
    outDir: 'build', // Maintain 'build' output directory for gh-pages compatibility
  },
  server: {
    open: true,
    port: 3000, 
  },
});
