import { useBox } from "@react-three/cannon";
import React from "react";

export default function Sphere({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  color = "dodgerblue",
  map = null,
  physicsOptions = {},
  ...rest
}) {
  const [box, api] = useBox(() => physicsOptions);
  // const box = useRef();
  return (
    <mesh ref={box} rotation={rotation} position={position} {...rest}>
      <sphereGeometry attach="geometry" args={size} />
      <meshLambertMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}
