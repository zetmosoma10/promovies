import type { Genre } from "./Genre";

export type Movie = {
  id: number;
  name?: string;
  title?: string;
  revenue: number;
  runtime: number;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  media_type?: string;
  overview: string;
  first_air_date: string;
  genres: Genre[];
  production_countries: { name: string }[];
};
