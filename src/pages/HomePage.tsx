import Banner from "../components/Banner";
import TopRatedMovies from "../components/TopRatedMovies";
import TopRatedTVShows from "../components/TopRatedTVShows";

const HomePage = () => {
  return (
    <>
      <Banner />;
      <TopRatedMovies />
      <TopRatedTVShows />
    </>
  );
};

export default HomePage;
