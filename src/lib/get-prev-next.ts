import type { CollectionEntry } from "astro:content";

function getPrevNext(
  entries: CollectionEntry<"writing">[],
  currentSlug: string,
) {
  const currentIndex = entries.findIndex((entry) => entry.id === currentSlug);

  const prevEntry = entries[currentIndex - 1];
  const nextEntry = entries[currentIndex + 1];

  return {
    prevEntry: prevEntry
      ? {
          id: prevEntry.id,
          title: prevEntry.data.title,
        }
      : null,
    nextEntry: nextEntry
      ? {
          id: nextEntry.id,
          title: nextEntry.data.title,
        }
      : null,
  };
}

export { getPrevNext };
