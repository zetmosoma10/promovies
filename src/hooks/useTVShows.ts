import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";

const useTVShows = () => {
  return useQuery({
    queryKey: ["TVShows"],
    queryFn: () =>
      api.get<FetchResponse>("/tv/popular").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useTVShows;
