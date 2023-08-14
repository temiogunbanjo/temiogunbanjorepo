import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import ReactHtmlParser from "html-react-parser";
import Fade from "@successtar/react-reveal/Fade";
import { CgEye } from "react-icons/cg";
import { BsChevronLeft as LeftIcon } from "react-icons/bs";

import CustomButton from "../../components/common/Button";
import { getSavedMode, setDarkMode, setTheme } from "../../utils";
import { VisitorAuth } from "./ModalContents";
import Dialog from "../../components/common/Dialog";

const Issues = () => {
  // const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };
  const [experiences] = useState([
    {
      title: "How to resolve the Javascript memory heap out issue that occurs while building the React application",
      timeframe: "Posted on Aug, 2023",
      role: "Web development • Internship at Jara Analytics",
      content: "-- --",
      links: ["https://help.boldreports.com/embedded-reporting/react-reporting/how-to/how-to-resolve-the-javascript-memory-heap-out-issue/#how-to-resolve-the-javascript-memory-heap-out-issue-that-occurs-while-building-the-react-application"]
    },
  ]);

  useEffect(() => {
    const vName = window.localStorage.getItem("visitor_name");
    const lastUsedTheme = window.localStorage.getItem("theme");
    const isDarkMode = getSavedMode();

    if (!vName) {
      setDialogContent(<VisitorAuth closeHandler={handleClose} />);
      window.setTimeout(() => {
        handleOpen();
      }, 4000);
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    }

    if (lastUsedTheme !== null) {
      setTheme(lastUsedTheme);
    }
  }, []);

  return (
    <>
      <Fade bottom cascade>
        <section
          className="experiences flex flex-col items-left p-5 "
          style={{
            backgroundImage: "none",
            marginBottom: "0",
            marginTop: "0",
          }}
        >
          <h1
            className="mb-8 main-text flex flex-row items-center"
            style={{
              marginTop: "28px",
              marginBottom: "38px",
            }}
          >
            <a href="/home" className="-ml-3">
              <LeftIcon />
            </a>
            <span className="ml-5">Career Challenges Catalogue</span>
          </h1>
          <div className="flex flex-col flex-wrap">
            {experiences.map((each) => (
              <div className="flex flex-row mb-12 my-3">
                <div
                  className="flex flex-col mr-8 h-auto"
                  style={{ width: "180px", flex: "none" }}
                >
                  <span
                    className="text-2xl"
                    style={{
                      fontWeight: 700,
                      color: "var(--light-text-color)",
                    }}
                  >
                    {each.timeframe}
                  </span>
                  <span
                    className="text-l mt-5"
                    style={{
                      fontWeight: 500,
                      color: "var(--tab-border-color)",
                      letterSpacing: "1px",
                    }}
                  >
                    {each.role}
                  </span>
                </div>

                <div
                  className="flex flex-col flew-grow ml-8 text-2xl"
                  style={{
                    marginRight: "100px",
                  }}
                >
                  <span
                    className="text-3xl mb-8 capitalize"
                    style={{ fontWeight: 700, color: "var(--text-color)" }}
                  >
                    {each.title}
                  </span>
                  <div
                    // className="text-2xl"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--light-text-color)",
                      lineHeight: 2,
                    }}
                  >
                    {ReactHtmlParser(each.content)}
                    {/* {each.content} */}
                  </div>
                </div>

                <CustomButton
                  className="border self-start ml-auto"
                  value={
                    <span
                      className="flex flex-row items-center"
                      style={{ color: "var(--text-color)" }}
                    >
                      <span>Read Full</span>
                      <i
                        className="ml-3"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        <CgEye />
                      </i>
                    </span>
                  }
                  sx={{
                    boxShadow: "none",
                    color: "#393A4A",
                    flex: "none",
                  }}
                />
              </div>
            ))}

            {/* <div
              className="card flex flex-col mx-6"
              style={{
                // backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
              }}
            >
              <div className="rows img-wrapper">
                <img
                  src={require("../../assets/images/e.png")}
                  alt="teh"
                  width={220}
                  height={30}
                  // style={{ mixBlendMode: "luminosity" }}
                />
              </div>
              <em className="mt-4">Agro-Tech & Fin-Tech</em>
            </div> */}

            {/* <div
              className="card flex flex-col mx-6"
              style={{
                borderRadius: "8px",
              }}
            >
              <div className="rows img-wrapper">
                <b
                  className="text-center"
                  style={{
                    margin: 0,
                    color: "var(--text-color)",
                    fontSize: "20px",
                  }}
                >
                  Lixom Technologies
                </b>
              </div>
              <em className="mt-4">Gaming & Lottery</em>
            </div> */}

            {/* <div
              className="card flex flex-col mx-6"
              style={{
                // backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                mixBlendMode: "luminosity",
              }}
            >
              <div className="rows img-wrapper">
                <img
                  src={require("../../assets/images/Jara.ico")}
                  alt="teh"
                  width={160}
                  height={40}
                />
              </div>
              <em className="mt-4">e-Commerce & Fin-Tech</em>
            </div> */}
          </div>
        </section>
      </Fade>

      <Dialog open={openModal} onClose={handleClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default Issues;
