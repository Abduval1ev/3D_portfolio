import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const compyuter = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.2} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[1, 5, 1]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow={1}
        shadow-mapSize={1440}
      />

      <primitive
        object={compyuter.scene}
        scale={2}
        position={[-1, -1.4, -2]}
        rotation={[-0, -0, -0.2]}
      />
    </mesh>
  );
};

export const CompyutersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [10, 10, 0], fov: 120 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CompyutersCanvas;
