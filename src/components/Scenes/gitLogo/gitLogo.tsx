import { useGLTF } from "@react-three/drei";

const GitLogo = () => {
    const { scene } = useGLTF(
        "/models/Logos/gitLogo/gitlogo.glb",
        true
    );
    return <primitive object={scene} scale={.5} />;
};

export default GitLogo;