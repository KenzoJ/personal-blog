import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
  site: 'https://thelighthousekeeper.dev',
  vite: {
    preview: {
      allowedHosts: ['thelighthousekeeper.dev', 'https://thelighthousekeeper.dev','localhost', '127.0.0.1'],
    },
  },
}); 
