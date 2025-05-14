import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient("/genre/movie/list");

const useGenreMovies = () => {
  return useQuery({
    queryKey: ["GenresList-Movies"],
    queryFn: () => apiClient.getGenres(),
    staleTime: ms("24h"),
    refetchOnWindowFocus: false
  });
};

export default useGenreMovies;
