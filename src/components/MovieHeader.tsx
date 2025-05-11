import useGenreMovies from "../hooks/useGenreMovies";
import useMovieStore from "../store";

const MovieHeader = () => {
  const genreId = useMovieStore((s) => s.movieQuery.with_genres);
  const { data } = useGenreMovies();

  const genreName = data?.find((g) => g.id === genreId);
  return (
    <h1 className="figtree text-gray-50 font-semibold text-5xl">
      {genreName?.name} Movies
    </h1>
  );
};

export default MovieHeader;
