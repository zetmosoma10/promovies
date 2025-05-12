import axios, { type AxiosRequestConfig } from "axios";
import type { FetchResponse } from "../types/FetchResponse";
import type { GenreResponse } from "../types/Genre";
import type { Movie } from "../types/Movie";

const api_key = import.meta.env.VITE_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config?: AxiosRequestConfig) {
    return api
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }

  getMovie() {
    return api.get<Movie>(this.endpoint).then((res) => res.data);
  }

  getGenres() {
    return api.get<GenreResponse>(this.endpoint).then((res) => res.data.genres);
  }
}

export default APIClient;
