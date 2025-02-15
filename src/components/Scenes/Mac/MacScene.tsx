import { Canvas } from "@react-three/fiber";
import Mac from "./Mac";
import { OrbitControls } from "@react-three/drei";

const MacScene = () => {
    return (
        <Canvas>
            <ambientLight />
            <Mac />
        </Canvas>
    );
}

export default MacScene;