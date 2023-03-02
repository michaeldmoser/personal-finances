import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'static',
  build: {
    manifest: true,
    // outDir: ,
    rollupOptions: {
      input: './src/main.tsx'
    }
  }
});
