import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { POSTER_URL } from "../constance";
import useTrendingMovies from "../hooks/useTrendingMovies";
import generateSlug from "../services/generateSlug";
import { CgSpinner } from "react-icons/cg";

const Banner = () => {
  const { data, isLoading, isError, error } = useTrendingMovies();

  if (isError) throw error;
  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <CgSpinner className="animate-spin text-5xl text-mintGreen " />
      </div>
    );

  const filteredMovies = data?.results.filter(
    (movie) => movie.vote_average >= 6.5
  );

  return (
    <section className="w-full h-screen bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        slidesPerView={1}
        className="w-full h-full"
      >
        {filteredMovies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="relative px-8 w-full h-screen bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url(${POSTER_URL}original${movie.backdrop_path})`,
              }}
            >
              {/* Overlay for better readability */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" /> */}

              {/* Text Content */}
              {/* <Link
                to={`movies/${generateSlug(movie)}`}
                className="relative z-20 w-full p-6 md:p-10 text-white max-w-screen-xl mx-auto"
              >
                {/* Ratings & Year *
                <div className="flex items-center text-lg mb-2 gap-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                  </div>
                  <span className="opacity-80">
                    {new Date(
                      movie.release_date || movie.first_air_date
                    ).getFullYear()}
                  </span>
                </div>

                {/* Title *
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  {movie.title || movie.name}
                </h1>

                {/* Overview *
                <p className="text-sm sm:text-base md:text-lg max-w-3xl opacity-90">
                  {movie.overview}
                </p>
              </Link> */}

              <Link
                to={`movies/${generateSlug(movie)}`}
                className="w-full mb-16 p-4 border rounded-lg border-mintGreen text-gray-50 bg-surfaceColor/40 backdrop-blur-sm"
              >
                {/* Rates & Year */}
                <div className="flex items-center text-lg mb-2 gap-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{movie.vote_average.toFixed(1)}</span>
                  </div>
                  <span className="opacity-80">
                    {new Date(
                      movie.release_date || movie.first_air_date
                    ).getFullYear()}
                  </span>
                </div>

                {/* Movie Title */}
                <h1 className="figtree text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
                  {movie.title || movie.name}
                </h1>

                {/* Overview */}
                <p className="text-sm sm:text-base md:text-lg  opacity-90">
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
