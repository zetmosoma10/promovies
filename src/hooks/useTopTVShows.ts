import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";
import ms from "ms";

const useTopTVShows = () => {
  return useQuery({
    queryKey: ["Top-TVShows"],
    queryFn: () =>
      api.get<FetchResponse>("/tv/top_rated").then((res) => res.data),
    staleTime: ms("10h"),
  });
};

export default useTopTVShows;
