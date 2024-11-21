import React, { useState } from 'react'
import "./jamBottle.scss"
import neysanBottle from "../../../../assets/image/NeysanJamBoottle.png"
const JamBottle = () => {
    const [showHiddenBottle, setShowHiddenBottle] = useState(true);

  
    const scrollShowHiddenBottle = () => {
        if (window.scrollY > window.innerHeight * 0.5) {
            setShowHiddenBottle(false);
        } else {
            setShowHiddenBottle(true);
        }
    }
    window.addEventListener("scroll", scrollShowHiddenBottle)
  return (
    <div className={`${"bottle"} ${showHiddenBottle ? " " :"noBottle"}`}>
    <img src={neysanBottle} alt="" />
</div> 
  )
}

export default JamBottle