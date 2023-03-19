import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main className="cols">
        <Outlet />
      </main>
    </>
  );
};

export default Portfolio;
