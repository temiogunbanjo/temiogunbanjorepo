import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { getSavedMode, setDarkMode } from "../utils";
import "./portfolio.css";

const Portfolio = () => {
  useEffect(() => {
    // if (!getSavedMode()) {
    //   const curDate = new Date();
    //   const isNightTime =
    //     curDate.getHours() > 18 ||
    //     (curDate.getHours() >= 0 && curDate.getHours() <= 6);
    //   console.log({ isNightTime });
    //   setDarkMode(isNightTime);
    // }
  }, []);

  return (
    <>
      <Header />
      <main
        id="portfolio__main"
        className="relative"
        style={{
          zIndex: "+99",
        }}
      >
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
