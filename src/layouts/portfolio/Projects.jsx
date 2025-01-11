import React from "react";
// import { TextureLoader, BackSide } from "three";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { CameraControls, Loader } from "@react-three/drei";
// import { Physics } from "@react-three/cannon";

import DoughnutCanvas from "../../components/3D/Doughnut";

const Container = ({ children, ...rest }) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Vogue', sans-serif",
      overflow: "hidden",
    }}
    {...rest}
  >
    {children}
  </div>
);

const Background = ({ children, ...rest }) => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "royalblue",
      top: "0",
      left: "0",
      width: "100%",
      height: "100vh",
      zIndex: -1,
    }}
    {...rest}
  >
    {children}
  </div>
);

const Button = ({ children, ...rest }) => (
  <div
    style={{
      backgroundColor: "hotpink",
      color: "white",
      border: "none",
      padding: "10px 20px",
      marginTop: "20px",
      fontSize: "1rem",
      cursor: "pointer",
      borderRadius: "5px",
    }}
    {...rest}
  >
    {children}
  </div>
);

const Projects = () => {
  return (
    <Container>
      <Background>
        <DoughnutCanvas />
      </Background>

      <section
        style={{
          color: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <h1>Welcome to My Site</h1>
        <p>Explore the amazing world of 3D graphics.</p>
        <Button>Get Started</Button>
      </section>
    </Container>
  );
};

export default Projects;
