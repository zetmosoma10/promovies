import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import useTrending from "../hooks/useTrending";
import MovieHeader from "../components/MovieHeader";
import generateSlug from "../services/generateSlug";

const TrendingPage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    error,
    isLoading,
  } = useTrending();

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="my-10">
        <MovieHeader category="trending">Trending</MovieHeader>
      </div>
      <div className="mt-5 grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((movie) => (
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
              </React.Fragment>
            ))}
      </div>
      <div ref={ref}>
        {isFetchingNextPage && (
          <p className="text-gray-50 mt-5 text-center">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default TrendingPage;
