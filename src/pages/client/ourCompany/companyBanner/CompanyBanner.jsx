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
                <h1>Visualize Your Journey to Health</h1>
        </div>
    </section>
  )
}

export default CompanyBanner