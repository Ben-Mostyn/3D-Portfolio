import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import TypescriptLogo from './TypescriptLogo';

const TypescriptLogoScene = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <TypescriptLogo />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default TypescriptLogoScene;