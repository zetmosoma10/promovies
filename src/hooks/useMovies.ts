import { useInfiniteQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import type { Category } from "../types/Category";
import APIClient from "../services/apiClient";
import ms from "ms";
import useMovieStore from "../store";

const apiClient = new APIClient<Movie>("/discover/movie");

const useMovies = (category: Category) => {
  const query = useMovieStore((s) => s.movieQuery[category]);

  return useInfiniteQuery({
    queryKey: ["Movies", query],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          with_genres: query.with_genres,
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

export default useMovies;
