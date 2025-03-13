import React from 'react'
import "./BestProduct.scss"
import { useTranslation } from 'react-i18next'

const BestProduct = ({text,data}) => {
    const {t} = useTranslation()
  return (
    <section id='bestProduct'> 
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-sm-12">
                    <h3 className="pageTitle">{t("companyPageTitle")}</h3>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <p className='pageText'>{t(text)}</p>
                </div>
            </div>
            <div className="row">
                {data.map((item , index)=>(
                     <div key={index} className="col-4">
                     <div style={{backgroundImage:`url(${item.imgSrc})`}} className="pageCard">
                         <h4>{item.number}</h4>
                         <p>{t(item.text)}</p>
                     </div>
                 </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default BestProduct