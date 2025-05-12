import { create } from "zustand";
import type { MovieQuery } from "./types/MovieQuery";

type Store = {
  movieQuery: MovieQuery;
  setGenre: (genreId?: number) => void;
  setNextPage: () => void;
  setPrevPage: () => void;
};

const useMovieStore = create<Store>((set) => ({
  movieQuery: {
    page: 1,
  },
  setGenre: (genreId) =>
    set((prevState) => ({
      movieQuery: { ...prevState.movieQuery, with_genres: genreId, page: 1 },
    })),
  setNextPage: () =>
    set((prevState) => ({
      movieQuery: {
        ...prevState.movieQuery,
        page: prevState.movieQuery.page + 1,
      },
    })),
  setPrevPage: () =>
    set((prevState) => ({
      movieQuery: {
        ...prevState.movieQuery,
        page: prevState.movieQuery.page - 1,
      },
    })),
}));

export default useMovieStore;
