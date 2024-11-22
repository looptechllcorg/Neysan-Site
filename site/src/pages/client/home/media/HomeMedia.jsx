import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay} from "swiper/modules";
import { homeVideoSliderSection } from '../../../../MyDatas/MyDatas';
import Fancybox from '../../../../components/fancybox/Fancybox';
import ArrowLeft from '../../../../assets/icons/ArrowLeft';
import ArrowRight from '../../../../assets/icons/ArrowRight';
import "./HomeMedia.scss"
const HomeMedia = () => {
  return (
   <section>
         <div className="homeVideoSlider">
                  <Swiper
                      spaceBetween={30}
                      effect={"fade"}
                      loop={true}
                      pagination={{
                          clickable: true,
                      }}
                      navigation={{
                          prevEl: ".swiper-button-prev",
                          nextEl: ".swiper-button-next",
                      }}
                      modules={[EffectFade, Navigation, Autoplay]}
                      className="videoSlider"
                  >
                      {homeVideoSliderSection.map((video) => (
                          <SwiperSlide key={video.id}>
                              <Fancybox>
                                  <a href={video?.videoUrl} data-fancybox="gallery" style={{ backgroundImage: `url(${video.bgImg})` }} className="videoWrapper">
                                      {/* <VideoPlayIcon /> */} Play
                                  </a>
                              </Fancybox>
                          </SwiperSlide>
                      ))}
                      <div className="swiper-button-next">
                           {/* <ArrowRight /> */}
                      </div>
                      <div className="swiper-button-prev">
                         {/* <ArrowLeft /> */}
                      </div>
                  </Swiper>
              </div>
   </section>
  )
}

export default HomeMedia