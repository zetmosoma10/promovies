import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { Category } from "../types/Category";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/movie");

const useMovies = (category: Category) => {
  const movieQuery = useMovieStore((s) => s.movieQuery);

  return useQuery({
    queryKey: ["Movies", movieQuery[category]],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery[category].with_genres,
          page: movieQuery[category].page,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useMovies;
