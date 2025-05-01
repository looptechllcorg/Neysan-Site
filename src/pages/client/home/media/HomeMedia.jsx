import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
import { homeVideoSliderSection } from '../../../../MyDatas/MyDatas';
import Fancybox from '../../../../components/fancybox/Fancybox';
import VideoPlayIcon from '../../../../assets/icons/PlayIcon';
import './HomeMedia.scss';
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
			{homeVideoSliderSection.map((video) => {
						return (
							<video className='mediaVideo' muted loop autoPlay src={video.videoUrl}></video>
						);
					})}
			</div>
		</section>
	);
};

export default HomeMedia;
