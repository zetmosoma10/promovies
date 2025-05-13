import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useTVShow from "../hooks/useTVShow";
import Recommendation from "../components/Recommendation";
import TrailerVideo from "../components/TrailerVideo";
import Credits from "../components/Credits";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie } = useTVShow(id);

  return (
    <section className="max-container text-gray-50">
      <TrailerVideo movie={movie} />
      {movie ? (
        <MovieCardDetail movie={movie} />
      ) : (
        <p className="text-4xl">Loading...</p>
      )}
      {movie?.credits.cast.length !== 0 && <Credits movie={movie} />}
      {movie?.recommendations.total_results !== 0 && (
        <Recommendation movie={movie} />
      )}
    </section>
  );
};

export default TVShowDetailPage;
