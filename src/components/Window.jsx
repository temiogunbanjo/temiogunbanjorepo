import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { VscExpandAll } from "react-icons/vsc";
import { Box, Fade, Grow, IconButton, Stack } from "@mui/material";

const Window = ({ info, closeHandler, fullscreen = false, children }) => {
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(fullscreen);

  let formattedName = info?.name || "App";
  formattedName =
    formattedName.length > 25
      ? `${formattedName.slice(0, 25)}...`
      : `${formattedName}`;
  formattedName = `${formattedName}(${x}, ${y})`;

  return (
    <Box
      component="div"
      className={`absolute bg-white shadow-xl rounded-lg overflow-hidden ${
        isFullscreen ? "h-screen w-screen" : ""
      }`}
      style={{
        top: x === -1 && y === -1 ? "50%" : `${y}`,
        left: x === -1 && y === -1 ? "50%" : `${x}`,
        transformOrigin: "center",
        transform: !isFullscreen ? "translate(-50%)" : "0%",
        transition: "all 0.3s ease",
        zIndex: isFocused ? "+9999" : "+999",
      }}
      onMouseEnter={() => {
        setIsFocused(true);
      }}
      onMouseLeave={() => {
        // alert('mouse leave');
        setIsFocused(false);
      }}
    >
      <Grow in={true} timeout={500}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          className="window-header bg-gray-300 py-2 pl-4 pr-2 border-b"
          draggable={true}
          onDrag={(ev) => {
            console.log("dragging");
            // console.log({
            //   dataTransfer: ev.dataTransfer,
            //   pageX: ev.pageX,
            //   pageY: ev.pageY,
            //   clientX: ev.clientX,
            //   clientY: ev.clientY,
            // });
            // setX(ev.pageX);
            // setY(ev.pageY);
          }}
          onDragEnd={(ev) => {
            setX(`${ev.pageX}px`);
            setY(`${ev.pageY}px`);
          }}
        >
          <span className="block font-medium text-gray-900">
            {formattedName}
          </span>

          <Stack direction={"row"} alignItems={"center"} className="ml-8">
            <IconButton
              className="border"
              sx={{ backgroundColor: "green", p: 0, mx: 0.3 }}
              disabled={isFullscreen}
              onClick={() => {
                setX("0");
                setY("0");
                setIsFullscreen(!isFullscreen);
              }}
            >
              <VscExpandAll fontSize={"14px"} />
            </IconButton>

            <IconButton
              className="border"
              sx={{ backgroundColor: "orange", p: 0, mx: 0.3 }}
              disabled={!isFullscreen}
              onClick={() => {
                setX("50%");
                setY("50%");
                setIsFullscreen(!isFullscreen);
              }}
            >
              <BiMinus fontSize={"14px"} />
            </IconButton>

            <IconButton
              className="border"
              sx={{ backgroundColor: "crimson", p: 0, mx: 0.3 }}
              onClick={() => closeHandler()}
            >
              <IoClose fontSize={"14px"} />
            </IconButton>
          </Stack>
        </Stack>
        <div className="window-content relative h-full flex-grow border-2">
          <div className="flex absolute w-full h-full bg-black items-center justify-center">
            {/* <Fade in={false}> */}
            <div className="" style={{ width: "100px", height: "100px" }}>
              {info?.icon}
            </div>
            {/* </Fade> */}
          </div>
          {children}
        </div>
      </Grow>
    </Box>
  );
};

export default Window;
