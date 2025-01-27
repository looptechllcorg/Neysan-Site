import React from 'react';
import Banner from './banner/Banner';
// import JamBottle from './jamBottle/JamBottle';
import HomeTwotoFour from './hometwoToFour/HomeTwotoFour';
import MarketLogo from './marketLogos/MarketLogo';
import HomeSlider from './homeSlider/HomeSlider';
import HomeMedia from './media/HomeMedia';
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png';
import BottleScene from '../../../components/BottleScene/BottleScene';
import { hometwoToFourDatas } from '../../../MyDatas/MyDatas';

const leaves = [
	{ id: 1, top: '4%', left: '-1%', right: 'auto', size: '100px' },
	{ id: 2, top: '8%', left: 'auto', right: '1%', size: '80px' },
	{ id: 3, top: '16%', left: '-1%', right: 'auto', size: '80px' },
	{ id: 4, top: '25%', left: 'auto', right: '1%', size: '90px' },
	{ id: 5, top: '35%', left: '-1%', right: 'auto', size: '70px' },
	{ id: 6, top: '45%', left: 'auto', right: '1%', size: '100px' },
	{ id: 7, top: '60%', left: '-1%', right: 'auto', size: '70px' },
];

const Home = () => {
	return (
		<main style={{ position: 'relative' }}>
			{leaves.map((leaf) => (
				<img
					key={leaf.id}
					src={LeavePattern}
					alt="Yaprak"
					style={{
						position: 'absolute',
						top: leaf.top,
						left: leaf.left,
						right: leaf.right,
						width: leaf.size,
						height: leaf.size,
						// zIndex:"99"
					}}
				/>
			))}
			<BottleScene />
			<Banner />
			<HomeTwotoFour data={hometwoToFourDatas}/>
			<HomeSlider />  
			<HomeMedia />
			<MarketLogo />
		</main>
	);
};

export default Home;
