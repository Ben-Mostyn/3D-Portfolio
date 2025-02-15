import { useGLTF } from "@react-three/drei";

const ReactLogo = () => {
    const { scene } = useGLTF(
        "/models/Logos/reactLogo/React.glb",
        true
    );
    return <primitive object={scene} />;
};

export default ReactLogo;
