import { useSphere } from "@react-three/cannon";
import React from "react";

export default function GPSMonitoring({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1],
  color = "dodgerblue",
  map = null,
  physicsOptions = {},
  ...rest
}) {
  const [sphere] = useSphere(() => ({
    ...physicsOptions,
    position,
    rotation,
    args: size,
  }));
  // const box = useRef();
  return (
    <mesh ref={sphere} rotation={rotation} position={position} {...rest}>
      <sphereGeometry attach="geometry" args={size} />
      <meshLambertMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}
