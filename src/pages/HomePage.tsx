import Banner from "../components/Banner";
import LatestMovies from "../components/LatestMovies";
import LatestTVShows from "../components/LatestTVShows";
import TrendingSlider from "../components/TrendingSlider";

const HomePage = () => {
  return (
    <>
      <Banner />
      <TrendingSlider />
      <LatestMovies />
      <LatestTVShows />
    </>
  );
};

export default HomePage;
