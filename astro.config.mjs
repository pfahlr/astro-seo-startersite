// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkWebp from './src/plugins/remark-webp.js';
import cloudflare from '@astrojs/cloudflare';
import minify from 'astro-min';

import { SITE_INFO } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: SITE_INFO.site_url,
  integrations: [mdx(), sitemap(), 
    /*minify({
      /*
       do_not_minify_doctype: false,
       ensure_spec_compliant_unquoted_attribute_values: false,
       keep_closing_tags: false,
       keep_comments: false,
       keep_html_and_head_opening_tags: false,
       keep_input_type_text_attr: false,
       keep_spaces_between_attributes: false, 
       keep_ssi_comments: false,
       minify_css: true,
       minify_js: true,
       preserve_brace_template_syntax: false,
       preserve_chevron_percent_template_syntax: false,
       remove_bangs: false,
       remove_processing_instructions: false,
       
    }),*/
    (await import('astro-compress')).default({
			CSS: true,
			HTML: {
				"html-minifier-terser": {
					removeAttributeQuotes: false,
				},
			},
			Image: true,
			JavaScript: true,
			SVG: true,      
    }),
  ],
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