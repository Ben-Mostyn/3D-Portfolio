import { useGLTF } from "@react-three/drei";

const TypescriptLogo = () => {
    const { scene } = useGLTF("../../public/models/Typescript3DLogo.glb")
    return (
        <>
            <primitive object={scene} scale={2.5} />

        </>

    )
}

export default TypescriptLogo;