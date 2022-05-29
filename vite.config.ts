import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
const path = require('path');

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    server: {
      proxy: {
        '^/assets': {
          target: 'http://1:3000/',
          changeOrigin: true
        }
      }
    }
  });
};
