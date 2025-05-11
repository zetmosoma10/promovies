import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/tv/top_rated");

const useTopTVShows = () => {
  return useQuery({
    queryKey: ["Top-TVShows"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("10h"),
  });
};

export default useTopTVShows;
