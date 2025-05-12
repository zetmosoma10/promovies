export type Recommendation = {
  results: {
    id: number;
    name: string;
    title: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
    first_air_date: string;
  }[];
};
