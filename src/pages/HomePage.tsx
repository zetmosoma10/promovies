import Banner from "../components/Banner";
import LatestMovies from "../components/LatestMovies";
import TopRatedTVShows from "../components/TopRatedTVShows";
import TrendingSlider from "../components/TrendingSlider";

const HomePage = () => {
  return (
    <>
      <Banner />
      <TrendingSlider />
      <LatestMovies />
      <TopRatedTVShows />
    </>
  );
};

export default HomePage;
