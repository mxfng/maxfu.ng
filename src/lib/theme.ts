/**
 * Hex equivalents of the OKLCH CSS variables in global.css.
 * Used in contexts that can't reference CSS vars (OG images, meta tags).
 */
export const theme = {
  background: "#1a1a1a", // oklch(0.2178 0 0)
  foreground: "#e5e5e5", // oklch(0.9219 0 0)
} as const;
