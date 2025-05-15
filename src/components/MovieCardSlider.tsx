import { Link } from "react-router-dom";
import { POSTER_URL } from "../constance";
import type { Movie } from "../types/Movie";
import Ratings from "./Ratings";
import generateSlug from "../services/generateSlug";

type Props = {
  movie: Movie;
};

const MovieCardSlider = ({ movie }: Props) => {
  return (
    <div className="relative w-full h-[170px] md:h-[220px] rounded-lg overflow-hidden shadow-lg group">
      <Link to={`tv-shows/${generateSlug(movie)}`}>
        <div className="z-10">
          <Ratings rating={movie.vote_average} />
        </div>

        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
          src={`${POSTER_URL}original${movie.backdrop_path}`}
        />

        <div
          // to={`tv-shows/${generateSlug(movie)}`}
          className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-mintGreen to-transparent  text-white p-4 opacity-100"
        >
          <h3 className="text-base md:text-lg font-semibold z-10 relative leading-5">
            {movie.title || movie.name}
          </h3>
          <p className="text-sm z-10 relative">
            Year: {movie.release_date || movie.first_air_date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCardSlider;
