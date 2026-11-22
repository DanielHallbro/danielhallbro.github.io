import type { CollectionEntry } from 'astro:content';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// Dates are display strings like "March 2026" or "February - May 2026".
// Ranges sort by their last month.
function dateValue(date: string): number {
  const year = Number(date.match(/\d{4}/g)?.at(-1) ?? 0);
  const months = date.toLowerCase().match(/[a-z]{3,}/g) ?? [];
  const month = months.map(m => MONTHS.indexOf(m.slice(0, 3))).filter(i => i >= 0).at(-1) ?? 0;
  return year * 12 + month;
}

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort((a, b) => dateValue(b.data.date) - dateValue(a.data.date));
}
