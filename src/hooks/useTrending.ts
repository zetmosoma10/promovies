import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/trending/all/week");

const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("3h"),
  });
};

export default useTrending;
