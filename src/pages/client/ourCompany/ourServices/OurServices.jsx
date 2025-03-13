import React from 'react'
import "./OurService.scss"
import { ServiceImages } from '../../../../MyDatas/MyDatas';
import { useTranslation } from 'react-i18next';
const OurServices = () => {
    const {t} = useTranslation()
  return (
    <section id='ourServices'>
        <div className="container py-5">
            <div className="row">
                <div className="sectionHeader">
                    <h2>{t("ourServices")}</h2>
                </div>
            </div>
            <div className="row">
            {ServiceImages.map((image,index)=>{
                let className = "col-8"
                if (index % 4 === 1 || index % 4 ===2) {
                    className = "col-4"
                } 
                // if (index === ServiceImages.length - 1) {
                //     className = "col-12"
                // } else if (index % 4 === 1 || index % 4 ===2 ) {
                //     className = "col-8"
                // }
                return (
                    <div key={image.id} className={`imageCart g-3 ${className}`}>
                        <img src={image.src} alt={image.alt}  />
                    </div>
                )
            })}

            </div>
            <div className="row py-5 justify-content-center">
                <div className="sectionText">
                    <p>{t("ourCompanyServicestext")}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices