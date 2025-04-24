/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

const BottleModel = ({ setIsBottleLoaded, innerHeight }) => {
	const { nodes, materials } = useGLTF('cem.glb', undefined, undefined, (l) => {
		l.manager.onLoad = () => {
			setIsBottleLoaded(true);
			window.scrollTo(0, 0);
		};
	});

	let rotations = {};
	const getRotation = () => {
		if (!rotations[window.scrollY]) {
			rotations[window.scrollY] = (2 * Math.PI * window.scrollY) / innerHeight;
		}
		return rotations[window.scrollY];
	};

	const groupRef = useRef(null);
	useEffect(() => {
		if (groupRef.current) {
			const handleScroll = () => {
				groupRef.current.rotation.y = getRotation();
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
