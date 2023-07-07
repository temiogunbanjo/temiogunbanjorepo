import React from "react";
import Fade from "@successtar/react-reveal/Fade";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const footerSMIcons = {
    width: "45px",
    height: "45px",
    color: "var(--tab-notice-bgcolor)",
    backgroundColor: "#282828",
  };

  return (
    <Fade left cascade>
      <footer className="w-full px-12 mt-12">
        <h3
          className="py-8"
          style={{
            color: "var(--header-text-color)",
            fontSize: "38px",
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Check Out More...
        </h3>

        <div className="flex flex-row flex-wrap gap-16">
          <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3">
            <h4 className="capitalize text-4xl mb-6">
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

          <div className="flex flex-col w-full sm:w-1/3 lg:w-1/3">
            <h4 className="capitalize text-4xl mb-6">Quick Links</h4>
            <div className="flex flex-col text-2xl">
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
                Education History
              </a>
              <a
                href="/#"
                className="transition-all ease-in-out mb-6 text-xl capitalize hover:text-2xl"
              >
                Personal Projects
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
