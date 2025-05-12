import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { Category } from "../types/Category";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/tv");

const useTVShows = (category: Category) => {
  const movieQuery = useMovieStore((s) => s.movieQuery);

  return useQuery({
    queryKey: ["TVShows", movieQuery[category]],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery[category].with_genres,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useTVShows;
