import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { LoopRepeat } from "three";

const Tree = () => {
    const ref = useRef(null);
    const { scene, animations } = useGLTF("../../../public/models/tree/treeAnimation.glb")
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {

        if (actions["windAction"]) {
            actions["windAction"]
                .reset() // Reset the animation
                .fadeIn(0.5) // Smooth transition
                .setLoop(LoopRepeat, Infinity) // Infinite loop
                .play();
            console.log("Playing windAction...");
        } else {
            console.warn("Animation 'windAction' not found!");
        }
    }, [actions]);
    return (

        <primitive ref={ref} object={scene} scale={2.5} />

    );
}

export default Tree;