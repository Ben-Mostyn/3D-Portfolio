import { useGLTF } from "@react-three/drei";

const Couch = () => {
    const { scene } = useGLTF(
        "models/couch/couch.glb",
        true
    )
    return (
        <primitive object={scene} scale={1} />
    );
}

export default Couch;