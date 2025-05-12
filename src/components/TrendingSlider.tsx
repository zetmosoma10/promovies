import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { POSTER_URL } from "../constance";
import useTrendingTVShows from "../hooks/useTrendingTVshows";
import Ratings from "./Ratings";

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
            <div className="relative w-full h-[220px] rounded-lg overflow-hidden shadow-lg group mr-1">
              <div className="z-10">
                <Ratings rating={movie.vote_average} />
              </div>

              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                src={`${POSTER_URL}original${movie.backdrop_path}`}
              />

              <Link
                to={`tvshows/${movie.id}`}
                className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-mintGreen to-transparent  text-white p-4 opacity-100"
              >
                <h3 className="text-lg font-semibold z-10 relative leading-5">
                  {movie.title || movie.name}
                </h3>
                <p className="text-sm z-10 relative">
                  Year: {movie.release_date || movie.first_air_date}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrendingSlider;
