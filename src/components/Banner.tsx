import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { POSTER_URL } from "../constance";
import useTrending from "../hooks/useTrending";

const Banner = () => {
  const { data, isError, error } = useTrending();

  if (isError) throw error;

  const filteredMovies = data?.results.filter(
    (movie) => movie.media_type !== "tv" && movie.vote_average >= 7
  );

  return (
    <section>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {filteredMovies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="flex items-end w-full h-screen px-8 bg-center bg-cover pb-11"
              style={{
                backgroundImage: `url(${POSTER_URL}original${movie.backdrop_path})`,
              }}
            >
              <Link
                to={`movies/${movie.id}`}
                className="w-full p-4 border rounded-lg border-mintGreen text-gray-50 bg-surfaceColor/40 backdrop-blur-sm"
              >
                {/* Rates & Year */}
                <div className="flex items-center">
                  <span className="mr-1 text-lg">
                    <FaStar />
                  </span>
                  <span className="mr-5">{movie.vote_average.toFixed(1)}</span>
                  <span>
                    {new Date(movie.release_date).getFullYear() ||
                      new Date(movie.first_air_date).getFullYear()}
                  </span>
                </div>
                <h1 className="text-5xl font-medium figtree">
                  {movie.title || movie.name}
                </h1>
                <p className="max-w-[700px] mt-3 opacity-80">
                  {movie.overview}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
