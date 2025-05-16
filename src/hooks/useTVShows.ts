import { useInfiniteQuery } from "@tanstack/react-query";
import type { Category } from "../types/Category";
import type { Movie } from "../types/Movie";
import ms from "ms";
import APIClient from "../services/apiClient";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/tv");

const useTVShows = (category: Category) => {
  const query = useMovieStore((s) => s.movieQuery[category]);

  return useInfiniteQuery({
    queryKey: ["TVShows", query],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
          with_genres: query.with_genres,
          sort_by: query.sort_by,
          "vote_average.gte": 5,
          "vote_average.lte": 9.8,
        },
      }),
    initialPageParam: 11,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: ms("3h"),
    refetchOnWindowFocus: false,
  });
};

export default useTVShows;
