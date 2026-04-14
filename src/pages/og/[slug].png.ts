import type { APIRoute, GetStaticPaths } from "astro";
import { getWritings } from "@/lib/get-collection";
import { generateOgImage } from "@/lib/og-image";

export const getStaticPaths: GetStaticPaths = async () => {
  const writings = await getWritings();
  return writings
    .filter((w) => !w.data.image)
    .map((writing) => ({
      params: { slug: writing.id },
      props: { title: writing.data.title },
    }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await generateOgImage(props.title);
  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
};
