import { create } from "zustand";
import type { MovieQuery } from "./types/MovieQuery";
import type { Category } from "./types/Category";

type Store = {
  movieQuery: Record<Category, MovieQuery>;
  setGenre: (category: Category, genreId?: number) => void;
  setNextPage: (category: Category) => void;
  setPrevPage: (category: Category) => void;
};

const useMovieStore = create<Store>((set) => ({
  movieQuery: {
    tv: { page: 1 },
    movie: { page: 1 },
    trending: { page: 1 },
  },
  setGenre: (category, genreId) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: { with_genres: genreId, page: 1 },
      },
    })),
  setNextPage: (category) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: { page: state.movieQuery[category].page + 1 },
      },
    })),
  setPrevPage: (category) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: { page: state.movieQuery[category].page - 1 },
      },
    })),
}));

export default useMovieStore;
