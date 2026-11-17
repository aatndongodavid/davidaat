import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidportfolio.gemula.org',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' }
});
