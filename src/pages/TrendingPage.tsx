import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import useTrending from "../hooks/useTrending";
import MovieHeader from "../components/MovieHeader";
import Pagination from "../components/Pagination";
import generateSlug from "../services/generateSlug";

const TrendingPage = () => {
  const { data, isLoading, isError, error } = useTrending("trending");

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="my-10">
        <MovieHeader category="trending">Trending</MovieHeader>
      </div>
      <div className="mt-5 grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.results.map((movie) => (
              <Link to={`${generateSlug(movie)}`} key={movie.id}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <Pagination category="trending" />
      </div>
    </section>
  );
};

export default TrendingPage;
