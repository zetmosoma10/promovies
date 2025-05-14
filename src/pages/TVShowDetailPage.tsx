import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useTVShow from "../hooks/useTVShow";
import Recommendation from "../components/Recommendation";
import TrailerVideo from "../components/TrailerVideo";
import Credits from "../components/Credits";
import MovieCardDetailSkeleton from "../loadingSkeletons/MovieCardDetailSkeleton";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie, isLoading, isError, error } = useTVShow(id);

  if (isError) throw error;

  return (
    <section className="max-container text-gray-50">
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

export default TVShowDetailPage;
