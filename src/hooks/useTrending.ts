import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";
import type { Category } from "../types/Category";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/trending/all/week");

const useTrending = (category: Category) => {
  const query = useMovieStore((s) => s.movieQuery[category]);
  return useQuery({
    queryKey: ["Trending-All", query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          page: query.page,
        },
      }),
    staleTime: ms("3h"),
  });
};

export default useTrending;
