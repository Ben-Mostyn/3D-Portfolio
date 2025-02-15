import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ReactLogo from './ReactLogo';

const ReactLogoScene = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <ReactLogo />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default ReactLogoScene;