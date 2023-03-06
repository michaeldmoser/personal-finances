import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: 'static',
  build: {
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      input: './src/main.tsx'
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
    strictPort: true,
    origin: 'http://localhost:3000'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
