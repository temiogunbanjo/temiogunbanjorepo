import React from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/DeeplugTEO.png";
// import PointerBox from "./common/Pointer";
import { IconButton } from "@mui/material";
import { availableThemes, setTheme } from "../utils";
// import "./header.css";

const toggleDarkMode = (ev) => {
  let toggleModeButtonIcon = document.querySelector(
    "header .left-elements i.mode-btn"
  );
  if (toggleModeButtonIcon.classList.contains("icofont-sun") === true) {
    toggleModeButtonIcon.classList.replace("icofont-sun", "icofont-moon");
    window.sessionStorage.setItem("dark_mode", false);
  } else {
    toggleModeButtonIcon.classList.replace("icofont-moon", "icofont-sun");
    window.sessionStorage.setItem("dark_mode", true);
  }

  document.body.classList.toggle("dark-mode");
};

const toggleNavigationDrawer = (ev) => {
  let menu = document.querySelector("header + nav.mobile-navigation-menu");
  if (menu.classList.contains("closed") === true) {
    menu.classList.remove("closed");
  } else {
    menu.classList.add("closed");
  }
};

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="flex flex-row items-center justify-between py-3 px-5 w-full">
      <span></span>
      <span className="text-white text-xl font-bold">{new Date().toDateString()}</span>
    </header>
  );
}

export default Header;
