import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import GitLogo from './gitLogo';

const GitLogoScene = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight />
                {/* <pointLight position={[10, 10, 10]} /> */}
                <GitLogo />
                <OrbitControls />
            </Canvas>
        </>
    );
}

export default GitLogoScene;