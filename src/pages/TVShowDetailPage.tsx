import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useTVShow from "../hooks/useTVShow";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie } = useTVShow(id);

  return (
    <section className="max-container text-gray-50">
      {movie ? (
        <MovieCardDetail movie={movie} />
      ) : (
        <p className="text-4xl">Loading...</p>
      )}
    </section>
  );
};

export default TVShowDetailPage;
