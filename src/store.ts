import { create } from "zustand";
import type { MovieQuery } from "./types/MovieQuery";
import type { Category } from "./types/Category";
import { mountStoreDevtool } from "simple-zustand-devtools";

type Store = {
  movieQuery: Record<Category, MovieQuery>;
  setGenre: (category: Category, genreId?: number) => void;
};

const useMovieStore = create<Store>((set) => ({
  movieQuery: { movie: {}, trending: {}, tv: {} },
  setGenre: (category, genreId) =>
    set((state) => ({
      movieQuery: {
        ...state.movieQuery,
        [category]: {
          ...state.movieQuery[category],
          with_genres: genreId,
        },
      },
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Store", useMovieStore);

export default useMovieStore;
