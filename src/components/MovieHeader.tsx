import useGenreMovies from "../hooks/useGenreMovies";
import useMovieStore from "../store";
import type { Category } from "../types/Category";

type Props = {
  children: string;
  category: Category;
};

const MovieHeader = ({ children, category }: Props) => {
  const genreId = useMovieStore((s) => s.movieQuery[category].with_genres);
  const { data } = useGenreMovies();

  const genreName = data?.find((g) => g.id === genreId);

  return (
    <h1 className="figtree text-2xl sm:text-3xl md:text-4 text-gray-50 font-semibold">
      {genreName?.name} {children}
    </h1>
  );
};

export default MovieHeader;
