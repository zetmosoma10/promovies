import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTVShows from "../hooks/useTVShows";
import GenreList from "../components/GenreList";
import useGenreTVShows from "../hooks/useGenreTVShows";
import MovieHeader from "../components/MovieHeader";

const TVShowsPage = () => {
  const { data, isLoading, isError, error } = useTVShows("tv");
  const { data: genres, isError: isGenreError } = useGenreTVShows();

  if (isError) throw error;
  if (isGenreError) return null;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between my-10">
        <MovieHeader category="tv">TV Shows</MovieHeader>
        <GenreList category="tv" genres={genres} />
      </div>
      <div className="grid-container">
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
