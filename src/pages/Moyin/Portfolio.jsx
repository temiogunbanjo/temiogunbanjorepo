import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main
        className="cols"
        style={{
          zIndex: "+999",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
