import { usePlane } from "@react-three/cannon";
import React from "react";

function Plane({
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  size = [10, 10],
  sizeMultiplier = [1, 1],
  color = "dodgerblue",
}) {
  const [planeRef] = usePlane(() => ({
    rotation,
    position
  }));

  return (
    <mesh ref={planeRef} rotation={rotation} position={position}>
      <planeGeometry
        args={
          sizeMultiplier
            ? size.map((d, i) => d * (sizeMultiplier[i] || 1))
            : size
        }
      />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Plane;
