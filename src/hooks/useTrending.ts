import { useQuery } from "@tanstack/react-query";
import type { FetchResponse } from "../types/FetchResponse";
import api from "../services/apiClient";
import ms from "ms";

const useTrending = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () =>
      api.get<FetchResponse>("/trending/all/week").then((res) => res.data),
    staleTime: ms("3h"),
  });
};

export default useTrending;
