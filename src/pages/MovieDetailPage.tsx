import { useParams } from "react-router-dom";
import MovieCardDetail from "../components/MovieCardDetail";
import useMovie from "../hooks/useMovie";

const MovieDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);
  const { data: movie } = useMovie(id);

  return (
    <section className="max-container text-gray-50 pb-10">
      {movie ? (
        <MovieCardDetail movie={movie} />
      ) : (
        <p className="text-4xl">Loading...</p>
      )}
    </section>
  );
};

export default MovieDetailPage;
