import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTrending from "../hooks/useTrending";

const TrendingPage = () => {
  const { data, isLoading, isError, error } = useTrending();

  if (isError) throw error;

  return (
    <section>
      <h2 className="figtree text-gray-50 font-medium text-3xl  mt-6">
        Trending
      </h2>
      <div className="grid-container mt-5">
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
