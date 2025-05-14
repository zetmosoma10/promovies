import { useQuery } from "@tanstack/react-query";
import type { Movie } from "../types/Movie";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Movie>("/discover/tv");

const useLatestTVShows = () => {
  return useQuery({
    queryKey: ["Top-TVShows"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          "first_air_date.gte": "2023-01-01",
        },
      }),
    staleTime: ms("10h"),
    refetchOnWindowFocus: false,
  });
};

export default useLatestTVShows;
