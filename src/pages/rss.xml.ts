import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getWritings } from "@/lib/get-collection";

export async function GET(context: APIContext) {
  const writings = await getWritings();

  return rss({
    title: "Max Fung",
    description: "Software engineer and musician based in Los Angeles.",
    site: context.site!,
    items: writings.map((writing) => ({
      title: writing.data.title,
      description: writing.data.description,
      pubDate: writing.data.date,
      link: `/writing/${writing.slug}/`,
    })),
  });
}
