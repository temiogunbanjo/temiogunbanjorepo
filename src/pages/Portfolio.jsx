import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { setDarkMode } from "../utils";
import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    const curDate = new Date();
    const isNightTime =
      curDate.getHours() > 18 ||
      (curDate.getHours() >= 0 && curDate.getHours() <= 7);
    console.log({ isNightTime });
    setDarkMode(isNightTime);
  }, []);

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
