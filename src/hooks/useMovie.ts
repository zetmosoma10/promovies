import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

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
  });
};

export default useMovie;
