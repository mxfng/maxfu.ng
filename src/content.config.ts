import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writingCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    music: z.boolean().optional(),
  }),
});

export const collections = {
  writing: writingCollection,
};
