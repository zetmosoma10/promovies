import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/discover/movie");

const useLatestMovies = () => {
  return useQuery({
    queryKey: ["Top-Movies"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          "vote_average.gte": 6.5,
          "release_date.gte": new Date("2025-01-01"),
        },
      }),
    staleTime: ms("24h"),
  });
};

export default useLatestMovies;
