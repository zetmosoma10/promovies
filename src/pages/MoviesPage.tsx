import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useMovies from "../hooks/useMovies";

const MoviesPage = () => {
  const { data, isLoading, isError, error } = useMovies();

  if (isError) throw error;

  return (
    <section>
      <h2 className="figtree text-gray-50 font-medium text-3xl  mt-6">
        Movies
      </h2>
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

export default MoviesPage;
