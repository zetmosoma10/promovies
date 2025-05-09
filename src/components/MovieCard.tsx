import { POSTER_URL, IMG_SIZE } from "../constance";
import type { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  let color = "";
  if (movie.vote_average < 7) {
    color = "bg-red-700";
  } else if (movie.vote_average < 9) {
    color = "bg-mintGreen";
  } else if (movie.vote_average >= 9) {
    color = "bg-AzureBlue";
  }
  return (
    <div className="text-gray-50 ">
      <div className="relative rounded-lg overflow-hidden ">
        <span className="absolute top-2 left-2 rounded-md text-gray-200 text-xs bg-surfaceColor py-1 px-2">
          {new Date(movie.release_date).getFullYear()}
        </span>
        <span
          className={`absolute right-2 top-2 text-gray-200 text-xs rounded-md py-1 px-2 ${color} `}
        >
          {movie.vote_average.toFixed(1)}
        </span>
        <img
          className="w-full"
          src={`${POSTER_URL}${IMG_SIZE}${movie.poster_path}`}
        />
      </div>
      <p className="text-lg font-semibold mt-1">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
