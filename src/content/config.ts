import { defineCollection, z } from "astro:content";
import { WritingCategory } from "./categories";

const writingCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		categories: z.array(z.nativeEnum(WritingCategory)),
		date: z.string().transform((str) => new Date(str)),
	}),
});

export const collections = {
	writing: writingCollection,
};
