import {React,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ForecastSlideComponent from './ForecastSlideComponent';

function ForecastContainer({hourlyForecast}) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    
  return (
    <div className="relative w-full max-w-md mx-auto py-5">
      <button
        ref={prevRef}
        className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-[1px] rounded-md border-[1px] border-s-slate-50 transition-all bg-current disabled:bg-slate-400"
      >
        <i className="ri-arrow-left-s-line text-2xl text-white drop-shadow-md"></i>
      </button>
      <button
        ref={nextRef}
        className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-[1px] rounded-md border-[1px] border-s-slate-50 transition-all bg-current disabled:bg-slate-400"
      >
        <i className="ri-arrow-right-s-line text-2xl text-white drop-shadow-md"></i>
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}        
        spaceBetween={20}
        slidesPerView={3}
        // loop={hourlyForecast.length > 3}
        breakpoints={{
            300: {
              slidesPerView: 1, // Screens >= 640px
            },
            768: {
              slidesPerView: 2, // Screens >= 768px
            },
            1024: {
              slidesPerView: 3, // Screens >= 1024px
            },
            1280: {
              slidesPerView: 4, // Screens >= 1280px
            },
          }}        
      >
        {hourlyForecast.map((hourlyWeather, index) => (
          <SwiperSlide key={index}>
            <ForecastSlideComponent hourlyWeather={hourlyWeather} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ForecastContainer
