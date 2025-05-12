import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useTrendingTVShows from "../hooks/useTrendingTVshows";
import MovieCardSlider from "./MovieCardSlider";

const TrendingSlider = () => {
  const { data, isError, error } = useTrendingTVShows();

  if (isError) throw error;

  const tvSeries = data?.results.filter((movie) => movie.vote_average >= 6.5);

  return (
    <section className="my-10">
      <h2 className="text-gray-50 text-center text-2xl mb-4">
        Trending TV Series
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={14}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          920: { slidesPerView: 3 },
        }}
      >
        {tvSeries?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardSlider movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingSlider;
