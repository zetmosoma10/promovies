import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useTVShow from "../hooks/useTVShow";
import Recommendation from "../components/Recommendation";
import TrailerVideo from "../components/TrailerVideo";
import Credits from "../components/Credits";
import MovieCardDetailSkeleton from "../loadingSkeletons/MovieCardDetailSkeleton";
import BackLink from "../components/BackLink";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie, isLoading, isError, error } = useTVShow(id);

  if (isError) throw error;

  return (
    <section className="text-gray-50">
      <div className="max-container">
        <BackLink />
        <TrailerVideo movie={movie} />
        {movie ? (
          <MovieCardDetail movie={movie} />
        ) : (
          <MovieCardDetailSkeleton />
        )}
      </div>
      {isLoading
        ? null
        : movie?.credits.cast.length !== 0 && <Credits movie={movie} />}
      <div className="max-container">
        {isLoading
          ? null
          : movie?.recommendations.total_results !== 0 && (
              <Recommendation movie={movie} />
            )}
      </div>
    </section>
  );
};

export default TVShowDetailPage;
