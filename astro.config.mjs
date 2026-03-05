// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://maxfu.ng/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
    },
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
  },
});
