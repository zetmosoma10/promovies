import { Link } from "react-router-dom";
import useTopTVShows from "../hooks/useTopTVShows";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const TopRatedTVShows = () => {
  const { data, isLoading, isError, error } = useTopTVShows();

  if (isError) throw error;
  return (
    <section className="max-container mt-14">
      <h2 className="font-medium text-4xl text-gray-50 ">Top Rated TV Shows</h2>
      <div className="relative grid-container mt-5">
        {isLoading
          ? [...Array(10)].map((s) => <MovieCardSkeleton key={s} />)
          : data?.results.map((movie) => (
              <Link to={`${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
    </section>
  );
};

export default TopRatedTVShows;
