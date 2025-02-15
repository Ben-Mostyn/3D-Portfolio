import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

const Moon = () => {
    const ref = useRef<Mesh>(null);
    const texture = useTexture("/Images/Moon.jpg");

    // Track dragging state
    const [isDragging, setIsDragging] = useState(false);
    const [rotationSpeed, setRotationSpeed] = useState(0);

    // Update rotation based on drag
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += rotationSpeed; // Rotate the Moon
            setRotationSpeed(rotationSpeed * 0.95); // Apply friction to slow down
        }
    });

    // Mouse event handlers
    const handlePointerDown = () => setIsDragging(true);
    const handlePointerUp = () => setIsDragging(false);
    const handlePointerMove = (event: { movementX: number; }) => {
        if (isDragging && ref.current) {
            setRotationSpeed(event.movementX * 0.005); // Adjust speed based on drag
        }
    };

    return (
        <mesh
            ref={ref}
            position={[0, 0, 0]}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            castShadow
        >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={texture} />
        </mesh>
    );
}

export default Moon;
