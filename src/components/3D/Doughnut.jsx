import React from "react";
import { useSpring, animated } from "@react-spring/three";
import { Canvas } from "@react-three/fiber";
import { Torus } from "@react-three/drei";

function Doughnut() {
  // from: { scale: 1 },
  // to: { scale: 1.2 },
  // const position = [0, -0.2, 0];
  const { position } = useSpring({
    loop: { reverse: true },
    from: { position: [0, -0.2, 0] },
    to: { position: [0, 0.2, 0] },
    config: { duration: 2000 },
  });

  return (
    <animated.mesh position={position}>
      <Torus args={[1, 0.4, 16, 200]} />
      <meshStandardMaterial color="red" />
    </animated.mesh>
  );
}

export default function DoughnutCanvas() {
  return (
    <Canvas gl={{ version: 1 }}>
      <ambientLight intensity={0.5} />
      <Doughnut />
    </Canvas>
  );
}
