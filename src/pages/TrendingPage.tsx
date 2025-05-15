import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CgSpinner } from "react-icons/cg";
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

  const { ref, inView } = useInView({ threshold: 0, rootMargin: "250px" });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="mt-10 mb-7">
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
      <div className="py-4 flex justify-center" ref={ref}>
        {isFetchingNextPage && (
          <CgSpinner className="animate-spin text-3xl text-mintGreen " />
        )}
      </div>
    </section>
  );
};

export default TrendingPage;
