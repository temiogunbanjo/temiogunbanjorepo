import React from "react";
import Fade from "@successtar/react-reveal/Fade";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import logo from "../assets/images/DeeplugTEO.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSMIcons = {
    width: "45px",
    height: "45px",
    color: "var(--tab-notice-bgcolor)",
    backgroundColor: "#282828",
  };

  return (
    <Fade left cascade>
      <footer className="w-full px-12">
        <h3
          className="py-12 mb-2 uppercase text-center sm:text-left"
          style={{
            color: "var(--header-text-color)",
            fontSize: "38px",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Check Out More...
        </h3>

        <div className="flex flex-row flex-wrap gap-12">
          <div className="flex flex-col w-full items-center sm:items-start sm:w-1/4 lg:w-1/4 sm:border-r-2" style={{ borderColor: 'var(--border-line-color)'}}>
            <Link to="/" className="my-icon">
              <img
                src={logo}
                alt=""
                height="32px"
                className="logo"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              {/* <svg className="octicon octicon-mark-github" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> */}
            </Link>
          </div>

          <div className="flex flex-col w-full sm:w-1/4 lg:w-1/4 items-center sm:items-start sm:border-r-2 pr-1" style={{ borderColor: 'var(--border-line-color)'}}>
            <h4 className="capitalize text-4xl mb-8">Quick Links</h4>
            <div className="flex flex-col text-2xl">
              <a
                href="/home/education-history"
                className="transition-all ease-in-out mb-6 text-xl capitalize hover:text-2xl"
              >
                Education History
              </a>
              <a
                href="/issues"
                className="transition-all ease-in-out mb-6 text-xl capitalize hover:text-2xl"
              >
                Issues Catelogue
              </a>
              <a
                href="/#"
                className="transition-all ease-in-out mb-6 text-xl capitalize hover:text-2xl"
              >
                My Hobbies
              </a>
              <a
                href="/#"
                className="transition-all ease-in-out mb-6 text-xl capitalize hover:text-2xl"
              >
                Personal Projects
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3 items-center sm:items-start pr-1">
            <h4 className="capitalize text-4xl mb-8">
              Social Media & Contacts
            </h4>
            <div className="flex flex-row items-start text-center text-3xl gap-8">
              <a
                href="https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <FaLinkedinIn />
                </div>
                <span className="text-lg">LinkedIn</span>
              </a>
              <a
                href="https://github.com/temiogunbanjo"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <FaGithub />
                </div>
                <span className="text-lg">GitHub</span>
              </a>
              <a
                href="https://wa.me/+2349059620514"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <SiWhatsapp />
                </div>
                <span className="text-lg">Whatsapp</span>
              </a>
              <a
                href="mailto:ogunbanjotemiloluwa@gmail.com"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <IoMailOpen />
                </div>
                <span className="text-lg">Email</span>
              </a>
              {/* <a
                href="/issues"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <FaStackOverflow />
                </div>
                <span className="text-lg">Stack Overflow</span>
              </a> */}
              {/* <a
                href="/issues"
                className="flex flex-col items-center justify-center my-2"
              >
                <div
                  className="flex flex-row items-center justify-center material-black p-2 mb-2 rounded-lg"
                  style={footerSMIcons}
                >
                  <FaTwitter />
                </div>
                <span className="text-lg">Twitter</span>
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
