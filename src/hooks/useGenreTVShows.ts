import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient("/genre/tv/list");

const useGenreTVShows = () => {
  return useQuery({
    queryKey: ["GenresList-TVShows"],
    queryFn: () => apiClient.getGenres(),
    staleTime: ms("24h"),
    refetchOnWindowFocus: false,
  });
};

export default useGenreTVShows;
