import axios from "axios";
import type { FetchResponse } from "../types/FetchResponse";

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

  getAll() {
    return api.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);
  }
}

export default APIClient;
