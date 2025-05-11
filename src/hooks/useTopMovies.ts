import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";
import ms from "ms";

const useTopMovies = () => {
  return useQuery({
    queryKey: ["Top-Movies"],
    queryFn: () =>
      api.get<FetchResponse>("/movie/top_rated").then((res) => res.data),
    staleTime: ms("24h"),
  });
};

export default useTopMovies;
