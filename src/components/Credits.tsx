import { POSTER_URL } from "../constance";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Movie } from "../types/Movie";
import noImgPlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

type Props = {
  movie?: Movie;
};

const Credits = ({ movie }: Props) => {
  return (
    <div className="mt-10">
      <h4 className="max-container mb-5 text-lg sm:text-xl md:text-2xl font-semibold">
        Cast of {movie?.name || movie?.title}
      </h4>
      <Swiper
        loop
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView="auto"
      >
        {movie?.credits?.cast.map((cast) => (
          <SwiperSlide
            className="!w-auto flex flex-col items-center justify-center"
            key={cast.id}
          >
            <img
              className="object-cover rounded-full w-28 h-28 sm:w-32 sm:h-32"
              src={
                cast.profile_path
                  ? `${POSTER_URL}original/${cast.profile_path}`
                  : noImgPlaceholder
              }
            />
            <p className="mt-2 text-xs font-light text-center text-gray-50">
              {cast.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Credits;
