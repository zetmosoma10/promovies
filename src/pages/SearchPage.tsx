import { Link, useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import useSearch from "../hooks/useSearch";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import generateSlug from "../services/generateSlug";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";

const SearchPage = () => {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("query");
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useSearch(query);

  const { inView, ref } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) throw error;

  return (
    <section className="font-semibold max-container text-gray-50">
      <h1 className="mt-10 mb-8 text-3xl font-semibold">
        {data?.pages.length === 0
          ? `No results for "${query}"`
          : `Search results for "${query}"`}
      </h1>
      <div className="relative grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results
                  .filter((m) => m.media_type !== "person")
                  .map((movie) => (
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

export default SearchPage;
