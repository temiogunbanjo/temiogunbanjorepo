import React from "react";
import { CircularProgressProps } from "@mui/material/CircularProgress";
import { Box, Fade, CircularProgress } from "@mui/material";

/**
 *
 * @param {CircularProgressProps} props
 * @returns
 */
export default function Spinner(props) {
  const { color = "primary", ...rest } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Fade
        in={true}
        style={{
          transitionDelay: "500ms",
        }}
        unmountOnExit
      >
        <CircularProgress color={color} {...rest} disableShrink />
      </Fade>
    </Box>
  );
}
