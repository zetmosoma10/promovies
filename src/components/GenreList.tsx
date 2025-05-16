import useMovieStore from "../store";
import type { Category } from "../types/Category";
import type { Genre } from "../types/Genre";

type Props = {
  genres?: Genre[];
  category: Category;
};

const GenreList = ({ genres, category }: Props) => {
  const genreId = useMovieStore((s) => s.movieQuery[category].with_genres);
  const setGenre = useMovieStore((s) => s.setGenre);

  return (
    <div>
      <label className="block text-gray-50" htmlFor="genres">
        Genres
      </label>
      <select
        onChange={(event) =>
          setGenre(
            category,
            event.target.value === "" ? undefined : +event.target.value
          )
        }
        value={genreId ?? ""}
        id="genres"
        className="p-2 font-medium rounded-md cursor-pointer text-gray-50 focus:outline-none bg-surfaceColor focus:border focus:border-mintGreen "
      >
        <option value="">--Choose--</option>
        {genres?.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreList;
