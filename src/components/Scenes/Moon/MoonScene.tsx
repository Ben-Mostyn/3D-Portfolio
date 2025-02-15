import { Canvas } from "@react-three/fiber";
import Moon from "./Moon";
import { OrbitControls } from "@react-three/drei";
import './moon.css';
import GroundPlane from "./GroundPlane";

const MoonScene = () => {
    return (
        <div className="moonContainer">
            <Canvas shadows camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />
                <Moon />
                <OrbitControls
                    enableZoom={false}    // Disable zooming for a cleaner look
                    enablePan={false}     // Prevent panning
                    maxPolarAngle={Math.PI / 2} // Limit vertical movement (prevents weird looping)
                    minPolarAngle={Math.PI / 2} // Keep the camera level (no flipping)
                />
                <GroundPlane />
            </Canvas>
        </div>
    );
}

export default MoonScene;