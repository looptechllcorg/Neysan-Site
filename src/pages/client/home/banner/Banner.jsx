import React from 'react'
import "./Banner.scss"
import bannerBg from "../../../../assets/image/BannerImage.png"
import bannerImageLeft from "../../../../assets/image/BannerPatternRectangle106.png"
import bannerImageRight from "../../../../assets/image/BannerPatternRectangle107.png"
import bannerCloud from "../../../../assets/image/BannerCloud.png"
import Qaragat1 from "../../../../assets/pattern/qaragat1.png"
import Qaragat2 from "../../../../assets/pattern/armudPattern.png"
import { useTranslation } from 'react-i18next'
const Banner = () => {
      const {t} = useTranslation()
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
        <span>{t("sectionHeaderTextP")}</span>
        <h1>
        {t("homeBannerText")}
        </h1>
      </div>
    </section>
  )
}

export default Banner