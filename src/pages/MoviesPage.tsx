import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useMovies from "../hooks/useMovies";
import GenreList from "../components/GenreList";
import useGenreMovies from "../hooks/useGenreMovies";
import MovieHeader from "../components/MovieHeader";
import Pagination from "../components/Pagination";

const MoviesPage = () => {
  const { data, isLoading, isError, error } = useMovies();
  const { data: genres } = useGenreMovies();

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between my-10">
        <MovieHeader>Movies</MovieHeader>
        <GenreList genres={genres} />
      </div>
      <div className="relative grid-container">
        {isLoading
          ? [...Array(10)].map((s) => <MovieCardSkeleton key={s} />)
          : data?.results.map((movie) => (
              <Link to={`${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </section>
  );
};

export default MoviesPage;
