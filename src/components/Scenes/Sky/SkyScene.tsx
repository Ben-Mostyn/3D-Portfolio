import { Cloud, OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const SkyScene = () => {
    return (
        <Canvas>
            <Sky
                sunPosition={[20, 0, 100]}
                turbidity={1}
                rayleigh={10}
                mieCoefficient={0.1}
                mieDirectionalG={0.8}
                distance={1000}
            />
            <ambientLight />
            <Cloud />
            <OrbitControls />
        </Canvas>
    );
}

export default SkyScene;