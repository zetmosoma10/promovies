import { Link } from "react-router-dom";
import generateSlug from "../services/generateSlug";
import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

type Props = {
  movie?: Movie;
};

const Recommendation = ({ movie }: Props) => {
  const recommendationMovies = movie?.recommendations.results.slice(0, 10);
  return (
    <section className="mt-10 text-gray-50">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
        Recommendation
      </h3>
      <div className="relative mt-5 grid-container">
        {recommendationMovies?.map((movie) => (
          <Link
            to={
              movie.media_type === "movie"
                ? `/movies/${generateSlug(movie)}`
                : `/tv-shows/${generateSlug(movie)}`
            }
            key={movie.id}
          >
            <MovieCard key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Recommendation;
