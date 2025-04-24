/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import HomeTwotoFour from './hometwoToFour/HomeTwotoFour';
import HomeSlider from './homeSlider/HomeSlider';
import HomeMedia from './media/HomeMedia';
import LeavePattern from '../../../assets/pattern/leaves2Pattern.png';
import BottleScene from '../../../components/BottleScene/BottleScene';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { hometwoToFourDatas } from '../../../MyDatas/MyDatas';
import Bar from '../../../assets/Gif/Bar';
import ScrollToTop from '../../../components/ScrolToTop/ScrolToTop';

const leaves = [
	{ id: 1, top: '4%', left: '-1%', right: 'auto', size: '80px' },
	{ id: 2, top: '15%', left: 'auto', right: '1%', size: '80px' },
	{ id: 3, top: '16%', left: '-1%', right: 'auto', size: '80px' },
	{ id: 4, top: '26%', left: 'auto', right: '1%', size: '90px' },
	{ id: 5, top: '35%', left: '-1%', right: 'auto', size: '70px' },
	{ id: 6, top: '45%', left: 'auto', right: '1%', size: '100px' },
	{ id: 7, top: '60%', left: '-1%', right: 'auto', size: '70px' },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
	const sectionsClassNames = Array.from({ length: 5 }, (_, index) => `a${index}`);
	const [showHiddenBottle, setShowHiddenBottle] = useState(true);
	const [isBottleLoaded, setIsBottleLoaded] = useState(false);
	const [innerHeight, setInnerHeight] = useState(window.innerHeight);

	const handleResize = () => {
		setInnerHeight(window.innerHeight);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const hundredVhElement = document.getElementById('hundredVHElement');
		setInnerHeight(hundredVhElement.clientHeight);
	}, []);

	useEffect(() => {
		let inBottom = false;
		let isRunned = false;
		const handleScroll = () => {
			if (window.scrollY >= 4 * innerHeight - 2) {
				inBottom = true;
				isRunned = false;
				setShowHiddenBottle(false);
				window.enableScroll();
			} else {
				if (!inBottom && !isRunned) {
					setShowHiddenBottle(true);
					window.disableScroll();
					window.scrollTo(0, 4 * innerHeight - 6);
					isRunned = true;
				}
				inBottom = false;
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [innerHeight]);

	// Desktop
	useEffect(() => {
		window.disableScroll();
		let isRunned = false;
		let sectionIndex = 0;
		window.sectionIndex = 0;
		const onComplete = () => {
			isRunned = false;
		};
		const handleWheel = (e) => {
			if (window.scrollY < 4 * innerHeight - 2) {
				setShowHiddenBottle(true);
				if (!isRunned) {
					if (e.deltaY > 0 && sectionsClassNames.length > sectionIndex + 1) {
						sectionIndex++;
					} else if (sectionIndex != 0) {
						sectionIndex--;
					}
					window.sectionIndex = sectionIndex;
					gsap.to(window, {
						duration: 2,
						scrollTo: `.${sectionsClassNames[sectionIndex]}`,
						onComplete: () => onComplete(),
					});
					isRunned = true;
				}
			} else {
				window.enableScroll();
				setShowHiddenBottle(false);
				isRunned = false;
			}
		};

		window.addEventListener('wheel', handleWheel);
		return () => {
			window.removeEventListener('wheel', handleWheel);
		};
	}, [innerHeight]);

	useEffect(() => {
		let lastTouchScreenY;
		let isRunned = false;
		let sectionIndex = 0;
		window.sectionIndex = 0;
		window.disableScroll();
		const onComplete = () => {
			isRunned = false;
			lastTouchScreenY = null;
		};
		const handleTouchMove = (e) => {
			if (window.scrollY <= 4 * innerHeight - 2) {
				setShowHiddenBottle(true);
				if (!isRunned && lastTouchScreenY) {
					if (e.targetTouches[0].screenY < lastTouchScreenY && sectionsClassNames.length > sectionIndex + 1) {
						sectionIndex++;
					} else if (sectionIndex != 0) {
						sectionIndex--;
					}
					window.sectionIndex = sectionIndex;
					gsap.to(window, {
						duration: 1.2,
						scrollTo: `.${sectionsClassNames[sectionIndex]}`,
						onComplete: () => onComplete(),
					});
					isRunned = true;
				}
			} else {
				setShowHiddenBottle(false);
				isRunned = false;
			}
			lastTouchScreenY = e.targetTouches[0].screenY;
		};
		window.addEventListener('touchmove', handleTouchMove);
		return () => {
			window.removeEventListener('touchmove', handleTouchMove);
		};
	}, [innerHeight]);
	useEffect(() => {
		<ScrollToTop />;
	}, []);

	return (
		<>
			<BottleScene
				innerHeight={innerHeight}
				showHiddenBottle={showHiddenBottle}
				setIsBottleLoaded={setIsBottleLoaded}
			/>
			<div
				id={'hundredVHElement'}
				style={{ height: '100vh', position: 'fixed', top: 0, left: 0, width: '100%' }}
			></div>
			{!isBottleLoaded ? (
				<div
					className="loadingContainer"
					style={{
						position: 'absolute',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100vh',
						width: '100vw',
						fontSize: '24px',
						zIndex: '9999',
						background: 'white',
					}}
				>
					<Bar />
				</div>
			) : (
				<main id="noPadding" className="a0" style={{ position: 'relative' }}>
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
								zIndex: '9',
							}}
						/>
					))}
					<Banner />
					<HomeTwotoFour data={hometwoToFourDatas} />
					<HomeSlider />
					<HomeMedia />
				</main>
			)}
		</>
	);
};

export default Home;
