export type FetchResponse<T> = {
  page: number;
  total_results: number;
  results: T[];
};
