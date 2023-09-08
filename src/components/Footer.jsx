import React, { useState } from "react";
// import Fade from "@successtar/react-reveal/Fade";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { IoMailOpen } from "react-icons/io5";
// import { SiWhatsapp } from "react-icons/si";
// import logo from "../assets/images/DeeplugTEO.png";
// import { Link } from "react-router-dom";
// import Image from "./common/Image";
import FolderApp from "./FolderApp";
import HomeApp from "./HomeApp";
import Window from "./Window";
import { delay } from "../utils";
import { WINDOW_LOAD_TIME } from "../database/globals";

const Footer = () => {
  const [windowInfo, setWindowInfo] = useState(null);

  return (
    <>
      {windowInfo && (
        <Window info={windowInfo} closeHandler={() => setWindowInfo(null)} />
      )}
      <footer className="flex flex-row justify-center items-center w-full px-12">
        <FolderApp
          name="Explorer"
          size="small"
          onDoubleClick={(ev) => {
            delay(
              () =>
                setWindowInfo({
                  name: "Explorer",
                  type: "folder",
                }),
              WINDOW_LOAD_TIME
            );
          }}
        />
        <HomeApp
          name="Chrome"
          size="small"
          onDoubleClick={(ev) => {
            delay(
              () =>
                setWindowInfo({
                  name: "Explorer",
                  type: "folder",
                }),
              WINDOW_LOAD_TIME
            );
          }}
        />
        <HomeApp
          name="Chrome"
          size="small"
          onDoubleClick={(ev) => {
            delay(
              () =>
                setWindowInfo({
                  name: "Explorer",
                  type: "folder",
                }),
              WINDOW_LOAD_TIME
            );
          }}
        />
      </footer>
    </>
  );
};

export default Footer;
