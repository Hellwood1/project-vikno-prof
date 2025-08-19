import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  define: { [command === 'serve' ? 'global' : '_global']: {} },
  root: 'src',
  base: '/project-vikno-prof/',     // ← правильно
  build: {
    sourcemap: true,
    outDir: '../docs',              // ← було ../dist, ставимо docs
    emptyOutDir: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
      output: {
        manualChunks(id) { if (id.includes('node_modules')) return 'vendor'; },
        entryFileNames: ci => (ci.name === 'commonHelpers' ? 'commonHelpers.js' : '[name].js'),
        assetFileNames: ai => (ai.name && ai.name.endsWith('.html') ? '[name].[ext]' : 'assets/[name]-[hash][extname]'),
      },
    },
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
}));
