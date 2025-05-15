import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useTrendingTVShows from "../hooks/useTrendingTVshows";
import MovieCardSlider from "./MovieCardSlider";
import MovieCardSliderSkeleton from "../loadingSkeletons/MovieCardSliderSkeleton";

const TrendingSlider = () => {
  const { data, isLoading, isError, error } = useTrendingTVShows();

  if (isError) throw error;

  const tvSeries = data?.results.filter((movie) => movie.vote_average >= 6.5);

  return (
    <section className="my-10">
      <h2 className="mb-4 text-xl md:text-2xl text-center text-gray-50">
        Trending TV Series
      </h2>
      {isLoading ? (
        <MovieCardSliderSkeleton />
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={14}
          slidesPerView="auto"
        >
          {tvSeries?.map((movie) => (
            <SwiperSlide className="!w-auto" key={movie.id}>
              <MovieCardSlider movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default TrendingSlider;
