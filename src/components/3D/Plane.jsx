import { usePlane } from "@react-three/cannon";
import React from "react";

function Plane({
  position = [0, 0, 0],
  rotation = [-Math.PI / 2, 0, 0],
  size = [10, 10],
  sizeMultiplier = [1, 1],
  color = "dodgerblue",
  ...rest
}) {
  const planeSize = sizeMultiplier
    ? size.map((d, i) => d * (sizeMultiplier[i] || 1))
    : size;

  const [planeRef] = usePlane(() => ({
    args: planeSize,
    rotation,
    position,
  }));

  return (
    <mesh ref={planeRef} castShadow rotation={rotation} position={position} {...rest}>
      <planeGeometry args={planeSize} />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Plane;
