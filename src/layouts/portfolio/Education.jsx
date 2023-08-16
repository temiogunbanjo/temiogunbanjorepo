import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import { BsChevronLeft as LeftIcon } from "react-icons/bs";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

import ReactHtmlParser from "html-react-parser";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import Fade from "@successtar/react-reveal/Fade";
// import { Fade as AwesomeFade } from "react-awesome-reveal";

import CustomButton from "../../components/common/Button";
import Spinner from "../../components/common/Spinner";
import Dialog from "../../components/common/Dialog";

import { fetchUserEducation } from "../../database";
import { getSavedMode, setDarkMode, setTheme } from "../../utils";
import { VisitorAuth } from "./ModalContents";

const EducationCard = (props) => {
  const experienceId = props?.data?.company
    ?.replace(/['".()&]/gi, "")
    .replace(/\s+/gi, "-");
  return (
    <Box
      component="div"
      id={experienceId}
      className={`card flex flex-col sm:flex-row mb-12 sm:mb-8 pl-8 my-3 -ml-4 shadow-lg`}
      sx={{}}
    >
      <div className="flex flex-col ml-6 h-auto timeline-section">
        <span
          className="text-xl sm:text-xl"
          style={{
            fontWeight: 600,
            color: "var(--text-color)",
          }}
        >
          {props?.data?.timeframe}
        </span>
        <span
          className="text-lg mt-2 sm:mt-5"
          style={{
            fontFamily: "'Open Sans'",
            fontWeight: 600,
            color: "var(--primary-color)",
            letterSpacing: "0.5px",
            lineHeight: 2,
          }}
        >
          {props?.data?.role}
        </span>
      </div>

      <div
        className="flex flex-col flew-grow sm:ml-6 sm:mr-6 mt-2 sm:mt-0 text-2xl w-full"
        style={{ maxWidth: "800px" }}
      >
        <div className="flex flex-row items-center justify-start">
          <span
            className="text-3xl sm:text-3xl"
            style={{
              fontWeight: 700,
              color: "var(--text-color)",
            }}
          >
            {props?.data?.company}
          </span>
          {props?.data?.link && (
            <a
              href={props?.data?.link}
              className="text-2xl ml-2"
              style={{
                fontWeight: 700,
                color: "var(--primary-color)",
              }}
            >
              <HiExternalLink />
            </a>
          )}
        </div>

        {props?.data?.description && (
          <Box className="mt-5 sm:mt-6">
            <span
              className="inline-block text-xl mb-2"
              style={{
                color: "#888",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              Description:
            </span>
            <Box
              className="text-xl md:text-2xl sm:text-justify"
              sx={{
                fontWeight: 500,
                color: "var(--light-text-color)",
                lineHeight: 1.8,
                letterSpacing: "0.5px",
                fontSize: {
                  xs: "12px",
                  md: "12px",
                },
              }}
            >
              {ReactHtmlParser(props?.data?.description)}
            </Box>
          </Box>
        )}

        {props?.data?.acquiredSkills &&
          props?.data?.acquiredSkills.length > 0 && (
            <div className="flex flex-col justify-start items-start mt-4 sm:mt-6 mb-2">
              <span
                className="text-xl mb-2"
                style={{
                  color: "#888",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                Acquired Skills:
              </span>
              <span
                className="text-lg"
                style={{
                  color: "var(--text-color)",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                }}
              >
                {props?.data?.acquiredSkills.join(" • ")}
              </span>
            </div>
          )}

        {props?.data?.references && props?.data?.references.length > 0 && (
          <div className="flex flex-col mt-2 sm:mt-4 w-full">
            <span
              className="text-xl capitalize"
              style={{
                color: "#888",
                fontWeight: 700,
                letterSpacing: "0.5px",
              }}
            >
              {`References at ${props?.data?.company}:`}
            </span>
          </div>
        )}
      </div>
    </Box>
  );
};

const PortfolioEducation = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [experiences, setExperiences] = useState([]);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };

  useEffect(() => {
    document.title = "Education - Temi Ogunbanjo";
    const vName = window.localStorage.getItem("visitor_name");
    const lastUsedTheme = window.localStorage.getItem("theme");
    const isDarkMode = getSavedMode();

    if (!vName) {
      setDialogContent(<VisitorAuth closeHandler={handleClose} />);
      handleOpen();
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    }

    if (lastUsedTheme !== null) {
      setTheme(lastUsedTheme);
    }
  }, [navigate]);

  useEffect(() => {
    (async () => {
      const expResponse = await fetchUserEducation(1);
      if (expResponse) {
        setLoadingExperiences(false);
        setExperiences(expResponse);
      }
    })();
  }, []);

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
        <Fade bottom cascade>
          <div
            className="cols"
            style={{ justifyContent: "center", padding: "10px" }}
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
              My Education
            </h1>
            {/* <h1
              className="main-text flex flex-row items-start"
              style={{
                marginTop: "28px",
                marginBottom: "18px",
              }}
            >
              <Link to="/home" className="-ml-3 my-3 sm:my-5 inline-block">
                <LeftIcon />
              </Link>
              <span className="ml-5 inline-block"></span>
            </h1> */}
            <Typography
              component="h3"
              className="inline align-center mt-3"
              sx={{ fontSize: { xs: "18px", sm: "24px" } }}
            >
              <span
                className="mr-3"
                style={{
                  letterSpacing: "0px",
                  color: "var(--light-text-color)",
                }}
              >
                I have learnt
              </span>
              <TypeAnimation
                sequence={[
                  "Basic-to-Complex Analytical Reasoning",
                  1000,
                  "How To Focus, Study, and Learn",
                  1000,
                  "Dedication & Discipline",
                  1000,
                  "Team work & Responsibility",
                  1000,
                  "How To Think & Learn Faster",
                  1000,
                  "How To Be Independent",
                  1000,
                  "Machine Design & Fabrication",
                  3000,
                  () => {},
                ]}
                wrapper="span"
                speed={35}
                deletionSpeed={68}
                cursor={true}
                repeat={Infinity}
                className=""
                style={{
                  color: "var(--primary-color)",
                  letterSpacing: "1px",
                }}
              />
            </Typography>
            <p className="py-8 text-xl sm:text-2xl" style={styles.bioStyle}>
              I embarked on an important educational journey and earned my
              Bachelor of Sciences in Mechanical Engineering from University of
              Lagos. Through immersive experiences, I gained a strong foundation
              in the STEM space. This has helped me develop vital skills like
              critical thinking, problem-solving, and effective communication.
              By taking a well-rounded approach, I gained a broad perspective
              and sharpened my ability to adapt, think creatively, and bounce
              back from challenges. This journey ignited my love for continuous
              learning and prepared me to excel in my endeavours.
            </p>
          </div>
        </Fade>
      </section>

      {/* EXPERIENCES */}
      <Fade>
        <section className="education-container flex flex-col items-left pb-12 pt-8 md:pt-8">
          <h2
            className="mb-10 left-headings"
            style={{
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Formal Education • Timelines
          </h2>

          <div className="flex flex-col mt-2 pl-6">
            {!loadingExperiences ? (
              (showAllExperiences
                ? experiences.filter((exp) => exp.tags.includes("formal"))
                : experiences
                    .filter((exp) => exp.tags.includes("formal"))
                    .slice(0, 4)
              ).map((each, i) => {
                return <EducationCard key={i} data={each} />;
              })
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>

          {experiences.filter((exp) => exp.tags.includes("formal")).length >
            4 && (
            <CustomButton
              onClick={() => {
                setShowAllExperiences((prev) => !prev);
              }}
              className="mt-12 mx-auto"
              value={
                <span
                  className="flex flex-row items-center text-center uppercase"
                  style={{ color: "#fff" }}
                >
                  <span>
                    {!showAllExperiences
                      ? `Show ${experiences.length - 2} more`
                      : "Show less"}
                  </span>
                  <i
                    className="ml-3 animate-bounce"
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                    }}
                  >
                    {!showAllExperiences ? (
                      <FaAngleDoubleDown />
                    ) : (
                      <FaAngleDoubleUp />
                    )}
                  </i>
                </span>
              }
              sx={{
                backgroundColor: "var(--primary-color)",
                boxShadow: "none",
                color: "#fff",
              }}
            />
          )}
        </section>
      </Fade>

      {/* EXPERIENCES */}
      <Fade>
        <section
          className="education-container flex flex-col items-left pb-12 pt-8 md:pt-8"
          style={{ marginBottom: 0 }}
        >
          <h2
            className="mb-10 right-headings"
            style={{
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Self Education • Timelines
          </h2>

          <div className="flex flex-col mt-2 pl-6">
            {!loadingExperiences ? (
              (showAllExperiences
                ? experiences.filter((exp) => exp.tags.includes("self"))
                : experiences
                    .filter((exp) => exp.tags.includes("self"))
                    .slice(0, 4)
              ).map((each, i) => <EducationCard key={i} data={each} />)
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>

          {experiences.filter((exp) => exp.tags.includes("self")).length >
            4 && (
            <CustomButton
              onClick={() => {
                setShowAllExperiences((prev) => !prev);
              }}
              className="mt-12 mx-auto"
              value={
                <span
                  className="flex flex-row items-center text-center uppercase"
                  style={{ color: "#fff" }}
                >
                  <span>
                    {!showAllExperiences
                      ? `Show ${experiences.length - 2} more`
                      : "Show less"}
                  </span>
                  <i
                    className="ml-3 animate-bounce"
                    style={{
                      fontSize: "16px",
                      color: "#fff",
                    }}
                  >
                    {!showAllExperiences ? (
                      <FaAngleDoubleDown />
                    ) : (
                      <FaAngleDoubleUp />
                    )}
                  </i>
                </span>
              }
              sx={{
                backgroundColor: "var(--primary-color)",
                boxShadow: "none",
                color: "#fff",
              }}
            />
          )}
        </section>
      </Fade>

      <Dialog open={openModal} onClose={handleClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};

const styles = {
  bioStyle: {
    textAlign: "justify",
    fontWeight: 400,
    color: "var(--light-text-color)",
    lineHeight: 2.25,
  },
  iconStyles: { fontSize: "20px", marginBottom: "10px" },
  tabStyles: {
    fontFamily: "Poppins, Roboto,'Open Sans', Montserrat, san-serif",
    color: "var(--light-text-color)",
    fontSize: "14px",
    py: "6px",
    textTransform: "capitalize",
  },
};

export default PortfolioEducation;
