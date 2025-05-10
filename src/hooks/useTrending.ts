import { useQuery } from "@tanstack/react-query";
import api from "../services/apiClient";
import type { FetchResponse } from "../types/FetchResponse";

const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      api.get<FetchResponse>("/trending/all/week").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTrending;
