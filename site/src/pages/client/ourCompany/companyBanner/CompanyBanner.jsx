import React from 'react'
import "./CompanyBanner.scss"
import BannerBg from "../../../../assets/image/CompanyBanner.png"
const CompanyBanner = () => {
  return (
    <section id='companyBanner'>
         <div className="sectionHeader">
                    <p>.. Increased HEALTH With NEYSAN ..</p>
                    <h2>oUR COMPANY</h2>
            
                  </div>
        <div className="container" style={{backgroundImage:`url(${BannerBg})`}}>
                <h1>Visualize Your Journey to Health</h1>
        </div>
    </section>
  )
}

export default CompanyBanner