import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        attach="material"
        color="#8352FD"
        distort={0.5}
        speed={5}
        roughness={0.4}
      />
    </Sphere>
  );
};
export default AnimatedSphere;
