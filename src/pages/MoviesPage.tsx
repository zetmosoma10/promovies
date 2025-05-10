import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";

const MoviesPage = () => {
  const { data, isError, error } = useMovies();

  if (isError) throw error;

  return (
    <section>
      <h2 className="figtree text-gray-50 font-medium text-3xl  mt-6">
        Movies
      </h2>
      <div className="relative grid-container mt-5">
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesPage;
