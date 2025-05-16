import { POSTER_URL } from "../constance";
import type { Movie } from "../types/Movie";
import Ratings from "./Ratings";
import noImgPlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const imageSize = "w500";
  const imgPath = movie.poster_path
    ? `${POSTER_URL}${imageSize}${movie.poster_path}`
    : noImgPlaceholder;

  return (
    <div className="relative h-[270px] md:h-[340px] rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105 will-change-transform">
      <div className="z-10">
        <Ratings rating={movie.vote_average} />
      </div>
      {/* <PosterImage path={movie.p} /> */}
      <img className="object-cover w-full h-full" src={imgPath} />

      {/* Hover Overlay with Fade Top Shadow */}
      <div className="absolute bottom-0 left-0 w-full p-4 pt-10 text-white transition-opacity duration-300 opacity-100 md:opacity-0 bg-gradient-to-t from-mintGreen to-transparent md:group-hover:opacity-100">
        {/* Movie Info */}
        <h3 className="relative z-10 text-base font-semibold md:text-lg">
          {movie.title || movie.name}
        </h3>
        <p className="relative z-10 text-sm">
          Year: {movie.release_date || movie.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
