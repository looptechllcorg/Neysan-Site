import React from 'react'
import "./Banner.scss"
import bannerBg from "../../../../assets/image/BannerImage.png"
import bannerImageLeft from "../../../../assets/image/BannerPatternRectangle106.png"
import bannerImageRight from "../../../../assets/image/BannerPatternRectangle107.png"
const Banner = () => {
  return (
    <section id='banner'>
      <div className="bannerAnimationBgLeft">
        <img src={bannerImageLeft} alt="" />
      </div>
      <div className="bannerAnimationBgRight">
        <img src={bannerImageRight} alt="" />
      </div>
      <div className="banner_text_box">
        <span>.. Increased HEALTH With NEYSAN ..</span>
        <h1>
        NEYSAN - ƏN ŞİRİN ANLAR ÜÇÜN!
        </h1>
      </div>
      <div className="banner_bg">
          <img src={bannerBg} alt="" />
      </div>
    </section>
  )
}

export default Banner