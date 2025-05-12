import { useParams } from "react-router-dom";
import useTVShow from "../hooks/useTVShow";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  const movieId = slug?.split("-").pop();
  const id = Number(movieId);

  const { data } = useTVShow(id);
  console.log(data);
  return <section className="max-container">TVShowDetailPage {slug}</section>;
};

export default TVShowDetailPage;
