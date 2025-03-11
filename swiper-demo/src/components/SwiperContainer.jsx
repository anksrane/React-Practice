import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperSlideComponent from './SwiperSlideComponent';

function SwiperContainer() {
    const slidesData = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6'];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation

        loop={true}
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
        {slidesData.map((item, index) => (
          <SwiperSlide key={index}>
            <SwiperSlideComponent content={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SwiperContainer
