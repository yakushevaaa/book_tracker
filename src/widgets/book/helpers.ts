import { Genre } from "@/entities/book";

export const getGenreImage = (genre: Genre): string => {
  const images: Record<Genre, string> = {
    Fantasy: "/images/covers/fantasy.jpg",
    Detective: "/images/covers/detective.jpg",
    "Scientific literature": "/images/covers/scient.jpg",
    Roman: "/images/covers/roman.jpg",
  };

  return images[genre] || "/images/covers/default.webp";
};
