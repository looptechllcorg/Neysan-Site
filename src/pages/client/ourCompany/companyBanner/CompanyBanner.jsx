import React from 'react'
import "./CompanyBanner.scss"
import BannerBg from "../../../../assets/image/picture6-min.jpg"
import { useTranslation } from 'react-i18next'
import SectionHeader from '../../../../components/SectionsHeader/SectionHeader'
const CompanyBanner = () => {
    const {t} = useTranslation()
  return (
    <section id='companyBanner'>
      <div className="container">
       <SectionHeader sectionHeaderh2="ourCompany"/>
      </div>
        <div className="container backgroundImage" style={{backgroundImage:`url(${BannerBg})`,overflow:"hidden"}}>
          <div className="overlay"></div>
          <div className="textSlide">
          <h1>{t("ourCompanyBanner")}</h1>
                {/* <h1>{t("ourCompanyBanner")}</h1> */}
                {/* <h1>{t("ourCompanyBanner")}</h1> */}
          </div>
        </div>
    </section>
  )
}

export default CompanyBanner