import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/SimpleHeader";
import { getSavedMode, setDarkMode } from "../utils";
import "./blogs.css";

const BlogPage = () => {
  useEffect(() => {
    if (!getSavedMode()) {
      const curDate = new Date();
      const isNightTime =
        curDate.getHours() > 18 ||
        (curDate.getHours() >= 0 && curDate.getHours() <= 6);
      console.log({ isNightTime });
      setDarkMode(isNightTime);
    }
  }, []);

  return (
    <>
      <Header />
      <main
        id="blogs__main"
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

export default BlogPage;
