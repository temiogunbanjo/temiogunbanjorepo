import { IconButton, Stack } from "@mui/material";
import React from "react";
import { BiMinus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Window = ({ info, closeHandler, children }) => {
  let formattedName = info?.name || "App";
  formattedName =
    formattedName.length > 25
      ? `${formattedName.slice(0, 25)}...`
      : formattedName;

  return (
    <div
      className="absolute bg-white shadow-md rounded-md overflow-hidden"
      style={{
        top: "50%",
        left: "50%",
        transformOrigin: "center",
        transform: "translate(-50%)",
      }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        className="window-header bg-gray-400 py-2 pl-4 pr-2"
      >
        <span className="block font-medium text-gray-900">{formattedName}</span>

        <Stack direction={"row"} alignItems={"center"} className="ml-8">
          <IconButton
            className="border"
            sx={{ backgroundColor: "green", p: 0, mx: 0.3 }}
          >
            <IoClose fontSize={"14px"} />
          </IconButton>

          <IconButton
            className="border"
            sx={{ backgroundColor: "orange", p: 0, mx: 0.3 }}
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
      <div className="window-content">{children}</div>
    </div>
  );
};

export default Window;
