import { useQuery } from "@tanstack/react-query";
import api from "../services/apiClient";
import type { FetchResponse } from "../types/FetchResponse";

const MoviesPage = () => {
  const { data } = useQuery({
    queryKey: ["movies"],
    queryFn: () =>
      api.get<FetchResponse>("/movie/popular").then((res) => res.data),
  });

  console.log(data);
  return (
    <ul>
      {data?.results.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesPage;
