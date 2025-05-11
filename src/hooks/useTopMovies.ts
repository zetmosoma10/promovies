import { useQuery } from "@tanstack/react-query";
import api from "../services/apiClient";
import type { FetchResponse } from "../types/FetchResponse";

const useTopMovies = () => {
  return useQuery({
    queryKey: ["Top-Movies"],
    queryFn: () =>
      api.get<FetchResponse>("/movie/top_rated").then((res) => res.data),
  });
};

export default useTopMovies;
