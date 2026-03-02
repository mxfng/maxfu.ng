import type { WritingCategory } from "@/content/categories";
import type { CollectionEntry } from "astro:content";

type FormatOptions = {
	category?: WritingCategory;
	sortBy?: "date" | "title";
	sortOrder?: "asc" | "desc";
	filterOutFuture?: boolean;
	maxItems?: number;
};

function formatCollection(
	entries: CollectionEntry<"writing">[],
	options: FormatOptions = {},
): CollectionEntry<"writing">[] {
	const { category, sortBy, sortOrder = "desc", filterOutFuture = true, maxItems } = options;

	let result = [...entries];

	if (category || filterOutFuture) {
		const now = Date.now();
		result = result.reduce<CollectionEntry<"writing">[]>((acc, entry) => {
			const { date, categories } = entry.data;

			if (filterOutFuture && new Date(date).getTime() > now) return acc;
			if (category && !categories.includes(category)) return acc;

			acc.push(entry);
			return acc;
		}, []);
	}

	if (sortBy) {
		const dir = sortOrder === "asc" ? 1 : -1;

		result = [...result].sort((a, b) => {
			switch (sortBy) {
				case "date": {
					const aTime = new Date(a.data.date).getTime();
					const bTime = new Date(b.data.date).getTime();
					return dir * (aTime - bTime);
				}
				case "title":
					return dir * a.data.title.localeCompare(b.data.title);
				default:
					return 0;
			}
		});
	}

	if (maxItems !== undefined && maxItems > 0) {
		result = result.slice(0, maxItems);
	}

	return result;
}

export { formatCollection };
