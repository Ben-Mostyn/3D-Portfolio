import { useGLTF } from "@react-three/drei";

const TypescriptLogo = () => {
    const { scene } = useGLTF(
        "/models/Logos/TSLogo/Typescript3DLogo.glb",
        true
    );
    return <primitive object={scene} scale={1} position={[-.8, 0, 1]} />;
};

export default TypescriptLogo;
