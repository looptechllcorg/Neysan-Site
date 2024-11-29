import React, { useState, useEffect } from 'react';
import './jamBottle.scss';
import neysanBottle from '../../../../assets/image/JamBottle1.png';

const JamBottle = () => {
  const [showHiddenBottle, setShowHiddenBottle] = useState(true);
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth <= 768,
    isMedium: window.innerWidth > 768 && window.innerWidth <= 1440,
  });


  const scrollShowHiddenBottle = () => {
    let threshold;

    if (screenSize.isMobile) {
      threshold = window.innerHeight * 4.4;
    } else if (screenSize.isMedium) {
      threshold = window.innerHeight * 4.6; 
    } else {
      threshold = window.innerHeight * 4.95; 
    }

    if (window.scrollY > threshold) {
      setShowHiddenBottle(false);
    } else {
      setShowHiddenBottle(true);
    }
  };


  const handleResize = () => {
    setScreenSize({
      isMobile: window.innerWidth <= 768,
      isMedium: window.innerWidth > 768 && window.innerWidth <= 1440,
    });
  };
 
  useEffect(() => {
    window.addEventListener('scroll', scrollShowHiddenBottle);
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('scroll', scrollShowHiddenBottle);
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]); 

  return (
    <div className={`bottle ${showHiddenBottle ? '' : 'noBottle'}`}>
      <img src={neysanBottle} alt="Bottle" />
    </div>
  );
};

export default JamBottle;
