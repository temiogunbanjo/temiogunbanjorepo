import React from "react";
import Fade from "@successtar/react-reveal/Fade";

const Footer = () => {
  return (
    <Fade left cascade>
      <footer
        className="w-full"
        style={{
          // backgroundColor: "var(--tab-border-color)",
          backgroundAttachment: "fixed",
          position: "sticky",
          // zIndex: '-1',
          top: "100%",
          left: "0",
          height: "100vh",
          minHeight: "500px",
          // mixBlendMode: "multiply"
        }}
      >
        <h3
          className="py-8 px-12"
          style={{
            color: "var(--text-color)",
            fontSize: "42px",
            fontWeight: 700,
          }}
        >
          Find Out More...
        </h3>

        <div className="flex flex-row">
          <a href="/issues">Issues</a>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
