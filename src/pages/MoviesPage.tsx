import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

const MoviesPage = () => {
  const { data, isError, error } = useMovies();

  if (isError) throw error;

  return (
    <section>
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </section>
  );
};

export default MoviesPage;
