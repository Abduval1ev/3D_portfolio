import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const compyuter = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.2} groundColor="white" />
      <pointLight intensity={1} />
      <spotLight
        position={[1, 5, 1]}
        angle={0.1}
        penumbra={1}
        intensity={1}
        castShadow={1}
        shadow-mapSize={1440}
      />

      <primitive
        object={compyuter.scene}
        scale={isMobile ? 2 : 4}
        position={isMobile ? [12, -12, -2] : [-6, -24, -1]}
        rotation={[-0, -0, -0]}
      />
    </mesh>
  );
};

export const CompyutersCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matchMedia);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [38, 2, 0], fov: 90 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CompyutersCanvas;
