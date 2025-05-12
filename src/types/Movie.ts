import type { Genre } from "./Genre";

export type Movie = {
  id: number;
  name: string;
  title: string;
  revenue: number;
  runtime: number;
  overview: string;
  media_type: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  backdrop_path: string;
  first_air_date: string;
  created_by: { name: string }[];
  genres: Genre[];
  production_countries: { name: string }[];
};
