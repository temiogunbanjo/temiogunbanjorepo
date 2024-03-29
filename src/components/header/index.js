import React from "react";
import { Link } from "react-router-dom";

import logo from "../../resources/images/DeeplugTEO.png";
import "./header.css";

const toggleDarkMode = (ev) => {
  let toggleModeButtonIcon = document.querySelector(
    "header .left-elements i.mode-btn"
  );
  if (toggleModeButtonIcon.classList.contains("icofont-sun") === true) {
    toggleModeButtonIcon.classList.replace("icofont-sun", "icofont-moon");
  } else {
    toggleModeButtonIcon.classList.replace("icofont-moon", "icofont-sun");
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

function AppHeader(props) {
  return (
    <React.Fragment>
      <header className="rows">
        <div className="left-elements show-on-mobile">
          <button
            className="icofont-navigation-menu strip-btn"
            style={{ color: "white" }}
            onClick={toggleNavigationDrawer}
          ></button>
        </div>

        <div className="rows middle-elements">
          <Link to="/" className="my-icon">
            <img src={logo} alt="" height="32" />
            {/* <svg className="octicon octicon-mark-github" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> */}
          </Link>

          <form
            action=""
            method="GET"
            className="rows search-form hide-on-mobile"
          >
            <input
              type="text"
              name="search-bar-name"
              id="search-bar"
              placeholder="Search or jump to..."
            />
            <label htmlFor="search-bar">/</label>
          </form>

          <nav className="navigation-links hide-on-mobile">
            {/* <Link to="/therapy">Therapy</Link> */}
            {/* <a href="#games">Games</a> */}
            <a href="https://oneunivers.herokuapp.com">Marketplace</a>
            {/* <a href="#issues">Issues</a> */}
          </nav>
        </div>

        <div className="rows left-elements">
          <button
            className="strip-btn view-mode-element"
            style={{
              appearance: "none",
              color: "inherit",
            }}
            onClick={toggleDarkMode}
          >
            <i
              className="mode-btn icofont-moon"
              style={{ fontSize: "1.8rem" }}
            ></i>
          </button>

          <span className="add-element hide-on-mobile">
            <span
              className="icofont-plus"
              style={{ fontSize: "1.2rem" }}
            ></span>
            <span
              className="icofont-caret-down"
              style={{ fontSize: "1.1rem" }}
            ></span>
          </span>

          <span className="rows user-profile hide-on-mobile">
            <img
              className="user-profile-picture"
              src={props.avatar}
              alt=""
            />
            <span
              className="icofont-caret-down"
              style={{ fontSize: "1.1rem" }}
            ></span>
          </span>
        </div>
      </header>
      <nav className="cols show-on-mobile mobile-navigation-menu closed">
        <form action="" method="GET" className="rows search-form">
          <input
            type="text"
            name="search-bar-name"
            id="search-bar"
            placeholder="Search"
          />
        </form>
        <div className="lg-100 cols mobile-navigation-links">
          <a href="/" className="rows">
            <img
              className="user-profile-picture"
              src={props.avatar}
              alt=""
              width="17"
              height="17"
            />
            <span>{props.user}</span>
          </a>
          <a href="#dashboard">Dashboard</a>
          <Link to="/therapy">Therapy</Link>
          <a href="#games">Games</a>
          <a href="https://oneunivers.herokuapp.com">Marketplace</a>
          <a href="#issues">Issues</a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default AppHeader;
