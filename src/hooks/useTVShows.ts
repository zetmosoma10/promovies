import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";
import ms from "ms";

const useTVShows = () => {
  return useQuery({
    queryKey: ["TVShows"],
    queryFn: () =>
      api.get<FetchResponse>("/tv/popular").then((res) => res.data),
    staleTime: ms("3h"),
  });
};

export default useTVShows;
