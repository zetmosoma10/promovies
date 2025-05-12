import { useParams } from "react-router-dom";

const TVShowDetailPage = () => {
  const { slug } = useParams();
  return <section className="max-container">TVShowDetailPage {slug}</section>;
};

export default TVShowDetailPage;
