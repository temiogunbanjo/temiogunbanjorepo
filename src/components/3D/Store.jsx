import { useCompoundBody } from "@react-three/cannon";
import React from "react";

const Store = ({
  children,
  position = [0, 0, 0],
  rotation =[0, 0, 0],
  size = [1, 1, 1],
  physicsOptions = {},
  northWallProp = {
    color: "wheat"
  },
  westWallProp = {
    color: "wheat"
  },
  floorProp = {
    color: 'orangered'
  },
  shelves = {
    northWall: false,
    westWall: {
      show: false
    },
  },
  ...rest
}) => {
  // const ref = useRef();
  const [cbX, cbY, cbZ] = position;
  const [cbSizeX, cbSizeY, cbSizeZ] = size;

  const wallThickness = 0.5;
  const floorThickness = 1;
  const wallHeight = 10.5 * cbSizeY;
  const floorSize = 10.5;

  const scaledFloorSize = [
    floorSize * cbSizeX,
    floorThickness * cbSizeY,
    floorSize * cbSizeZ,
  ];

  const nodes = {
    floor: {
      position: position,
      color: floorProp?.color || "orangered",
      size: scaledFloorSize,
    },
    westWall: {
      color: westWallProp?.color || "wheat",
      size: [wallThickness * cbSizeX, wallHeight, floorSize * cbSizeZ],
      get position() {
        return [
          cbX - (scaledFloorSize[0] + this.size[0]) / 2,
          cbY + (this.size[1] - scaledFloorSize[1]) / 2,
          cbZ,
        ];
      },
    },
    northWall: {
      color: northWallProp?.color || "wheat",
      size: [
        (floorSize + wallThickness) * cbSizeX,
        wallHeight,
        wallThickness * cbSizeZ,
      ],
      get position() {
        return [
          cbX + (scaledFloorSize[0] - this.size[0]) / 2,
          cbY + (this.size[1] - scaledFloorSize[1]) / 2,
          cbZ -
            wallThickness * cbSizeZ +
            (this.size[2] - scaledFloorSize[2]) / 2,
        ];
      },
    },
  };

  if (shelves?.northWall?.show || shelves?.northWall === true) {
    nodes.northWallShelves = [
      {
        color: shelves?.northWall?.color || "dodgerblue",
        size: [
          floorSize * cbSizeX,
          (wallThickness / 2) * cbSizeY,
          floorSize * 0.12 * cbSizeZ,
        ],
        get position() {
          return [
            cbX,
            cbY + wallHeight * 0.8,
            cbZ - (nodes.floor.size[2] - this.size[2]) / 2,
          ];
        },
      },
      {
        color: shelves?.northWall?.color || "crimson",
        size: [
          floorSize * cbSizeX,
          (wallThickness / 2) * cbSizeY,
          floorSize * 0.15 * cbSizeZ,
        ],
        get position() {
          return [
            cbX,
            cbY + wallHeight * 0.5,
            cbZ - (nodes.floor.size[2] - this.size[2]) / 2,
          ];
        },
      },
    ];
  }

  if (shelves?.westWall?.show || shelves?.westWall === true) {
    nodes.westWallShelves = [
      {
        color: shelves?.westWall?.color || "dodgerblue",
        size: [
          floorSize * 0.12 * cbSizeX,
          (wallThickness / 2) * cbSizeY,
          floorSize * cbSizeZ,
        ],
        get position() {
          return [
            cbX - (nodes.floor.size[0] - this.size[0]) / 2,
            cbY + wallHeight * 0.8,
            cbZ,
          ];
        },
      },
      {
        color: shelves?.westWall?.color || "crimson",
        size: [
          floorSize * 0.15 * cbSizeX,
          (wallThickness / 2) * cbSizeY,
          floorSize * cbSizeZ,
        ],
        get position() {
          return [
            cbX - (nodes.floor.size[0] - this.size[0]) / 2,
            cbY + wallHeight * 0.5,
            cbZ,
          ];
        },
      },
    ];
  }
  // console.log(
  //   Object.values(nodes).forEach((item) => console.log(JSON.stringify(item)))
  // );

  const shapes = Object.values(nodes)
    .filter((item) => item !== undefined)
    .flat()
    .map((item) => {
      item = JSON.stringify(item);
      item = JSON.parse(item);
      // console.log("shape =>", item);
      return {
        args: item.size,
        position: item.position,
        rotation: [0, 0, 0],
        type: "Box",
      };
    });

  const [ref, api] = useCompoundBody(() => ({
    ...physicsOptions,
    position,
    rotation,
    shapes,
  }));
  console.log(api);

  console.log(nodes.westWallShelves);

  return (
    <group ref={ref} position={position} rotation={rotation} {...rest}>
      {/* Floor */}
      <mesh castShadow position={nodes.floor.position}>
        <boxGeometry attach="geometry" args={nodes.floor.size} />
        <meshLambertMaterial attach="material" color={nodes.floor.color} />
      </mesh>
      {/* West Wall */}
      <mesh castShadow position={nodes.westWall.position}>
        <boxGeometry attach="geometry" args={nodes.westWall.size} />
        <meshLambertMaterial attach="material" color={nodes.westWall.color} />
      </mesh>
      {/* West Wall Shelves 1*/}
      {(shelves?.westWall?.show || shelves?.westWall === true) &&
        nodes.westWallShelves.map((prop, index) => (
          <mesh key={index} position={prop.position}>
            <boxGeometry attach="geometry" args={prop.size} />
            <meshLambertMaterial attach="material" color={prop.color} />
          </mesh>
        ))}
      {/* North Wall */}
      <mesh castShadow position={nodes.northWall.position}>
        <boxGeometry attach="geometry" args={nodes.northWall.size} />
        <meshLambertMaterial attach="material" color={nodes.northWall.color} />
      </mesh>
      {/* North Wall Shelf 1*/}
      {(shelves?.northWall?.show || shelves?.northWall === true) &&
        nodes.northWallShelves.map((prop, index) => (
          <mesh key={index} position={prop.position}>
            <boxGeometry attach="geometry" args={prop.size} />
            <meshLambertMaterial attach="material" color={prop.color} />
          </mesh>
        ))}
      {children}
    </group>
  );
};

export default Store;
