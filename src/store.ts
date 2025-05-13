import { create } from "zustand";
import type { MovieQuery } from "./types/MovieQuery";
import type { Category } from "./types/Category";
import { mountStoreDevtool } from "simple-zustand-devtools";

type Store = {
  movieQuery: Record<Category, MovieQuery>;
  setNextPage: (category: Category) => void;
  setPrevPage: (category: Category) => void;
  setSearch: (category: Category, query: string) => void;
  setGenre: (category: Category, genreId?: number) => void;
};

const useMovieStore = create<Store>((set) => ({
  movieQuery: {
    tv: { page: 1 },
    movie: { page: 1 },
    trending: { page: 1 },
    search: { page: 1 },
  },
  setGenre: (category, genreId) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: {
          ...state.movieQuery[category],
          with_genres: genreId,
          page: 1,
        },
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
  setSearch: (category, query) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: {
          ...state.movieQuery[category],
          query,
        },
      },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useMovieStore);

export default useMovieStore;
