import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import ms from "ms";

const useMovie = (id: number) => {
  const apiClient = new APIClient(`/movie/${id}`);

  return useQuery({
    queryKey: ["Movie", id],
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

export default useMovie;
