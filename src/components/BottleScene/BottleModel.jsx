/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { getRotation, getScaleRotation } from './bottleHelper';

const BottleModel = ({ modelFilePath, position, rotation }) => {
	const { nodes, materials } = useGLTF('cem.glb');

	const groupRef = useRef(null);
	//   console.log(gltf);
	useEffect(() => {
		if (groupRef.current) {
			console.log('start');
			const handleScroll = () => {
				groupRef.current.rotation.y = getRotation();
				// groupRef.current.scale.x = 0.8 + 0.031830989 * getScaleRotation();
				// groupRef.current.scale.y = 0.8 + 0.031830989 * getScaleRotation();
				// groupRef.current.scale.z = 0.8 + 0.031830989 * getScaleRotation();
			};
			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		}
	});

	return (
		<group ref={groupRef}>
			<group position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]} dispose={null}>
				<group position={[-41.43, 0, 4.33]}>
					<group position={[41.431, 0.003, -4.33]} rotation={[-Math.PI / 2, 0, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle001_1.geometry}
							material={materials.M_03___Default}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle001_2.geometry}
							material={materials.M_03___Default_1}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Plane050.geometry}
						material={materials.M_03___Default_2}
						position={[41.431, -0.167, -3.786]}
						scale={1.33}
					/>
				</group>
			</group>
		</group>
	);
};

export default BottleModel;
