import { Canvas } from "@react-three/fiber";
import Couch from "./Couch";
import { OrbitControls } from "@react-three/drei";

const CouchScene = () => {
    return (
        <Canvas>
            <ambientLight />
            <Couch />
            <OrbitControls />
        </Canvas>
    );
}

export default CouchScene;