import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Port set karne ke liye
  },
  build: {
    chunkSizeWarningLimit: 1000, // Default 500 hota hai, ise increase kar sakte ho
  },
});
