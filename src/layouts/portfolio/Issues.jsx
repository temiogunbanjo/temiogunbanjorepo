import React, { useEffect, useState } from "react";
import { Box, IconButton, Link } from "@mui/material";
import ReactHtmlParser from "html-react-parser";
import Fade from "@successtar/react-reveal/Fade";
// import { CgEye } from "react-icons/cg";
import { BsChevronLeft as LeftIcon } from "react-icons/bs";

// import CustomButton from "../../components/common/Button";
import { getSavedMode, setDarkMode, setTheme } from "../../utils";
import { VisitorAuth } from "./ModalContents";
import Dialog from "../../components/common/Dialog";
import Image from "../../components/common/Image";

const Issues = () => {
  // const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };
  const [posts] = useState([
    {
      title:
        'How to resolve the typescript "memory heap out" issue that occurs while building the React application',
      timeframe: "Posted on Aug, 2023",
      role: "Web development • Internship at Jara Analytics",
      tags: ["Web development", "Internship at Jara Analytics"],
      content: `<p>
      The memory heap out issue occurs when the heap size is not sufficient to run the application. To resolve this issue, open the package.json file, which can be found in the root folder of React application and use --max_old_space_size=4096 as like in the below code snippet...
      </p>`,
      links: [
        "https://help.boldreports.com/embedded-reporting/react-reporting/how-to/how-to-resolve-the-javascript-memory-heap-out-issue/#how-to-resolve-the-javascript-memory-heap-out-issue-that-occurs-while-building-the-react-application",
      ],
    },
    {
      posterImage:
        "https://community-cdn-digitalocean-com.global.ssl.fastly.net/HUzrphKfp1MP4cMb7HcAQCyT",
      title:
        "Setting up an nginx server for the first time on Digital Ocean - My experience",
      timeframe: "Posted on Aug, 2023",
      role: "Backend Engineering • Full Stack Software Developer at Lixom Technologies",
      tags: ["Web development", "Internship at Jara Analytics"],
      content: `<p>
      Nginx is one of the most popular web servers in the world and is responsible for hosting some of the largest and highest-traffic sites on the internet. It is a lightweight choice that can be used as either a web server or reverse proxy.
      In this guide, we'll discuss how to install Nginx on your Ubuntu 20.04 server, adjust the firewall, manage the Nginx process, and set up server blocks for hosting more than one domain from a single server...
      </p>`,
      links: [
        "https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04",
      ],
    },
    {
      title: "How I learnt Java Springboot in 3 days!",
      timeframe: "Posted on Jul, 2023",
      role: "Web development • Internship at Jara Analytics",
      tags: ["Web development", "Internship at Jara Analytics"],
      content: `<p>
      ---
      </p>`,
      links: [
        "https://help.boldreports.com/embedded-reporting/react-reporting/how-to/how-to-resolve-the-javascript-memory-heap-out-issue/#how-to-resolve-the-javascript-memory-heap-out-issue-that-occurs-while-building-the-react-application",
      ],
    },
  ]);

  useEffect(() => {
    document.title = "Career Challenges";
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
          className="experiences flex flex-col items-left justify-start px-8 py-5"
          style={{
            backgroundImage: "none",
            marginBottom: "0",
            marginTop: "0",
          }}
        >
          <IconButton
            href="/home"
            className="flex flex-row items-center rounded-md"
            sx={{
              mr: "auto",
              borderRadius: "8px",
              color: "var(--primary-color-light)",
            }}
          >
            <LeftIcon />
            <span className="ml-5">Back to profile</span>
          </IconButton>
          <h1
            className="mb-8 main-text flex flex-col items-start"
            style={{
              fontSize: "44px",
              marginTop: "12px",
              marginBottom: "38px",
            }}
          >
            <span className="ml-5">Career Challenges</span>
          </h1>

          <div className="flex flex-col flex-wrap px-3">
            {posts.map((each) => (
              <div className="flex flex-col md:flex-row mb-14 my-3">
                <Box
                  component="div"
                  className="flex flex-col mr-8 h-auto"
                  sx={{ width: { xs: "100%", md: "190px" }, flex: "none" }}
                >
                  <Image
                    src={
                      each?.posterImage ||
                      require("../../assets/images/3638095.png")
                    }
                    alt=""
                    className="rounded-lg bg-slate-500"
                  />
                  <span
                    className="text-2xl mt-5 sm:font-bold font-medium"
                    style={{
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
                </Box>

                <div
                  className="flex flex-col flew-grow md:ml-8 mt-4 md:mt-0 text-2xl"
                  style={
                    {
                      // marginRight: "100px",
                    }
                  }
                >
                  <Link href={each?.links[0]} className="inline-block">
                    <span
                      className="text-3xl capitalize"
                      style={{
                        fontWeight: 700,
                        color: "var(--text-color)",
                        lineHeight: 1.5,
                      }}
                    >
                      {each.title}
                    </span>
                  </Link>
                  <div
                    className="line-clamp-5 mt-7"
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--light-text-color)",
                      lineHeight: 2,
                    }}
                  >
                    {ReactHtmlParser(each.content)}
                  </div>
                  <span
                    className="text-lg mt-5"
                    style={{
                      fontWeight: 500,
                      color: "var(--tab-border-color)",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {each.tags.map((tag) =>
                      `#${tag
                        .toLowerCase()
                        .replace(/[^A-Z]/gi, "-")
                        .replace(/\s+/gi, "-")}  `
                    )}
                  </span>
                </div>

                {/* <CustomButton
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
                /> */}
              </div>
            ))}
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
