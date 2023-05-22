import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from "@mui/material/styles";
import { Box, Tab, Tabs } from "@mui/material";
import {
  CgArrowLongDown as DownArrowIcon,
  // CgChart,
  // CgCodeSlash,
  CgPathOutline as CallIcon,
} from "react-icons/cg";
// import { IoApps, IoColorPaletteOutline, IoCube } from "react-icons/io5";
// import { AiOutlineTool } from "react-icons/ai";
// import { TbSlideshow } from "react-icons/tb";
// import { SiMlflow } from "react-icons/si";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

import { PieChart } from "react-minimal-pie-chart";
import ReactHtmlParser from "html-react-parser";
import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";

import CustomButton from "../../components/common/Button";
import TabPanel from "../../components/common/TabPanel";

import { fetchUserExperiences, fetchUserProject, fetchUserSkills } from "../../database";
import { getRandomItem } from "../../utils";
// import Status from "../../components/common/StatusIndicator";
import Spinner from "../../components/common/Spinner";
import { useNavigate } from "react-router-dom";

const SkillCard = (props) => {
  const [skillPieWidth, skillPieHeight] = [25, 25];

  return (
    <div
      className="card flex flex-row mx-4"
      style={{
        borderRadius: "8px",
      }}
    >
      <div className="flex flex-col">
        <div className="rows img-wrapper">
          <b
            className="text-center"
            style={{
              margin: 0,
              color: "var(--text-color)",
              fontSize: "15px",
            }}
          >
            {props.data?.name}
          </b>
        </div>
        <span className="mt-3 capitalize">{props.data?.tags[0]}</span>
      </div>

      <div className="">
        <PieChart
          totalValue={100}
          radius={skillPieWidth / 2 - 2}
          segmentsShift={(index) => (index !== 0 ? 0.5 : 0.5)}
          viewBoxSize={[skillPieWidth, skillPieHeight]}
          center={[skillPieWidth / 2, skillPieHeight / 2]}
          startAngle={-90}
          animate
          // lengthAngle={90}
          // label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          // labelStyle={{
          //   fontSize: '6px',
          //   fill: 'var(--text-color)'
          // }}
          paddingAngle={5}
          lineWidth={20}
          data={[
            {
              title: "Mastered",
              value: props.data?.level * 10,
              color: ((grade) => {
                switch (true) {
                  case grade >= 0 && grade < 3.33:
                    return "crimson";

                  case grade >= 3.33 && grade < 6.67:
                    return "orange";

                  case grade >= 6.67:
                    return "#5fc754";

                  default:
                    return grade.color || "#E38627";
                }
              })(props.data?.level),
            },
            {
              title: "Unmastered",
              value: 100 - props.data?.level * 10,
              color: "#555",
            },
            // { title: 'Three', value: 10, color: '#6A2135' },
          ]}
          style={{ height: "60px", marginLeft: "15px" }}
        />
      </div>
    </div>
  );
};

