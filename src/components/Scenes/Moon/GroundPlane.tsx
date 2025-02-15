import { useRef } from "react";
import { Mesh } from "three";

const GroundPlane = () => {
    const ref = useRef<Mesh>(null);

    return (
        <mesh
            ref={ref}
            rotation={[-Math.PI / 2, 0, 0]} // Rotate it flat
            position={[-1, -1.5, 1]} // Move it down slightly
            receiveShadow
        >
            <circleGeometry args={[1, 50]} /> {/* Circle instead of plane */}
            <meshStandardMaterial color="#222" /> {/* Visible material */}
        </mesh>
    );
};

export default GroundPlane;
