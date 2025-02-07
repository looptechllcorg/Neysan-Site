import React from 'react'
import "./CompanyBanner.scss"
import BannerBg from "../../../../assets/image/CompanyBanner.png"
import { useTranslation } from 'react-i18next'
import SectionHeader from '../../../../components/SectionsHeader/SectionHeader'
const CompanyBanner = () => {
    const {t} = useTranslation()
  return (
    <section id='companyBanner'>
       <SectionHeader sectionHeaderh2="ourCompany"/>
        <div className="container" style={{backgroundImage:`url(${BannerBg})`}}>
                <h1>Visualize Your Journey to Health</h1>
        </div>
    </section>
  )
}

export default CompanyBanner