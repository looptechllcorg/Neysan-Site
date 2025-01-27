import React, { useEffect, useState } from 'react'
import "./HomeInformation.scss"
const HomeInformation = ({sectionData}) => {

  return (   
    <section id='homeInformation' >
        <div className="container-lg ">
            <div className="row">
            <div className="informationBox col-lg-4 col-sm-4" >
            <h3>{sectionData.title}</h3>
            <p>{sectionData.info}</p>
             </div>
            </div>
        <div className="bgImage" style={{backgroundImage:`url(${sectionData.bgImg})`}}></div>
        </div>
    </section>
  )
}

export default HomeInformation