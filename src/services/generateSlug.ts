import type { Movie } from "../types/Movie";

const generateSlug = (movie: Movie) => {
  const name = movie.name || movie.title;

  const slug = name!
    .normalize("NFD") // Normalize to decompose combined letters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s-]/g, "") // Remove special characters
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

  return `${slug}-${movie.id}`;
};

export default generateSlug;
