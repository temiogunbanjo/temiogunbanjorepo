import React, { useRef } from "react";

const Cupboard = ({ position = [0, 0, 0] }) => {
  const ref = useRef();

  const [cbX, cbY, cbZ] = position;

  const wallThickness = 0.6;
  const floorThickness = 1.5;
  const wallHeight = 10.5;
  const floorSize = 10.5;

  const nodes = {
    floor: {
      position: position,
      color: "brown",
      size: [floorSize, floorThickness, floorSize],
    },
    westWall: {
      color: "orange",
      size: [wallThickness, wallHeight, floorSize],
    },
    westWallShelf1: {
      color: "dodgerblue",
      size: [floorSize * 0.2, wallThickness / 2, floorSize],
    },
    westWallShelf2: {
      color: "crimson",
      size: [floorSize * 0.2, wallThickness / 2, floorSize],
    },
    northWall: {
      color: "pink",
      size: [floorSize + wallThickness, wallHeight, wallThickness],
    },
    northWallShelf1: {
      color: "dodgerblue",
      size: [floorSize, wallThickness / 2, floorSize * 0.2],
    },
    northWallShelf2: {
      color: "crimson",
      size: [floorSize, wallThickness / 2, floorSize * 0.2],
    },
  };

  return (
    <group ref={ref} position={position}>
      {/* Floor */}
      <mesh position={nodes.floor.position}>
        <boxGeometry attach="geometry" args={nodes.floor.size} />
        <meshLambertMaterial attach="material" color={nodes.floor.color} />
      </mesh>
      {/* West Wall */}
      <mesh
        position={[
          cbX - (nodes.floor.size[0] + nodes.westWall.size[0]) / 2,
          cbY + (nodes.westWall.size[1] - nodes.floor.size[1]) / 2,
          cbZ,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.westWall.size} />
        <meshLambertMaterial attach="material" color={nodes.westWall.color} />
      </mesh>
      {/* West Wall Shelf 1*/}
      <mesh
        position={[
          cbX - (nodes.floor.size[0] - nodes.westWallShelf1.size[0]) / 2,
          cbX + wallHeight * 0.8,
          cbZ,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.westWallShelf1.size} />
        <meshLambertMaterial
          attach="material"
          color={nodes.westWallShelf1.color}
        />
      </mesh>
      {/* West Wall Shelf 2*/}
      <mesh
        position={[
          cbX - (nodes.floor.size[0] - nodes.westWallShelf2.size[0]) / 2,
          cbX + wallHeight * 0.5,
          cbZ,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.westWallShelf2.size} />
        <meshLambertMaterial
          attach="material"
          color={nodes.westWallShelf2.color}
        />
      </mesh>
      {/* North Wall */}
      <mesh
        position={[
          cbX + (nodes.floor.size[0] - nodes.northWall.size[0]) / 2,
          cbY + (nodes.northWall.size[1] - nodes.floor.size[1]) / 2,
          cbZ -
            wallThickness +
            (nodes.northWall.size[2] - nodes.floor.size[2]) / 2,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.northWall.size} />
        <meshLambertMaterial attach="material" color={nodes.northWall.color} />
      </mesh>
      {/* North Wall Shelf 1*/}
      <mesh
        position={[
          cbX,
          cbX + wallHeight * 0.8,
          cbZ - (nodes.floor.size[2] - nodes.northWallShelf1.size[2]) / 2,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.northWallShelf1.size} />
        <meshLambertMaterial
          attach="material"
          color={nodes.northWallShelf1.color}
        />
      </mesh>
      {/* North Wall Shelf 2*/}
      <mesh
        position={[
          cbX,
          cbX + wallHeight * 0.5,
          cbZ - (nodes.floor.size[2] - nodes.northWallShelf2.size[2]) / 2,
        ]}
      >
        <boxGeometry attach="geometry" args={nodes.northWallShelf2.size} />
        <meshLambertMaterial
          attach="material"
          color={nodes.northWallShelf2.color}
        />
      </mesh>
    </group>
  );
};

export default Cupboard;
