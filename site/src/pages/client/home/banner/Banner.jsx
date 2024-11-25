import React from 'react'
import "./Banner.scss"
import bannerBg from "../../../../assets/image/BannerImage.png"
import bannerImageLeft from "../../../../assets/image/BannerPatternRectangle106.png"
import bannerImageRight from "../../../../assets/image/BannerPatternRectangle107.png"
import bannerCloud from "../../../../assets/image/BannerCloud.png"
import Qaragat1 from "../../../../assets/pattern/qaragat1.png"
import Qaragat2 from "../../../../assets/pattern/qaragat2.png"
const Banner = () => {
  return (
    <section id='banner'>
      <img className='qaragatPattern1' src={Qaragat1} alt="" />
      <img className='qaragatPattern2' src={Qaragat2} alt="" />
      <div className="bannerAnimationBgLeft">
        <img src={bannerImageLeft} alt="" />
      </div>
      <div className="bannerAnimationBgRight">
        <img src={bannerImageRight} alt="" />
      </div>
      <div className="banner_text_box">
        <span>.. Increased HEALTH With Qudret Salam ..</span>
        <h1>
        NEYSAN - ƏN ŞİRİN ANLAR ÜÇÜN!
        </h1>
      </div>
      {/* <div className="banner_bg">
          <img src={bannerBg} alt="" />
      </div>
      <div className="bannerCloud">
        <img src={bannerCloud} alt="" />
      </div> */}
    </section>
  )
}

export default Banner