// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkWebp from './src/plugins/remark-webp.js';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
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
//    css: {
//      transformer: "lightningcss",
//    },
  }
});