const PortfolioIndex = () => {
  const navigate = useNavigate();
  const [showProfilePic, setShowProfilePic] = useState(false);

  const [loadingSkills, setLoadingSkills] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skills, setSkills] = useState([]);

  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [experiences, setExperiences] = useState([]);

  const [showAllProjects, setShowAllProjects] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  const [tabIndex, setTabIndex] = useState(1);

  const quotePause = 1500;
  const quoteSequence = [
    [
      "A wise man once said:",
      quotePause,
      "A wise man once said: 'Someone to love",
      quotePause,
      "A wise man once said: 'Someone to love, something to hope for",
      quotePause,
      "A wise man once said: 'Someone to love, something to hope for and something to do",
      quotePause,
      "A wise man once said: 'Someone to love, something to hope for and something to do is the true formula to happiness'.",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ],
    [
      "In the quest for learning...",
      quotePause,
      "In the quest for learning, we should not neglect the importance of unlearning...",
      quotePause,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute...",
      quotePause,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is...",
      quotePause,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is, the harder it will be to re-learn.",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ],
    [
      "The expectations of an outcome...",
      quotePause,
      "The expectations of an outcome produces a manifestation...",
      quotePause,
      "The expectations of an outcome produces a manifestation that would, in time, become your new reality.",
      quotePause,
      "The expectations of an outcome produces a manifestation that would, in time, become your new reality. We should guard our heart and minds with all our might...",
      quotePause,
      "The expectations of an outcome produces a manifestation that would, in time, become your new reality. We should guard our heart and minds with all our might as it would surely produce something with what you put into it",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ],
  ];

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    const vName = window.localStorage.getItem('visitor_name');
    if (!vName) {
      navigate('/');
    }
  });

  useEffect(() => {
    (async () => {
      // setLoadingProjects(false);
      const projResponse = await fetchUserProject(1);
      if (projResponse) {
        setLoadingProjects(false);
        setProjects(projResponse);
      }

      const skillResponse = await fetchUserSkills(1);
      if (skillResponse) {
        setLoadingSkills(false);
        setSkills(skillResponse);
      }

      const expResponse = await fetchUserExperiences(1);
      if (expResponse) {
        setLoadingExperiences(false);
        setExperiences(expResponse);
      }
    })();
  }, []);

  const filterSkills = (tabI) => {
    let retValue = skills;
    switch (tabI) {
      case 0: // Interpersonal Skilss
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.search(/interpersonal/gi) >= 0);

          return relatedTags.length > 0;
        });

      case 1: // Web Development
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.search(/web development/gi) >= 0);

          return relatedTags.length > 0;
        });

      case 2: // Database
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.search(/database/gi) >= 0);

          return relatedTags.length > 0;
        });

      case 3: // Version Control
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter((tag) => tag.search(/vcs/gi) >= 0);

          return relatedTags.length > 0;
        });

      case 4: // Graphics design & Animations
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter(
              (tag) => tag.search(/graphics|graphics design|animation/gi) >= 0
            );

          return relatedTags.length > 0;
        });

      case 5: // others
        return retValue.filter((each) => {
          const relatedTags = each.tags
            .map((tag) => tag.toLowerCase())
            .filter(
              (tag) =>
                tag.search(
                  /interpersonal|web development|database|vcs|graphics|graphics design|animation/gi
                ) >= 0
            );

          return relatedTags.length === 0;
        });

      default:
        return retValue;
    }
  };

  return (
    <>
      <section
        className="hero flex flex-col sm:flex-row relative"
        style={
          {
            // backgroundImage:
            //   "linear-gradient(rgba(160, 160, 160, 0.1), rgba(160, 160, 160, 0.06)), url(../../assets/images/New.svg)",
          }
        }
      >
        <Fade cascade>
          <div
            className="cols"
            style={{ justifyContent: "center", padding: "10px" }}
          >
            <h1 className="main-text">I am Temiloluwa Ogunbanjo</h1>
            <h3
              className="flex flex-row align-center"
              style={{ fontSize: "24px" }}
            >
              <span
                className="mr-2"
                style={{ letterSpacing: "0px", color: "var(light-text-color)" }}
              >
                I am a
              </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer!",
                  1000, // Waits 1s
                  "Graphics Designer!",
                  1000, // Waits 2s
                  "3D Animator!",
                  1000, // Waits 2s
                  "Part-time Therapist!",
                  3000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                speed={35}
                deletionSpeed={68}
                cursor={true}
                repeat={Infinity}
                className=""
                style={{
                  color: "var(--tab-notice-bgcolor)",
                  letterSpacing: "1px",
                }}
              />
            </h3>

            <p
              className="py-8"
              style={{
                fontSize: "14px",
                color: "var(--text-color)",
                lineHeight: 2,
                maxWidth: "700px",
              }}
            >
              {`I am a Fullstack Software Developer with ${
                new Date().getFullYear() - 2019
              } years of professional experience using M.E.R.N. (MongoDB, Express, ReactJS, NodeJS) stack, building RESTful APIs, managing various databases (NoSQL, ORM, Amazon RDS, and RDBMS) and building modern and scalable frontend solutions. I am also a part-time graphics designer, animator, and finally, a recent graduate of the University of Lagos.`}
            </p>

            <div
              className="flex flex-row pt-10 mx-auto sm:mx-0"
              style={{ paddingTop: "40px" }}
            >
              <a href="#skill-section">
                <CustomButton
                  className="border"
                  value={
                    <span
                      className="flex flex-row items-center"
                      style={{ color: "var(--text-color)" }}
                    >
                      <i
                        className="mr-3 animate-bounce"
                        style={{
                          fontSize: "26px",
                        }}
                      >
                        <DownArrowIcon />
                      </i>
                      <span>Scroll Down</span>
                    </span>
                  }
                  sx={{
                    boxShadow: "none",
                    color: "#393A4A",
                  }}
                />
              </a>

              <a href="tel:+2349059620514">
                <CustomButton
                  className="ml-9"
                  value={
                    <span
                      className="flex flex-row items-center"
                      style={{ color: "#222" }}
                    >
                      <i
                        className="mr-3"
                        style={{
                          fontSize: "26px",
                        }}
                      >
                        <CallIcon />
                      </i>
                      <span>Contact Me!</span>
                    </span>
                  }
                  sx={{
                    backgroundColor: "var(--tab-notice-bgcolor)",
                    boxShadow: "none",
                  }}
                />
              </a>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="flex flex-col user-profile-section">
            {/* <div
              className="rows center"
              style={{ width: "100%", alignItems: "center" }}
            >
              <input
                className="strip-btn lg-100"
                style={{
                  fontWeight: 400,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
                placeholder="Leave a comment"
              />
              <button className="strip-btn material-black user-status">
                <i className="icofont-ui-love"></i>
              </button>
            </div> */}
            <blockquote>
              <TypeAnimation
                sequence={getRandomItem(quoteSequence)}
                wrapper="span"
                speed={35}
                deletionSpeed={88}
                cursor={true}
                repeat={0}
                className="user-details text-justify"
                style={{
                  fontFamily: "monospace",
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  margin: "1.8rem 0 0",
                }}
              />
            </blockquote>
            <div
              className="flex flex-row img-wrapper mt-14 transition-all ease-in"
              style={{
                opacity: showProfilePic ? 1 : 0,
              }}
            >
              <img
                className="user-profile-picture"
                src={require("../../assets/images/Me.jpeg")}
                alt="Temiloluwa"
                width="120"
                height="120"
              />
            </div>

            <i
              className="user-last-seen text-center"
              style={{ margin: "1.8rem 0 0", fontSize: "1rem", width: "100%" }}
            >
              {`Last updated on ${new Date(2023, 1, 6).toDateString()}`}
            </i>
          </div>
          {/* <div className="background-illuminator"></div> */}
        </Fade>
      </section>

      {/* MY SKILLS */}
      <Fade bottom cascade>
        <section id="skill-section" className="skills flex flex-col">
          <h2
            className="subtitle center-headings"
            style={{
              // fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Skills & Technical Knowledge
          </h2>

          <div className="flex flex-col mt-2 flex-wrap sm:flex-nowrap w-full">
            {/* <div className="w-1/2"></div> */}
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Skills Tab"
              orientation="horizontal"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                width: "100%",
                mb: 2,
                color: "var(--text-color)",
                borderBottom: "1px solid #333",
              }}
            >
              <Tab
                label="Inter-Personal Skills"
                sx={{ ...styles.tabStyles, display: "none" }}
              />
              <Tab label="Web Development" sx={styles.tabStyles} />
              <Tab label="Database Management" sx={styles.tabStyles} />
              <Tab label="Version Controls" sx={styles.tabStyles} />
              <Tab
                label="3D Animations & Graphics Design"
                sx={styles.tabStyles}
              />
              <Tab label="Others" sx={styles.tabStyles} />
            </Tabs>

            {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
            {[0, 1, 2, 3, 4, 5].map((each, index) => (
              <TabPanel
                key={index}
                index={each}
                currentTabIndex={tabIndex}
                sx={{ display: each === 0 ? "none" : "initial" }}
              >
                {!loadingSkills ? (
                  <div className="flex flex-row flex-wrap w-4/7">
                    {(showAllSkills
                      ? filterSkills(tabIndex)
                      : filterSkills(tabIndex).slice(0, 9)
                    ).map((eachSkill) => (
                      <SkillCard data={eachSkill} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center w-4/7">
                    <Spinner />
                  </div>
                )}
              </TabPanel>
            ))}
          </div>

          {filterSkills(tabIndex).length > 9 && (
            <CustomButton
              onClick={() => {
                setShowAllSkills((prev) => !prev);
              }}
              className="border mt-8"
              value={
                <span
                  className="flex flex-row items-center"
                  style={{ color: "var(--text-color)" }}
                >
                  <span>
                    {!showAllSkills
                      ? `Show ${filterSkills(tabIndex).length - 9} more`
                      : "Show less"}
                  </span>
                  <i
                    className="ml-3 animate-bounce"
                    style={{
                      fontSize: "16px",
                      color: "var(--light-text-color)",
                    }}
                  >
                    {!showAllSkills ? (
                      <FaAngleDoubleDown />
                    ) : (
                      <FaAngleDoubleUp />
                    )}
                  </i>
                </span>
              }
              sx={{
                boxShadow: "none",
                color: "#393A4A",
              }}
            />
          )}
        </section>
      </Fade>

      {/* EXPERIENCES */}
      <Fade bottom cascade>
        <section
          className="experiences flex flex-col items-left pb-12 pt-8"
          style={{
            backgroundImage:
              "linear-gradient(-45deg, rgba(160, 160, 160, 0.1), rgba(160, 160, 160, 0.05))",
          }}
        >
          <h2
            className="mb-10 right-headings"
            style={{
              // fontSize: "26px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Professional Experiences
          </h2>

          <div className="flex flex-col mt-2">
            {!loadingExperiences ? (
              (showAllExperiences ? experiences : experiences.slice(0, 2)).map(
                (each) => (
                  <Box
                    component="div"
                    className={`card flex flex-col sm:flex-row mb-14 sm:mb-8 pl-8 my-3 -ml-1`}
                    sx={{
                      borderLeft: "2px solid #333",
                      transition: "all 0.3s ease-in",
                      "&:hover": {
                        borderLeft: "2px solid #efefef",
                      },
                    }}
                  >
                    <div className="flex flex-col mr-8 h-auto timeline-section">
                      <span
                        className="text-xl sm:text-2xl"
                        style={{
                          fontWeight: 700,
                          color: "var(--light-text-color)",
                        }}
                      >
                        {each.timeframe}
                      </span>
                      <span
                        className="text-lg mt-2 sm:mt-5"
                        style={{
                          fontFamily: "Montserrat, 'Open Sans'",
                          fontWeight: 600,
                          color: "var(--tab-notice-bgcolor)",
                          // letterSpacing: "1px",
                          lineHeight: 2,
                        }}
                      >
                        {each.role}
                      </span>
                    </div>

                    <div
                      className="flex flex-col flew-grow sm:ml-8 mt-5 sm:mt-0 text-2xl w-full"
                      style={{ maxWidth: "900px" }}
                    >
                      <div className="flex flex-row items-center justify-start mb-1 sm:mb-4">
                        <span
                          className="text-4xl"
                          style={{
                            fontWeight: 400,
                            color: "var(--text-color)",
                          }}
                        >
                          {each.company}
                        </span>
                        {each.link && (
                          <a
                            href={each.link}
                            className="text-2xl ml-2"
                            style={{
                              fontWeight: 700,
                              color: "var(--tab-notice-bgcolor)",
                            }}
                          >
                            <HiExternalLink />
                          </a>
                        )}
                      </div>

                      {each.relatedSkills && each.relatedSkills.length > 0 && (
                        <div className="flex flex-row justify-start items-center mt-3 sm:mt-2.5">
                          <span
                            className="mb-2 text-lg"
                            style={{
                              // fontSize: "12px",
                              color: "#888",
                              fontWeight: 400,
                              // fontFamily: "Montserrat, 'Open Sans'",
                              letterSpacing: "1px"
                              // color: "var(--text-color)",
                            }}
                          >
                            Related Skills: {each.relatedSkills.join(" • ")}
                          </span>
                          {/* <div className="flex flex-row items-center justify-start">
                            <span
                              style={{
                                color: "#777",
                                minWidth: "100px",
                                fontSize: "12px",
                                fontWeight: 600,
                                fontFamily: "Montserrat, 'Open Sans'",
                              }}
                            >
                              {each.relatedSkills.join(" • ")}
                            </span>
                          </div> */}
                        </div>
                      )}

                      <div className="grid grid-cols-6 gap-6 w-full">
                        {each.images &&
                          each.images.map((eachImg) => (
                            <img className="rounded-lg" src={eachImg} alt="#" />
                          ))}
                      </div>
                      <div
                        className="mt-2 text-xl md:text-2xl sm:mt-2"
                        style={{
                          // fontFamily: "Nunito",
                          // fontSize: "1.25rem",
                          fontWeight: 400,
                          color: "var(--light-text-color)",
                          lineHeight: 1.8,
                        }}
                      >
                        {ReactHtmlParser(each.description)}
                      </div>
                    </div>
                  </Box>
                )
              )
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Spinner />
              </div>
            )}
          </div>

          {experiences.length > 2 && (
            <CustomButton
              onClick={() => {
                setShowAllExperiences((prev) => !prev);
              }}
              className="border mt-8 mx-auto"
              value={
                <span
                  className="flex flex-row items-center"
                  style={{ color: "var(--text-color)" }}
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
                      color: "var(--light-text-color)",
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
                boxShadow: "none",
                color: "#393A4A",
              }}
            />
          )}
        </section>
      </Fade>

      {/* MY Projects */}
      <Fade bottom cascade>
        <section
          className="projects flex flex-col py-12 mb-10"
          style={{
            minHeight: "unset",
            // backgroundImage:
            //   "radial-gradient(ellipse, rgb(182, 49, 82) 40%, var(--tab-border-color))",
          }}
        >
          <h2
            className="mb-5 subtitle left-headings"
            style={{
              // fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Some Cool Projects
          </h2>

          <div className="flex flex-row flex-wrap justify-center">
            {!loadingProjects ? (
              (showAllProjects ? projects : projects.slice(0, 9)).map(
                (eachProj, index) => (
                  <div
                    className={`flex py-12 mb-4 ${
                      index % 2 === 0
                        ? "flex-col sm:flex-row"
                        : "flex-col sm:flex-row-reverse"
                    } items-center md:items-center`}
                    style={{
                      // borderRadius: "5px",
                      width: "100%",
                    }}
                  >
                    <Box
                      className={`${
                        index % 2 === 0 ? "mr-0 sm:mr-12" : "ml-0 sm:ml-12"
                      } border mb-10 sm:mb-0`}
                      sx={{
                        width: {
                          xs: "100%",
                          md: "50vw",
                        },
                        height: "250px",
                        maxWidth: {
                          xs: "unset",
                          sm: "400px",
                        },
                        borderRadius: "8px",
                        overflow: "hidden",
                        border: { sm: "1px solid #ccc", xs: "1px solid #555" },
                        // border: "1px solid #ccc",
                      }}
                    >
                      {eachProj?.content?.[0]?.type === "video" && (
                        <ReactPlayer
                          url={eachProj?.content?.[0]?.url || ""}
                          controls={true}
                          width={"100%"}
                          height={"100%"}
                          // style={{ width: "250px", height: "250px" }}
                        />
                      )}
                      {/* <video
                          controls
                         
                          
                        >
                          <source src={eachProj?.content?.[0]?.url || ""} type="video/webm" />
                          Sorry, your browser doesn't support videos.
                        </video> */}

                      {eachProj?.content?.[0]?.type === "image" && (
                        <img
                          src={eachProj?.content?.[0]?.url || ""}
                          alt={eachProj.name}
                          style={{ width: "calc(100% - 1px)", height: "100%" }}
                        />
                      )}
                    </Box>

                    <div className="flex flex-col w-full px-6 pb-6">
                      <div className="rows img-wrapper">
                        <b
                          className="text-4xl"
                          style={{
                            margin: 0,
                            color: "var(--text-color)",
                            fontWeight: 400,
                          }}
                        >
                          {eachProj.name}
                        </b>
                      </div>
                      <span
                        className="mt-3 capitalize"
                        style={{
                          color: "var(--light-text-color)",
                          fontWeight: 400,
                          opacity: 0.8,
                        }}
                      >
                        {eachProj.tag}
                      </span>
                      <p
                        className="mt-3 text-xl md:text-2xl"
                        style={{
                          color: "var(--text-color)",
                          fontWeight: 400,
                          lineHeight: 1.8,
                          maxWidth: "600px",
                        }}
                      >
                        {eachProj.description}
                      </p>
                    </div>
                  </div>
                )
              )
            ) : (
              <Spinner />
            )}
          </div>

          {/* <CustomButton
            onClick={() => {
              setShowAllSkills((prev) => !prev);
            }}
            className="border mt-8"
            value={
              <span
                className="flex flex-row items-center"
                style={{ color: "var(--text-color)" }}
              >
                <span>
                  {!showAllSkills
                    ? `Show ${skills.length - 9} more`
                    : "Show less"}
                </span>
                <i
                  className="ml-3 animate-bounce"
                  style={{
                    fontSize: "16px",
                    color: "var(--light-text-color)",
                  }}
                >
                  {!showAllSkills ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
                </i>
              </span>
            }
            sx={{
              boxShadow: "none",
              color: "#393A4A",
            }}
          /> */}
        </section>
      </Fade>
    </>
  );
};

const styles = {
  iconStyles: { fontSize: "20px", marginBottom: "10px" },
  tabStyles: {
    color: "var(--light-text-color)",
    fontSize: "14px",
    py: "6px",
    textTransform: "capitalize",
  },
};

export default PortfolioIndex;
