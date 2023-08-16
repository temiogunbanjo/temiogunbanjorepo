import React from "react";
import { Tabs } from "@mui/material";

const ResponsiveTab = ({ children, sx = {}, ...props }) => {
  return (
    <>
      {/* LARGE SCREENS */}
      <Tabs
        aria-label="Skills Tab"
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="auto"
        centered={true}
        sx={{
          display: { xs: "none", md: "flex" },
          "& .MuiTabs-scroller > .MuiTabs-flexContainer": {
            justifyContent: "center"
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Tabs>

      {/* SMALLER SCREENS */}
      <Tabs
        aria-label="Skills Tab"
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="auto"
        centered={false}
        sx={{
          display: { xs: "flex", md: "none" },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Tabs>
    </>
  );
};

export default ResponsiveTab;
