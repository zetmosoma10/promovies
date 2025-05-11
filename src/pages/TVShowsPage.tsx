import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTVShows from "../hooks/useTVShows";
import GenreList from "../components/GenreList";
import useGenreTVShows from "../hooks/useGenreTVShows";

const TVShowsPage = () => {
  const { data, isLoading, isError, error } = useTVShows();
  const {data: genres, isError: isGenreError} = useGenreTVShows()

  if (isError) throw error;
  if(isGenreError) return null

  return (
    <section className="max-container">
      <div className="flex items-center justify-between">
        <h2 className="figtree text-gray-50 font-medium text-3xl  mt-6">
          TV Shows
        </h2>
        <GenreList genres={genres} />
      </div>
      <div className="grid-container mt-5">
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

export default TVShowsPage;
