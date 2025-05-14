import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import type { Movie } from "../types/Movie";

const apiClient = new APIClient<Movie>("/trending/all/week");

const useTrending = () => {
  return useInfiniteQuery({
    queryKey: ["Trending-All"],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: ms("3h"),
    refetchOnWindowFocus: false,
  });
};

export default useTrending;
