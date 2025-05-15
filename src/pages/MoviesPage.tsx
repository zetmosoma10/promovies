import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CgSpinner } from "react-icons/cg";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import useMovies from "../hooks/useMovies";
import GenreList from "../components/GenreList";
import useGenreMovies from "../hooks/useGenreMovies";
import MovieHeader from "../components/MovieHeader";
import generateSlug from "../services/generateSlug";

const MoviesPage = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useMovies("movie");
  const { data: genres } = useGenreMovies();
  const { inView, ref } = useInView({ threshold: 0, rootMargin: "250px" });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between mt-10 mb-7">
        <MovieHeader category="movie">Movies</MovieHeader>
        <GenreList category="movie" genres={genres} />
      </div>
      <div className="relative grid-container">
        {isLoading
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page?.results.map((movie) => (
                  <Link to={`${generateSlug(movie)}`} key={movie.id}>
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

export default MoviesPage;
