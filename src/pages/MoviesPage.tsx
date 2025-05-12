import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useMovies from "../hooks/useMovies";
import GenreList from "../components/GenreList";
import useGenreMovies from "../hooks/useGenreMovies";
import MovieHeader from "../components/MovieHeader";
import Pagination from "../components/Pagination";
import generateSlug from "../services/generateSlug";

const MoviesPage = () => {
  const { data, isLoading, isError, error } = useMovies("movie");
  const { data: genres } = useGenreMovies();

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between my-10">
        <MovieHeader category="movie">Movies</MovieHeader>
        <GenreList category="movie" genres={genres} />
      </div>
      <div className="relative grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.results.map((movie) => (
              <Link to={`${generateSlug(movie)}`} key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Pagination category="movie" />
      </div>
    </section>
  );
};

export default MoviesPage;
