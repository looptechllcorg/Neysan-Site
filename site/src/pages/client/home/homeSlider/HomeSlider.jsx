import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import {  Navigation } from 'swiper/modules';
import { homeSliderData } from '../../../../MyDatas/MyDatas';
import sliderPattern from "../../../../assets/image/SliderPattern.png"
import "./HomeSlider.scss"
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../../assets/icons/ArrowRight';
const HomeSlider = () => {


  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.realIndex);
    };


  return (
    <section id='homeSlider'>
        <div className='sliderBox' style={{ width: '100vw', height: '100vh' }}>
      <Swiper
        spaceBetween={150}
        slidesPerView={2.2}
        centeredSlides={true}
        loop={true}  
        // breakpoints={{
        //   769: {
        //     slidesPerView: 1,
        //     spaceBetween: 20,
        //   },

        //   1024: {
        //     slidesPerView: 2.2,
        //     spaceBetween: 150,
        //   },
        // }}
        navigation={{
            prevEl: '.swiper-button-prev', 
            nextEl: '.swiper-button-next', 
          }} 
        pagination={{ clickable: true }}
        modules={[Navigation]}
        onSlideChange={handleSlideChange} 
      
      >
        {homeSliderData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            style={{
              opacity: activeIndex === index ? 1 : 0.5 
            }}
          >
            <div className='slide_card' >
              <img className='slideImage'
                src={item.img}
                alt={item.title}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <img className='pattern' src={sliderPattern} alt="Pattern" />
              <button>
                Detailed
              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev">
        <ArrowLeft/>
        </div>
        <div className="swiper-button-next" >
        <ArrowRight/>
        </div>
      </Swiper>
    </div>
    </section>
    
  );
};

export default HomeSlider;
