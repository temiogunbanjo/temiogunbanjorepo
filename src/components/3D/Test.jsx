import { useBox } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Test({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = [1, 1, 1],
  color = "dodgerblue",
  map = null,
  physicsOptions = {},
}) {
  // const [box, api] = useBox(() => (physicsOptions));
  const box = useRef();

  useFrame(({ clock }, delta) => {
    box.current.rotation.x += Math.cos(delta);
    box.current.rotation.y += Math.cos(delta);
    box.current.rotation.z += -Math.cos(delta);
  });

  return (
    <mesh ref={box} rotation={rotation} position={position}>
      <boxGeometry attach="geometry" args={size} />
      {/* <meshLambertMaterial attach="material" color={color} map={map} /> */}
      <meshLambertMaterial attach="material" color={color} map={map} />
    </mesh>
  );
}
