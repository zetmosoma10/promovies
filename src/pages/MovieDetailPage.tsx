import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { id } = useParams();
  return (
    <div className="text-gray-50 text-5xl font-semibold mt-10">
      MovieDetailPage {id}
    </div>
  );
};

export default MovieDetailPage;
