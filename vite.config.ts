/// <reference types="vitest" />
/// <reference types="vite/client" />

import path from 'path';

import { defineConfig } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: 'c8',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svgr(),
    eslintPlugin(),
    // visualizer({
    //   open: true,
    // }),
  ],
});
