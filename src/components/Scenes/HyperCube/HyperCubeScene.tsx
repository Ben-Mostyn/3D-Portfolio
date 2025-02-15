import { OrbitControls } from "@react-three/drei";
import HyperCube from "./HyperCube";
import { Canvas } from '@react-three/fiber';
import './hypercube.css';
import TypescriptLogo from "../TypescriptLogo/TypescriptLogo";


const HyperCubeScene = () => {
    return (
        <Canvas className="hypercubeCanvas">
            <ambientLight />
            <HyperCube />
            <TypescriptLogo />
            <OrbitControls />
        </Canvas>
    );
}

export default HyperCubeScene;