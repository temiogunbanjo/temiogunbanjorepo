import React from "react";

export default function Axis({
  position = [0, 0, 0],
  scale = 1,
  ...rest
}) {
  const axisRadius = 0.05;
  return (
    <group>
      <mesh position={position} {...rest}>
        <cylinderGeometry attach="geometry" args={[axisRadius, axisRadius, 5 * scale]} />
        <meshBasicMaterial attach="material" color={"green"} />
      </mesh>
      <mesh position={position} rotation={[0, 0, Math.PI / 2]} {...rest}>
        <cylinderGeometry attach="geometry" args={[axisRadius, axisRadius, 10 * scale]} />
        <meshBasicMaterial attach="material" color={"red"} />
      </mesh>
      <mesh position={position} rotation={[Math.PI / 2, 0, 0]} {...rest}>
        <cylinderGeometry attach="geometry" args={[axisRadius, axisRadius, 10 * scale]} />
        <meshBasicMaterial attach="material" color={"dodgerblue"} />
      </mesh>
    </group>
  );
}
