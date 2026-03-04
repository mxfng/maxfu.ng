import { defineCollection, z } from "astro:content";

const writingCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  writing: writingCollection,
};
