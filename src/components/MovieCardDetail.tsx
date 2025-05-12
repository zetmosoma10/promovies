import { POSTER_URL } from "../constance";
import type { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

const MovieCardDetail = ({ movie }: Props) => {
  const countries = movie?.production_countries.map((c) => c.name);
  const genres = movie?.genres.map((g) => g.name);
  const creators = movie?.created_by?.map((c) => c.name);

  return (
    <div className="bg-surfaceColor mt-10 rounded-lg overflow-hidden shadow-md border border-surfaceColor">
      <img src={`${POSTER_URL}original${movie.backdrop_path}`} />
      <div className="mt-4 p-4">
        <h3 className="text-3xl font-bold">{movie.name || movie.title}</h3>
        <p className=" opacity-70 mt-2">{movie.overview}</p>

        <div className="mt-3 w-[75%] md:w-[50%]">
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
