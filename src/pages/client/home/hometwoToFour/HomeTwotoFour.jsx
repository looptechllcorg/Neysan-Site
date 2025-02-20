import React from 'react';
import HomeInformation from '../homeInformation/HomeInformation';
import './HomeToFour.scss';
import homePattern1 from '../../../../assets/pattern/homePattern1.png';
import homePattern2 from '../../../../assets/pattern/homePattern2.png';
import homePattern3 from '../../../../assets/pattern/homePattern3.png';
import homePattern4 from '../../../../assets/pattern/homePattern4.png';
import homePattern5 from '../../../../assets/pattern/homePattern5.png';
import { style } from 'framer-motion/client';

const HomeTwotoFour = ({ data }) => {
	console.log(data);
	
	return (
		<section id="HomeToFour">
			{/* Pattern */}
				<img className="homePatternOne" src={homePattern1} alt="" />
				<img className="homePatternTwo" src={homePattern2} alt="" />
				<img className="homePatternThree" src={homePattern3} alt="" />
				<img className="homePatternFour" src={homePattern4} alt="" />
				<img className="homePatternFive" src={homePattern5} alt="" />

			<div className="home2Between4SectionWrapper">
				{data?.map((item) => (
					<HomeInformation className={`a${item.id}`} key={item.id} sectionData={item} />
				))}
			</div>
		</section>
	);
};

export default HomeTwotoFour;
