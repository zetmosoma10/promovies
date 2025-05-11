import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/tv/popular");

const useTVShows = () => {
  return useQuery({
    queryKey: ["TVShows"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("3h"),
  });
};

export default useTVShows;
