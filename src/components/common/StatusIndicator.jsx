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
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    ...sx,
  };

  const textStyle = {
    fontSize: "10px",
    fontWeight: 400,
    display: "block",
    color: "#F5222D",
    ...textSx
  };

  switch (type) {
    case "ongoing":
      wrapperStyle.backgroundColor = "#FFF7E6";
      wrapperStyle.borderColor = "#FA8C16";
      textStyle.color = "#FA8C16";
      break;

    case "skipped":
      wrapperStyle.backgroundColor = "rgb(236 237 242)";
      wrapperStyle.borderColor = "#1890FF";
      textStyle.color = "#1890FF";
      break;

    case "done":
      wrapperStyle.backgroundColor = "#F6FFED";
      wrapperStyle.borderColor = "#B7EB8F";
      textStyle.color = "#52C41A";
      break;

    case "success":
      wrapperStyle.backgroundColor = "#F6FFED";
      wrapperStyle.borderColor = "#B7EB8F";
      textStyle.color = "#52C41A";
      break;

    case "pending":
      wrapperStyle.backgroundColor = "rgba(238 237 235, 0)";
      wrapperStyle.borderColor = "grey";
      textStyle.color = "grey";
      textStyle.fontWeight = 600;
      break;

    case "error":
      wrapperStyle.backgroundColor = "#FFF1F000";
      wrapperStyle.borderColor = "#F5222D";
      textStyle.color = "#F5222D";
      break;

    case "neutral":
    default:
      wrapperStyle.backgroundColor = "#E5E5EA";
      wrapperStyle.borderColor = "#1E0A3C";
      textStyle.color = "#1E0A3C";
      break;
  }

  return (
    <div style={wrapperStyle}>
      <span className="capitalize" style={textStyle}>{value}</span>
    </div>
  );
};

export default Status;

// "#FFF1F0"
// borderColor
// "#F5222D"
