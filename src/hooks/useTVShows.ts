import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { Category } from "../types/Category";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/tv");

const useTVShows = (category: Category) => {
  const query = useMovieStore((s) => s.movieQuery[category]);

  return useQuery({
    queryKey: ["TVShows", query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          with_genres: query.with_genres,
          page: query.page,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useTVShows;
