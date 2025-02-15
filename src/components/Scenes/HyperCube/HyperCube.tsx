import { useGLTF } from "@react-three/drei";

const HyperCube = () => {
    const { scene } = useGLTF(
        "/models/HyperCube/Hypercube.glb",
        true
    )
    return (
        <primitive object={scene} scale={1} />
    );
}

export default HyperCube;