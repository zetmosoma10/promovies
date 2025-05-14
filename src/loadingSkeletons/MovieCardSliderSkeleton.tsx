import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieCardSliderSkeleton = () => {
  return (
    <>
      <Swiper modules={[Navigation]} spaceBetween={14} slidesPerView="auto">
        {[...Array(6)].map((_, index) => (
          <SwiperSlide className="!w-auto " key={index}>
            <div className="w-[300px] h-[220px] animate-pulse rounded-lg shadow-lg bg-surfaceColor"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieCardSliderSkeleton;
