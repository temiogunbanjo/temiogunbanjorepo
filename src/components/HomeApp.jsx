import { Stack, Box } from "@mui/material";
import React from "react";

const clickHandler = (onClick, appInfo) => (ev) => {
  console.log(ev.target);
  ev.currentTarget.style.backgroundColor = "dodgerblue";

  if (onClick && typeof onClick === "function") {
    onClick(ev);
  }
};

const dblClickHandler = (onDblClick, appInfo) => (ev) => {
  if (onDblClick && typeof onDblClick === "function") {
    onDblClick(ev);
  } else {
    console.log(ev.target);
    alert(`double click ${appInfo?.name}`);
  }
};

const blurHandler = (onBlur, appInfo) => (ev) => {
  console.log(ev.target);
  ev.currentTarget.style.backgroundColor = "transparent";

  if (onBlur && typeof onBlur === "function") {
    onBlur(ev);
  }
};

export const sizesMap = {
  small: {
    icon: {
      width: "30px",
      height: "30px",
    },
    text: "text-md",
  },
  medium: {
    icon: {
      width: "50px",
      height: "50px",
    },
    text: "text-xl",
  },
};

const HomeApp = ({
  name: appName,
  icon,
  onClick,
  onBlur,
  onDoubleClick,
  size = "medium",
}) => {
  // size="small"

  return (
    <Box
      component="button"
      className="flex flex-col justify-center items-center p-2 rounded-md w-full"
      draggable={true}
      onClick={clickHandler(onClick)}
      onDoubleClick={dblClickHandler(onDoubleClick, { name: appName })}
      onBlur={blurHandler(onBlur)}
    >
      {icon ? (
        <div className="overflow-hidden" style={{ ...sizesMap[size].icon }}>
          {icon}
        </div>
      ) : (
        <div
          className="border-2 p-3 text-lg text-gray-400 rounded-md"
          style={{ ...sizesMap[size].icon }}
        >
          {appName.charAt(0)}
        </div>
      )}
      <div
        className={`mt-3 ${
          sizesMap[size].text || ""
        } text-center font-medium text-gray-300`}
      >{`${appName}`}</div>
    </Box>
  );
};

export default HomeApp;
