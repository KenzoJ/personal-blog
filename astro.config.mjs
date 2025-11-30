import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
  site: 'https://kenzojohnson.dev',
  vite: {
    preview: {
      allowedHosts: ['kenzojohnson.dev', 'www.kenzojohnson.dev', 'localhost', '127.0.0.1'],
    },
  },
});
