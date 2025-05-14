import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CgSpinner } from "react-icons/cg";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../loadingSkeletons/MovieCardSkeleton";
import useTVShows from "../hooks/useTVShows";
import GenreList from "../components/GenreList";
import useGenreTVShows from "../hooks/useGenreTVShows";
import MovieHeader from "../components/MovieHeader";
import generateSlug from "../services/generateSlug";

const TVShowsPage = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useTVShows("tv");
  const { data: genres, isError: isGenreError } = useGenreTVShows();
  const { inView, ref } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
          ? [...Array(10)].map((_, index) => <MovieCardSkeleton key={index} />)
          : data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map((movie) => (
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

export default TVShowsPage;
