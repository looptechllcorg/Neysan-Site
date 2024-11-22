import React from 'react'
import { marketLogoList } from "../../../../MyDatas/MyDatas"
const MarketLogo = () => {
  return (
    <section>
            <div className="homePointOfSale">
                  <div className="container">
                      <h3 className="homehomePointOfSaleTitle">POİNT OF SALE</h3>
                    <div className="row">
                  
                          {marketLogoList.map((logo, index) => (
                            <div key={index} className="col-3 g-5 ">
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