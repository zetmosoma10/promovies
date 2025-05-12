import type { Credit } from "./Credit";
import type { Genre } from "./Genre";
import type { Recommendation } from "./Recommendation";
import type { Video } from "./Video";

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
  number_of_seasons: number;
  genres: Genre[];
  credits: Credit;
  videos: Video;
  recommendations: Recommendation;
  created_by: { name: string }[];
  production_countries: { name: string }[];
};
