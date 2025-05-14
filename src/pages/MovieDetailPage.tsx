import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useMovie from "../hooks/useMovie";
import Recommendation from "../components/Recommendation";
import TrailerVideo from "../components/TrailerVideo";
import Credits from "../components/Credits";
import MovieCardDetailSkeleton from "../loadingSkeletons/MovieCardDetailSkeleton";

const MovieDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie, isLoading, isError, error } = useMovie(id);

  if (isError) throw error;

  return (
    <section className="pb-10 max-container text-gray-50">
      <TrailerVideo movie={movie} />
      {movie ? <MovieCardDetail movie={movie} /> : <MovieCardDetailSkeleton />}
      {isLoading
        ? null
        : movie?.credits.cast.length !== 0 && <Credits movie={movie} />}
      {isLoading
        ? null
        : movie?.recommendations.total_results !== 0 && (
            <Recommendation movie={movie} />
          )}
    </section>
  );
};

export default MovieDetailPage;
