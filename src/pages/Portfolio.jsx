import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <Header />
      <main className="cols" style={{
        zIndex: '+999',
      }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
