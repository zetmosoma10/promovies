import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";
import ms from "ms";

const useMovies = () => {
  return useQuery({
    queryKey: ["Popular-Movies"],
    queryFn: () =>
      api.get<FetchResponse>("/movie/popular").then((res) => res.data),
    staleTime: ms("3h"),
  });
};

export default useMovies;
