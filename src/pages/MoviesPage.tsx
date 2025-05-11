import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useMovies from "../hooks/useMovies";
import GenreList from "../components/GenreList";
import useGenreMovies from "../hooks/useGenreMovies";
import MovieHeader from "../components/MovieHeader";

const MoviesPage = () => {
  const { data, isLoading, isError, error } = useMovies();
  const { data: genres } = useGenreMovies();

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between mt-10">
        <MovieHeader />
        <GenreList genres={genres} />
      </div>
      <div className="relative grid-container mt-10 ">
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
