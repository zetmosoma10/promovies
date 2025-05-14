import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

const useTVShow = (id: number) => {
  const apiClient = new APIClient(`tv/${id}`);

  return useQuery({
    queryKey: ["TVShow", id],
    queryFn: () =>
      apiClient.getMovie({
        params: {
          append_to_response: "videos,credits,recommendations,external_ids",
        },
      }),
    staleTime: ms("3h"),
    refetchOnWindowFocus: false,
  });
};

export default useTVShow;
