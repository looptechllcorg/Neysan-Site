import React from 'react'
import "./OurService.scss"
import { ServiceImages } from '../../../../MyDatas/MyDatas';
const OurServices = () => {
    
  return (
    <section id='ourServices'>
        <div className="container">
            <div className="row">
            {ServiceImages.map((image,index)=>{
                let className = "col-4"
                if (index === ServiceImages.length - 1) {
                    className = "col-12"
                } else if (index % 4 === 1 || index % 4 ===2 ) {
                    className = "col-8"
                }
                return (
                    <div key={image.id} className={`imageCart g-3 ${className}`}>
                        <img src={image.src} alt={image.alt}  />
                    </div>
                )
            })}

            </div>
        </div>
    </section>
  )
}

export default OurServices