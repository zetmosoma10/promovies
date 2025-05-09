import { useQuery } from "@tanstack/react-query";
import api from "../services/apiClient";
import type { FetchResponse } from "../types/FetchResponse";

const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      api.get<FetchResponse>("/trending/movie/week").then((res) => res.data),
  });
};

export default useTrending;
