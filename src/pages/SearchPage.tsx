import { Link, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useSearch from "../hooks/useSearch";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import generateSlug from "../services/generateSlug";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  const { data, isLoading, isError, error } = useSearch(query);

  if (isError) throw error;

  const movies = data?.results.filter((m) => m.media_type !== "person");

  return (
    <section className="font-semibold max-container text-gray-50">
      <h1 className="mt-10 mb-8 text-3xl font-semibold">
        {data?.total_results === 0
          ? `No results for "${query}"`
          : `Search results for "${query}"`}
      </h1>
      <div className="relative grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : movies?.map((movie) => (
              <Link
                to={
                  movie.media_type === "movie"
                    ? `/movies/${generateSlug(movie)}`
                    : `/tv-shows/${generateSlug(movie)}`
                }
                key={movie.id}
              >
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default SearchPage;
