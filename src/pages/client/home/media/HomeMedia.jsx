import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { homeVideoSliderSection } from "../../../../MyDatas/MyDatas";
import Fancybox from "../../../../components/fancybox/Fancybox";
import VideoPlayIcon from "../../../../assets/icons/PlayIcon";
import "./HomeMedia.scss";
const HomeMedia = () => {
    // const [videoNumber , setVideoNumber] = useState()
    // useEffect(() => {
        
    //     const videoCount = homeVideoSliderSection.length;
    //     setVideoNumber(Number(videoCount));
    //     console.log("Video Sayısı:", videoNumber); 
    //   }, []);
    
  return (
    <section>
      <div className="homeVideoSlider">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-Button-prev",
            nextEl: ".swiper-Button-next",
          }}
          modules={[EffectFade, Navigation, Autoplay]}
          className="videoSlider"
        >
        {homeVideoSliderSection.map((video) => {

  return (
    <SwiperSlide key={video.id}>
      <Fancybox>
        <a
          href={video?.videoUrl}
          data-fancybox="gallery"
          style={{ backgroundImage: `url(${video.bgImg})` }}
          className="videoWrapper"
        >
          {/* <VideoPlayIcon /> */}
        </a>
      </Fancybox>
    </SwiperSlide>
  );
})}

          {homeVideoSliderSection.length>1 ? <>
          <div className="swiper-Button-next"></div>
            <div className="swiper-Button-prev"></div></>  :<></> }
        </Swiper>
      </div>
    </section>
  );
};

export default HomeMedia;
