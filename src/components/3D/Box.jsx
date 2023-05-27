import { useBox } from "@react-three/cannon";
import React from "react";

export default function Box({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  color = "dodgerblue",
  map = null,
  physicsOptions = {},
  ...rest
}) {
  const [box] = useBox(() => ({
    ...physicsOptions,
    position,
    rotation,
    args: size,
  }));
  // const box = useRef();
  return (
    <mesh ref={box} rotation={rotation} position={position} {...rest}>
      <boxGeometry attach="geometry" args={size} />
      <meshLambertMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}
