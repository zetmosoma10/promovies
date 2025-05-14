import { POSTER_URL } from "../constance";
import type { Movie } from "../types/Movie";
import { FaStar } from "react-icons/fa";
import noImagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

type Props = {
  movie: Movie;
};

const MovieCardDetail = ({ movie }: Props) => {
  const countries = movie?.production_countries.map((c) => c.name);
  const genres = movie?.genres.map((g) => g.name);
  const creators = movie?.created_by?.map((c) => c.name);

  const imgPath = movie?.poster_path
    ? `${POSTER_URL}original${movie.poster_path}`
    : noImagePlaceholder;

  return (
    <div className="flex flex-col gap-6 mt-10 overflow-hidden border shadow-md md:flex-row rounded-xl bg-surfaceColor border-surfaceColor">
      <div className="flex justify-center pt-4 md:pt-0 md:justify-start">
        <img
          className="max-h-[470px] max-w-[250px] md:rounded-lg object-cover"
          src={imgPath}
        />
      </div>

      <div className="flex-1 px-4 pb-3 space-y-4 md:px-0 md:pr-4 md:pt-4">
        <h3 className="text-3xl font-bold">{movie.name || movie.title}</h3>
        <p className="mt-2 opacity-70">{movie.overview}</p>

        <div className="mt-3 md:w-[60%]">
          <div className="grid grid-cols-2 space-x-1">
            <span className="font-medium">Country:</span>
            <span className="font-light">{countries?.join(", ")}</span>
          </div>
          <div className="grid grid-cols-2 space-x-1">
            <span className="font-medium">Genres:</span>
            <span className="font-light">{genres?.join(", ")}</span>
          </div>
          <div className="grid grid-cols-2 space-x-1">
            <span className="font-medium">Released:</span>
            <span className="font-light">
              {movie.first_air_date || movie.release_date}
            </span>
          </div>
          <div className="grid grid-cols-2 space-x-1">
            <span className="font-medium">Rating:</span>
            <span className="flex items-center space-x-1 font-light">
              <FaStar className="text-yellow-400 " />
              <span>{movie.vote_average.toFixed(1)}</span>
            </span>
          </div>
          {movie.runtime && (
            <div className="grid grid-cols-2 space-x-1">
              <span className="font-medium">Duration:</span>
              <span className="font-light">{movie.runtime}m</span>
            </div>
          )}
          {movie.created_by && (
            <div className="grid grid-cols-2 space-x-1">
              <span className="font-medium">Creators:</span>
              <span className="font-light">{creators?.join(", ")}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetail;
