// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkWebp from './src/plugins/remark-webp.js';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    } 
  }),
  markdown: {
    remarkPlugins: [remarkWebp],
  },
  vite: {
    plugins: [tailwindcss()],
  }
});