import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/movie");

const useMovies = () => {
  const movieQuery = useMovieStore((s) => s.movieQuery);

  return useQuery({
    queryKey: ["Movies", movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.with_genres,
          page: movieQuery.page,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useMovies;
