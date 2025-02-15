import { Canvas } from "@react-three/fiber";
import Tree from "./Tree";
// import { OrbitControls } from "@react-three/drei";
import './tree.css';

const TreeScene = () => {
    return (
        <div className='treeCanvas'>
            <Canvas camera={{ position: [30, 5, 0] }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Tree />
                {/* <OrbitControls /> */}
            </Canvas>

        </div>
    );
}

export default TreeScene;