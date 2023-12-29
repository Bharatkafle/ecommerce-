import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    // alias: {
    //   // Add alias for react-redux if necessary
    //   'react-redux': '@reduxjs/toolkit',
    // },
  },
});
