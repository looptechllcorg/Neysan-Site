import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HomeInformation.scss';

const HomeInformation = ({ sectionData, className }) => {
  const words = sectionData.info.split(' ');
  const title = sectionData.title.split(' ');
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={className} ref={ref} id="homeInformation">
      <div className="container-lg">
        <div className="row">
          <div className="informationBox col-lg-4 col-sm-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'flex',
                gap: '4px',
                justifyContent: 'start',
                flexWrap: 'wrap',
              }}
            >
              {title.map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={childVariants} 
                  className="motionHeader"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                display: 'flex',
                gap: '4px',
                justifyContent: 'start',
                flexWrap: 'wrap',
              }}
            >
              {words.map((word, index) => (
                <motion.span 
                  key={index} 
                  variants={childVariants} 
                  className="motionSpan"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
        <div 
          className="bgImage" 
          style={{ backgroundImage: `url(${sectionData.bgImg})` }}
        ></div>
      </div>
    </section>
  );
};

export default HomeInformation;
