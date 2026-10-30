// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH can be overridden at build time (e.g. to preview under a sub-path).
const SITE_URL = process.env.SITE_URL ?? 'https://madaribda.com';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
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
