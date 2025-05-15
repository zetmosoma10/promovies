import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CgSpinner } from "react-icons/cg";
import MovieCard from "../components/MovieCard";
import useSearch from "../hooks/useSearch";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import generateSlug from "../services/generateSlug";

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
      <h1 className="figtree text-2xl sm:text-3xl md:text-4 text-gray-50 font-semibold mt-10 mb-7">
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
      <div className="py-4 flex justify-center" ref={ref}>
        {isFetchingNextPage && (
          <CgSpinner className="animate-spin text-3xl text-mintGreen " />
        )}
      </div>
    </section>
  );
};

export default SearchPage;
