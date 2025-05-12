import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTrending from "../hooks/useTrending";
import MovieHeader from "../components/MovieHeader";

const TrendingPage = () => {
  const { data, isLoading, isError, error } = useTrending();

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="my-10">
        <MovieHeader>Trending</MovieHeader>
      </div>
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
