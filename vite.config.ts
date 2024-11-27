import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: {
      application: '/src/application',
      domain: '/src/domain',
      infrastructure: '/src/infrastructure',
      presentation: '/src/presentation',
      utils: '/src/utils',
      hooks: '/src/hooks',
    },
  },
});
