import React from "react";

function CustomButton(props) {
  const { sx, value, ...rest } = props;
  const customSx = sx || {};
  return (
    <button
      variant="contained"
      {...rest}
      style={{
        fontWeight: 700,
        fontSize: "14px",
        textTransform: "capitalize",
        padding: "16px 24px",
        boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
        ...customSx,
      }}
    >
      {value || ""}
    </button>
  );
}

export default CustomButton;
