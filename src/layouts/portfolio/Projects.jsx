import React, { Suspense, useRef } from "react";
// import { TextureLoader } from "three";
import {
  Canvas,
  useFrame,
  // useLoader
} from "@react-three/fiber";
import {
  Loader,
  // OrbitControls,
  PresentationControls,
  Scroll,
  ScrollControls,
  Stars,
  // Text,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";

// import texture from "../../assets/textures/wood_planks_grey/wood_planks_grey_rough_4k.jpg";

// import Box from "../../components/3D/Box";
// import Plane from "../../components/3D/Plane";
import Store from "../../components/3D/Store";
// import Test from "../../components/3D/Test";
// import Sphere from "../../components/3D/Sphere";
// import Axis from "../../components/3D/Axis";
// import GPSMonitoring from "../../components/3D/GPSMonitoring";

const World = () => {
  // const colorMap = useLoader(TextureLoader, texture);
  const stars = useRef();

  useFrame((_, delta) => {
    // console.log(stars.current.position.z);
    stars.current.rotation.z += delta / 50;
  });

  const lightPosition1 = [5, 10, 0];
  const lightPosition2 = [5, 10, 5];

  return (
    <>
      <Stars ref={stars} />
      <Physics>
        {/* <Debug color="black" scale={1}> */}
        {/* <Sphere position={lightPosition2} color={"white"} size={[0.5]} /> */}
        <pointLight position={lightPosition2} intensity={1} />

        {/* <Sphere position={lightPosition1} color={"dodgerblue"} size={[0.5]} /> */}
        <pointLight
          position={lightPosition1}
          intensity={1}
          // penumbra={0.8}
          // angle={Math.PI / 4}
          color={"white"}
        />

        {/* <PresentationControls
          // config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          zoom={0.8}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <GPSMonitoring
            position={[8, 0.1, 2]}
            color="green"
            rotation={[-6, 120, 0]}
            size={[2.5]}
            map={colorMap}
            physicsOptions={{ mass: 0 }}
          />
        </PresentationControls> */}
        <PresentationControls
          snap
          zoom={0.8}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <group position-y={-0.75} dispose={null}>
            <Store
              position={[8, 0.1, 2]}
              rotation={[0, -Math.PI / 4, 0]}
              size={[1, 1, 1]}
              physicsOptions={{ mass: 0 }}
              northWallProp={{
                color: "teal",
              }}
              westWallProp={{
                color: "teal",
              }}
              floorProp={{
                color: "brown",
              }}
              shelves={{
                northWall: {
                  show: false,
                  color: "gold",
                },
                westWall: {
                  show: false,
                  color: "gold",
                },
              }}
            >
            </Store>
          </group>
        </PresentationControls>

        <PresentationControls
          snap
          zoom={0.8}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <group position-y={-0.75} dispose={null}>
            <Store
              position={[-6, -15, 4]}
              rotation={[0, 0, 0]}
              size={[1, 1, 1]}
              physicsOptions={{ mass: 0 }}
              northWallProp={{
                color: "pink",
              }}
              westWallProp={{
                color: "pink",
              }}
              floorProp={{
                color: "teal",
              }}
              shelves={{
                northWall: {
                  show: false,
                  color: "gold",
                },
                westWall: {
                  show: false,
                  color: "gold",
                },
              }}
            />
          </group>
        </PresentationControls>

        {/* <Plane color="#23174d" size={[500, 500]} castShadow/> */}
        {/* </Debug> */}
      </Physics>
    </>
  );
};

// const CameraHelper = ({
//   fov = 40,
//   near = 0.1,
//   aspectRatio = 1,
//   far = 1000,
//   position = [20, 30, 30],
// }) => {
//   const camera = new PerspectiveCamera(fov, aspectRatio, near, far);
//   return (
//     <group position={position}>
//       <cameraHelper args={[camera]} />;
//     </group>
//   );
// };

const PageSection = ({ children, style = {}, className = "" }) => {
  return (
    <section className={`h-screen w-screen ${className}`} style={style}>
      {children}
    </section>
  );
};

const Projects = () => {
  const cameraProps = {
    fov: 25,
    aspectRatio: 1,
    near: 0.1,
    far: 10000,
    position: [10, 20, 60],
  };
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="h-screen">
          <Canvas
            // style={{ height: "100vh" }}
            camera={cameraProps}
            // gl={{
            // pixelRatio: 2,
            // physicallyCorrectLights: true,
            // autoClear: false,
            // }}
          >
            {/* <color attach="background" args={["#23174d"]} /> */}
            <color attach="background" args={["#000"]} />
            <ScrollControls pages={6} damping={0.25}>
              <Scroll>
                <ambientLight />
                <World />
                {/* <Axis scale={3} /> */}
                {/* <OrbitControls enableZoom={false} enableRotate={true} /> */}
              </Scroll>

              <Scroll html style={{ width: "100%" }}>
                <PageSection className="flex flex-row items-center justify-start p-10">
                  <div
                    className="flex flex-col p-10 rounded-xl"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      width: "500px",
                      height: "500px",
                    }}
                  >
                    <h1
                      className="text-4xl"
                      // style={{ color: "var(--text-color)" }}
                    >
                      herrdr
                    </h1>
                  </div>
                </PageSection>

                <PageSection className="flex flex-row items-center justify-end p-10">
                  <div
                    className="flex flex-col p-10 rounded-xl"
                    style={{
                      backgroundColor: "white",
                      width: "500px",
                      height: "500px",
                    }}
                  >
                    <h1
                      className="text-4xl"
                      // style={{ color: "var(--text-color)" }}
                    >
                      herrdr
                    </h1>
                  </div>
                </PageSection>
              </Scroll>
            </ScrollControls>

            {/* <CameraHelper {...cameraProps} /> */}
            {/* <pointLight position={[0, 16, 2]} intensity={2} /> */}
            {/* <hemisphereLight intensity={0.35} /> */}
            {/* <directionalLight position={[-2, 50, 2]} intensity={5} color="white" /> */}
            {/* <Sky inclination={0.52} scale={20} /> */}
          </Canvas>
        </div>
      </Suspense>
    </>
  );
};

export default Projects;
