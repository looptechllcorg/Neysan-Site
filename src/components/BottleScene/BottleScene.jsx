import { Canvas } from '@react-three/fiber';
import { DirectionalLight } from 'three';
import style from './BottleScene.module.scss';
import BottleModel from './BottleModel';
import { CameraControls, Environment } from '@react-three/drei';

const BottleScene = ({ modelFilePath, showHiddenBottle }) => {
	const directionLight = new DirectionalLight();
	directionLight.intensity = 2;
	return (
		<div className={style.canvasDiv}>
			<Canvas
				shadows
				camera={{
					position: [5, 0, 5],
					fov: 15,
				}}
				onCreated={({ camera, scene }) => {
					// camera.add(directionLight);
					scene.add(camera);
				}}
			>
				<ambientLight intensity={Math.PI / 2} />
				<BottleModel modelFilePath={modelFilePath} />
				<Environment preset="city" />
			</Canvas>
		</div>
	);
};

export default BottleScene;
