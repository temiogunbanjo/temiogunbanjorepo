import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";

import texture from "../../assets/textures/wood_planks_grey/wood_planks_grey_rough_4k.jpg";

import Box from "../../components/3D/Box";
// import Plane from "../../components/3D/Plane";
import Cupboard from "../../components/3D/Cupboard";
import Test from "../../components/3D/Test";
import Sphere from "../../components/3D/Sphere";

const World = () => {
  const colorMap = useLoader(TextureLoader, texture);
  const stars = useRef();

  useFrame((_, delta) => {
    // console.log(stars.current.position.z);
    stars.current.rotation.z += delta / 50;
    // stars.current.position.z += delta * 10;
  });

  return (
    <group>
      <Stars ref={stars} />
      {/* <Sky inclination={0.52} scale={20} /> */}
      <Physics>
        {/* <Box
          position={[0, 5, 0]}
          color="orange"
          rotation={[-6, 120, 0]}
          size={[1.5, 1.5, 1.5]}
          map={colorMap}
          physicsOptions={{ mass: 0 }}
        /> */}
        <Cupboard position={[-3, -3, 5]}/>
        {/* <Test
          position={[5, 0, 0]}
          color="green"
          rotation={[-6, 120, 0]}
          size={[1, 1, 1]}
          // map={colorMap}
          // physicsOptions = {{ mass: 0.1 }}
        /> */}
        {/* <Sphere
          position={[5, 5, 5]}
          color="green"
          rotation={[-6, 120, 0]}
          size={[1, 1, 1]}
        /> */}
        {/* <Plane color="royalblue"/> */}
      </Physics>
    </group>
  );
};

const Projects = () => {
  // const delta = -2;

  // useEffect(() => {
  //   const intv = setInterval(() => {
  //     setCameraPos((prev) => {
  //       prev[2] += delta;
  //       console.log(prev);
  //       if (prev[2] <= 5) {
  //         clearInterval(intv);
  //       }

  //       return prev;
  //     });
  //   }, 500);
  //   // return clearInterval(intv);
  // });

  return (
    <Canvas
      className="canvas"
      style={{ height: "100vh" }}
      camera={{ fov: 55, near: 0.1, far: 1000, position: [5, 5, 30] }}
      // orthographic={true}
    >
      <OrbitControls enableZoom={true} />
      <World />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 10, 2]} intensity={10} color="red" />
      <spotLight position={[5, 0, 2]} angle={10.15} penumbra={3} />
    </Canvas>
  );
};

export default Projects;
