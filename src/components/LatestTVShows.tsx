import { Link } from "react-router-dom";
import useLatestTVShows from "../hooks/useLatestTVShows";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import generateSlug from "../services/generateSlug";

const LatestTVShows = () => {
  const { data, isLoading, isError, error } = useLatestTVShows();

  if (isError) throw error;

  return (
    <section className="max-container mt-14">
      <h2 className="font-medium text-4xl text-gray-50 ">Latest TV Series</h2>
      <div className="relative grid-container mt-5">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.results.map((movie) => (
              <Link to={`tv-shows/${generateSlug(movie)}`} key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default LatestTVShows;
