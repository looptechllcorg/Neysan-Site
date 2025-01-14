import React, { useEffect, useState } from 'react'
import "./HomeInformation.scss"
import bgCloud1 from "../../../../assets/image/bgCloud1.png"
import bgCloud2 from "../../../../assets/image/bgCloud2.png"
import bgCloud3 from "../../../../assets/image/bgCloud3.png"
const HomeInformation = ({cloudType , textPosition ,infoHeadText , infoText}) => {
    const [cloudDesign,setCloudDesign]=useState()

    const getTextPositionStyle = () => {
        if (textPosition === "left") {
          return {  justifyContent: "start" };
        } else if (textPosition === "center") {
          return {  justifyContent: "center" };
        } else if (textPosition === "right") {
          return {  justifyContent: "end" };
        } else {
          return {};
        }
      };

   useEffect(() => {
     
   
    if (cloudType == 1) {
        setCloudDesign(bgCloud1)   
    }
    else if (cloudType == 2) {
        setCloudDesign(bgCloud2) 
    }
    else{
        setCloudDesign(bgCloud3)
    }
   }, [])
   
  return (
    <section id='homeInformation' >
        <div className="container-lg ">
            <div className="row" style={getTextPositionStyle()}>
            <div className="informationBox col-lg-3 col-sm-4" >
            <h3>{infoHeadText}</h3>
            <p>{infoText}</p>
             </div>
            </div>
        <div className="bgImage" style={{backgroundImage:`url(${cloudDesign})`}}></div>
        </div>
    </section>
  )
}

export default HomeInformation