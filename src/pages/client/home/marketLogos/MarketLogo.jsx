import React from 'react'
import "./MarketLogos.scss"
import { marketLogoList } from "../../../../MyDatas/MyDatas"
import { useTranslation } from 'react-i18next'
const MarketLogo = () => {
  const {t} = useTranslation()
  return (
    <section>
            <div className="homePointOfSale">
                  <div className="container-lg">
                      <h3 className="homePointOfSaleTitle">{t("PointSales")}</h3>
                    <div className="row">
                  
                          {marketLogoList.map((logo, index) => (
                            <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-3 g-2">
                              <div className="marketLogo">
                                <img  src={logo} />
                              </div>
                              
                            </div>
                              
                          ))}
                      
                    </div>
                  </div>
              </div>
    </section>
  )
}

export default MarketLogo