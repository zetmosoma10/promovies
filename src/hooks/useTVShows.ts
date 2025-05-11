import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/tv");

const useTVShows = () => {
  const movieQuery = useMovieStore((s) => s.movieQuery);
  return useQuery({
    queryKey: ["TVShows", movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: movieQuery.with_genres,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useTVShows;
