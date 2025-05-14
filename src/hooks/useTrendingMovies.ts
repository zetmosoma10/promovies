import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/trending/movie/week");

const useTrendingMovies = () => {
  return useQuery({
    queryKey: ["Trending-Movies"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("3h"),
    refetchOnWindowFocus: false,
  });
};

export default useTrendingMovies;
