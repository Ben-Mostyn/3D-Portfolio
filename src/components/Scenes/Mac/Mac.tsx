import { useGLTF } from "@react-three/drei";

const Mac = () => {
    const { scene } = useGLTF(
        "models/Mac/Macbook.glb",
        true
    )
    return (
        <primitive object={scene} scale={5} />
    );
}

export default Mac;