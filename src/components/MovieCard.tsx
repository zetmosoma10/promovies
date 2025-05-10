import { POSTER_URL, IMG_SIZE } from "../constance";
import type { Movie } from "../types/Movie";
import Ratings from "./Ratings";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="text-gray-50 ">
      <div className="relative rounded-lg overflow-hidden ">
        <span className="absolute top-2 left-2 rounded-md text-gray-200 text-xs bg-surfaceColor py-1 px-2">
          {new Date(movie.release_date).getFullYear()}
        </span>
        <Ratings rating={movie.vote_average} />
        <img
          className="w-full"
          src={`${POSTER_URL}${IMG_SIZE}${movie.poster_path}`}
        />
      </div>
      <p className="text-lg font-semibold mt-1">{movie.title || movie.name}</p>
    </div>
  );
};

export default MovieCard;
