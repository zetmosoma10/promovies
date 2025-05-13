import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import type { Movie } from "../types/Movie";

const useSearch = (query: string | null) => {
  const apiClient = new APIClient<Movie>("/search/multi");

  return useQuery({
    queryKey: ["search", query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          query,
        },
      }),
  });
};

export default useSearch;
