import { getCollection } from "astro:content";
import { formatCollection } from "./format-collection";

async function getWritings() {
	const writings = await getCollection("writing");
	return formatCollection(writings, {
		sortBy: "date",
		sortOrder: "desc",
	});
}

export { getWritings };
