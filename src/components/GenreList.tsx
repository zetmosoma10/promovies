import useMovieStore from "../store";
import type { Genre } from "../types/Genre";

type Props = {
  genres?: Genre[];
};

const GenreList = ({ genres }: Props) => {
  const genreId = useMovieStore((s) => s.movieQuery.with_genres);
  const setGenre = useMovieStore((s) => s.setGenre);

  return (
    <select
      onChange={(event) => setGenre(+event.target.value)}
      value={genreId}
      className="text-gray-50 focus:outline-none p-2 rounded-md font-medium bg-surfaceColor cursor-pointer focus:border focus:border-mintGreen "
    >
      <option value="">Genres</option>
      {genres?.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreList;
