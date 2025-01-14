import React from 'react'
import "./BestProduct.scss"

const BestProduct = ({text,data}) => {
    console.log(data);
    
  return (
    <section id='bestProduct'> 
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <h3 className="pageTitle">BEST ORGANİC PRODUCT</h3>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <p className='pageText'>{text}</p>
                </div>
            </div>
            <div className="row">
                {data.map((item , index)=>(
                     <div key={index} className="col-4">
                     <div style={{backgroundImage:`url(${item.imgSrc})`}} className="pageCard">
                         <h4>{item.number}</h4>
                         <p>{item.text}</p>
                     </div>
                 </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default BestProduct