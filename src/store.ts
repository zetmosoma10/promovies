import { create } from "zustand";
import type { MovieQuery } from "./types/MovieQuery";

type Store = {
  movieQuery: MovieQuery;
  setGenre: (genreId: number) => void;
};

const useMovieStore = create<Store>((set) => ({
  movieQuery: {},
  setGenre: (genreId) =>
    set((prevState) => ({
      movieQuery: { ...prevState.movieQuery, with_genres: genreId },
    })),
}));

export default useMovieStore;
