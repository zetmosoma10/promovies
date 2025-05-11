import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/movie/top_rated");

const useTopMovies = () => {
  return useQuery({
    queryKey: ["Top-Movies"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });
};

export default useTopMovies;
