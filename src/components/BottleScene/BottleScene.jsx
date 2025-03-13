/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { DirectionalLight } from 'three';
import style from './BottleScene.module.scss';
import BottleModel from './BottleModel';
import { Environment } from '@react-three/drei';

const BottleScene = ({ showHiddenBottle, setIsBottleLoaded }) => {
	const directionLight = new DirectionalLight();
	directionLight.intensity = 2;
	return (
		<div
			style={{
				opacity: showHiddenBottle ? 1 : 0,
				zIndex: showHiddenBottle ? 99 : -1,
				transition: 'opacity 0.5s ease, transform 0.5s ease, width 0.5s ease',
			}}
			className={style.canvasDiv}
		>
			<Canvas
				shadows
				camera={{
					position: [5, 0, 5],
					fov: 15,
				}}
				onCreated={({ camera, scene }) => {
					scene.add(camera);
				}}
			>
				<ambientLight intensity={Math.PI / 2} />
				<BottleModel setIsBottleLoaded={setIsBottleLoaded} />
				<Environment preset="city" />
			</Canvas>
		</div>
	);
};

export default BottleScene;
