import { useGLTF } from "@react-three/drei";

const Cloud = () => {
    const { scene } = useGLTF(
        "models/cloud/cloud.glb",
        true
    )
    return (
        <primitive object={scene} />
    );
}

export default Cloud;