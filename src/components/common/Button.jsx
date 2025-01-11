import { Box } from "@mui/material";
import React from "react";

function CustomButton(props) {
  const { sx, value, variant, ...rest } = props;
  const customSx = sx || {};

  let allProps = {
    ...rest,
    sx: {
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
        sx: {
          ...allProps.sx,
          boxShadow: "none",
          color: "white",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "white",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            color: "black"
          },
          ...customSx,
        },
      };
      break;

    default:
      break;
  }

  return (
    <Box component="button" variant="contained" {...allProps}>
      {value || ""}
    </Box>
  );
}

export default CustomButton;
