import React, { useState, useEffect } from 'react';
import './jamBottle.scss';
import neysanBottle from '../../../../assets/image/JamBottle1.png';

const JamBottle = () => {
  const [showHiddenBottle, setShowHiddenBottle] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 1440); 

 
  const scrollShowHiddenBottle = () => {
    const threshold = isMobile ? window.innerHeight * 4.6 : window.innerHeight * 4.95; 
    if (window.scrollY > threshold) {
      setShowHiddenBottle(false);
    } else {
      setShowHiddenBottle(true);
    }
  };

 
  const handleResize = () => {
    setIsMobile(window.innerWidth >= 1440); 
  };


  useEffect(() => {
    window.addEventListener('scroll', scrollShowHiddenBottle);
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('scroll', scrollShowHiddenBottle);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]); 

  return (
    <div className={`bottle ${showHiddenBottle ? '' : 'noBottle'}`}>
      <img src={neysanBottle} alt="Bottle" />
    </div>
  );
};

export default JamBottle;
