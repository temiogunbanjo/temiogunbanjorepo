import React from "react";

const Status = (props) => {
  const {
    value,
    type = "pending",
    sx = {},
    textSx = {},
    width,
    roundness = "13px",
  } = props;

  const wrapperStyle = {
    width: width || "auto",
    height: "26px",
    padding: "8px 16px",
    borderRadius: roundness,
    borderColor: "#F5222D",
    backgroundColor: "#FFF1F0",
    borderWidth: "0.6px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...sx,
  };

  const textStyle = {
    fontSize: "12px",
    fontWeight: 400,
    display: "block",
    color: "#F5222D",
    ...textSx
  };

  switch (type) {
    case "success":
      // Green
      wrapperStyle.backgroundColor = "#97ef7c00";
      wrapperStyle.borderColor = "#97ef7c";
      textStyle.color = "#97ef7c";
      break;

    case "pending":
      // Orange
      wrapperStyle.backgroundColor = "crimson";
      wrapperStyle.borderColor = "white";
      textStyle.color = "white";
      break;

    case "error":
      // Red
      wrapperStyle.backgroundColor = "#FFD4D2";
      wrapperStyle.borderColor = "#FFD4D2";
      textStyle.color = "#9F1F17";
      break;

    case "info":
      // blue
      wrapperStyle.backgroundColor = "#DBF5FF";
      wrapperStyle.borderColor = "#DBF5FF";
      textStyle.color = "#1E0A3C";
      break;

    case "neutral":
      // gray
      wrapperStyle.backgroundColor = "#E5E5EA";
      wrapperStyle.borderColor = "#E5E5EA";
      textStyle.color = "#1E0A3C";
      break;

    default:
      wrapperStyle.backgroundColor = "#FFF1F0";
      wrapperStyle.borderColor = "#F5222D";
      textStyle.color = "#F5222D";
      break;
  }

  return (
    <div style={wrapperStyle}>
      <span style={textStyle}>{value}</span>
    </div>
  );
};

export default Status;

// "#FFF1F0"
// borderColor
// "#F5222D"
