import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";

const useTVShow = (id: number) => {
  const apiClient = new APIClient(`tv/${id}`);

  return useQuery({
    queryKey: ["TVShow", id],
    queryFn: () => apiClient.getMovie(),
  });
};

export default useTVShow;
