import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HomeInformation.scss';
import { useTranslation } from 'react-i18next';

const HomeInformation = ({ sectionData, className }) => {
  const { t } = useTranslation();
  const homequestion = t(sectionData.info);
  const homeanswer = t(sectionData.title);
  
  // const words = homequestion.split(' ');
  // const title = homeanswer.split(' ');

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  // useEffect(() => {
  //   console.log("inView:", inView);
  // }, [inView]);

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05, 
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className={className} ref={ref} id="homeInformation">
      <div className="container-fluid container-lg">
        <div className="row">
          <div className="informationBox col-lg-4 col-sm-4 col-10">
            <motion.h4 className='motionHeader'>
              {homeanswer.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={childVariants}
                  custom={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  style={{ display: 'inline-block', marginRight: '.8rem' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h4>
            <motion.p className="motionSpan">
              {homequestion.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  variants={childVariants}
                  custom={i}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  style={{ display: 'inline-block', marginRight: '.4rem' }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </div>
        </div>
        <div className="bgImage" style={{ backgroundImage: `url(${sectionData.bgImg})` }}></div>
      </div>
    </section>
  );
};

export default HomeInformation;



