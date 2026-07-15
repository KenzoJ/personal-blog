import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [mdx(), react(), sitemap()],
  site: 'https://thelighthousekeeper.dev',
  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: ['thelighthousekeeper.dev', 'https://thelighthousekeeper.dev','localhost', '127.0.0.1'],
    },
  },
});
