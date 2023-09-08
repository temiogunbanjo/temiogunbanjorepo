import React from "react";

function CustomButton(props) {
  const { sx, value, variant, ...rest } = props;
  const customSx = sx || {};

  let allProps = {
    ...rest,
    style: {
      fontWeight: 700,
      fontSize: "12px",
      textTransform: "capitalize",
      padding: "12px 20px",
      boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
      borderRadius: "0px",
      ...customSx,
    },
  };

  switch (variant) {
    case "outlined":
      allProps = {
        ...allProps,
        style: {
          ...allProps.style,
          boxShadow: "none",
          color: "white",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "white",
          ...customSx,
        },
      };
      break;

    default:
      break;
  }

  return (
    <button variant="contained" {...allProps}>
      {value || ""}
    </button>
  );
}

export default CustomButton;
