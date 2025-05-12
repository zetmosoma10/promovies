import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { slug } = useParams();
  return (
    <div className="max-container text-gray-50 text-5xl font-semibold mt-10">
      MovieDetailPage {slug}
    </div>
  );
};

export default MovieDetailPage;
