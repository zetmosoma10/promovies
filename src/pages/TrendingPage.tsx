import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTrending from "../hooks/useTrending";

const TrendingPage = () => {
  const { data, isLoading, isError, error } = useTrending();

  if (isError) throw error;

  return (
    <section className="max-container">
      <h2 className="mt-6 text-3xl font-medium figtree text-gray-50">
        Trending
      </h2>
      <div className="mt-5 grid-container">
        {isLoading
          ? [...Array(10)].map((s) => <MovieCardSkeleton key={s} />)
          : data?.results.map((movie) => (
              <Link to={`${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default TrendingPage;
