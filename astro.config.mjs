// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: {
            class: "heading-anchor",
            ariaHidden: "true",
            tabIndex: -1,
          },
          content: {
            type: "text",
            value: "#",
          },
        },
      ],
      [
        rehypeExternalLinks,
        { target: "_blank", rel: ["noopener", "noreferrer"] },
      ],
    ],
  },
});
