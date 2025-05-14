import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import type { Movie } from "../types/Movie";

const useSearch = (query: string | null) => {
  const apiClient = new APIClient<Movie>("/search/multi");

  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          query,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    staleTime: ms("1h"),
    refetchOnWindowFocus: false,
  });
};

export default useSearch;
