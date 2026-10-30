// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the final domain once DNS is pointed from Hostinger.
const SITE_URL = 'https://example.com';

export default defineConfig({
  site: SITE_URL,
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar-SA', en: 'en-SA' } },
    }),
  ],
  build: { inlineStylesheets: 'always' },
});
