import { POSTER_URL, IMG_SIZE } from "../constance";
import type { Movie } from "../types/Movie";
import Ratings from "./Ratings";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="relative h-[340px] rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105 will-change-transform">
      <div className="z-10">
        <Ratings rating={movie.vote_average} />
      </div>
      <img
        className="w-full h-full object-cover"
        src={`${POSTER_URL}${IMG_SIZE}${movie.poster_path}`}
      />

      {/* Hover Overlay with Fade Top Shadow */}
      <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-mintGreen to-transparent  text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Movie Info */}
        <h3 className="text-lg font-semibold z-10 relative leading-5">
          {movie.title || movie.name}
        </h3>
        <p className="text-sm z-10 relative mt-1">
          Year: {movie.release_date || movie.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
