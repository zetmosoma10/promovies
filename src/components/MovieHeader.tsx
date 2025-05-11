import useGenreMovies from "../hooks/useGenreMovies";
import useMovieStore from "../store";

type Props = {
  children: string;
};

const MovieHeader = ({ children }: Props) => {
  const genreId = useMovieStore((s) => s.movieQuery.with_genres);
  const { data } = useGenreMovies();

  const genreName = data?.find((g) => g.id === genreId);

  return (
    <h1 className="figtree text-gray-50 font-semibold text-5xl">
      {genreName?.name} {children}
    </h1>
  );
};

export default MovieHeader;
