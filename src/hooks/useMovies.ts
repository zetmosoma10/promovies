import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";

const useMovies = () => {
  return useQuery({
    queryKey: ["movies", "poplular"],
    queryFn: () =>
      api.get<FetchResponse>("/movie/popular").then((res) => res.data),
  });
};

export default useMovies;
