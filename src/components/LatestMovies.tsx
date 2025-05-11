import { Link } from "react-router-dom";
import useLatestMovies from "../hooks/useLatestMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const LatestMovies = () => {
  const { data, isLoading, isError, error } = useLatestMovies();

  if (isError) throw error;

  return (
    <section className="max-container">
      <h2 className="font-medium text-4xl text-gray-50">Latest Movies</h2>
      <div className="relative grid-container mt-5">
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

export default LatestMovies;
