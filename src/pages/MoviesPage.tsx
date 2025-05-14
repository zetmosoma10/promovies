import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
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
  const { inView, ref } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isError) throw error;

  return (
    <section className="max-container">
      <div className="flex items-center justify-between my-10">
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
      <div ref={ref}>
        {isFetchingNextPage && (
          <p className="text-gray-50 mt-5 text-center">Loading...</p>
        )}
      </div>
    </section>
  );
};

export default MoviesPage;
