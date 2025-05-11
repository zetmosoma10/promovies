import { useQuery } from "@tanstack/react-query";
import api from "../services/apiClient";
import type { FetchResponse } from "../types/FetchResponse";

const useTopTVShows = () => {
  return useQuery({
    queryKey: ["Top-TVShows"],
    queryFn: () =>
      api.get<FetchResponse>("/tv/top_rated").then((res) => res.data),
  });
};

export default useTopTVShows;
