import type { CollectionEntry } from "astro:content";

type FormatOptions = {
  sortBy?: "date" | "title";
  sortOrder?: "asc" | "desc";
  filterOutFuture?: boolean;
  maxItems?: number;
};

function formatCollection(
  entries: CollectionEntry<"writing">[],
  options: FormatOptions = {},
): CollectionEntry<"writing">[] {
  const {
    sortBy,
    sortOrder = "desc",
    filterOutFuture = true,
    maxItems,
  } = options;

  let result = [...entries];

  if (import.meta.env.PROD) {
    result = result.filter((entry) => !entry.data.draft);
  }

  if (filterOutFuture && import.meta.env.PROD) {
    const now = Date.now();
    result = result.filter(
      (entry) => new Date(entry.data.date).getTime() <= now,
    );
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
