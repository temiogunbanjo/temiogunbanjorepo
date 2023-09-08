import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import {
  Box,
  Collapse,
  Grid,
  Link,
  Stack,
  Tab,
  TextField,
} from "@mui/material";

import { AiFillSetting, AiOutlineSearch } from "react-icons/ai";
import { BiFilter as FilterIcon } from "react-icons/bi";
import { CgArrowLongDown as DownArrowIcon } from "react-icons/cg";

import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleRight,
} from "react-icons/fa";

import { BsPenFill, BsTelephoneFill as PhoneIcon } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import Fade from "@successtar/react-reveal/Fade";
import { TypeAnimation } from "react-type-animation";
// import { Fade as AwesomeFade } from "react-awesome-reveal";

import {
  fetchUserExperiences,
  fetchUserProject,
  fetchUserSkills,
} from "../../database";

import { Explorer, SkillInfo, VisitorAuth } from "./ModalContents";

import {
  delay,
  getRandomItem,
  getSavedMode,
  loadLocalFile,
  setDarkMode,
  setTheme,
} from "../../utils";

import Dialog from "../../components/common/Dialog";
import TabPanel from "../../components/common/TabPanel";
import CustomButton from "../../components/common/Button";
import CustomSelect from "../../components/common/Select";
import SkillCard from "../../components/Cards/SkillsCard";
import EmptyState from "../../components/common/EmptyState";
import ResponsiveTab from "../../components/common/ResponsiveTab";
import ExperienceCard from "../../components/Cards/ExperienceCard";

import { WINDOW_LOAD_TIME, quoteSequence } from "../../database/globals";
import Image from "../../components/common/Image";
import StyledAvatar from "../../components/common/StyledAvatar";
import HomeApp from "../../components/HomeApp";
import FolderApp from "../../components/FolderApp";
import Window from "../../components/Window";

const PortfolioIndexOld = () => {
  const navigate = useNavigate();
  const [isLayman, setIsLayman] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const [showProfilePic, setShowProfilePic] = useState(false);

  const [skills, setSkills] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skillSearchQuery, setSkillSearchQuery] = useState("");
  const skillSearchRef = useRef();

  const [experiences, setExperiences] = useState([]);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  const [showAllProjects] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  const [expIntoSkills, setExpIntoSkills] = useState({});

  const [tabIndex, setTabIndex] = useState(1);

  const MAX_SKILLS_DISPLAYED = 6;

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSkillClick = (data, expSkills) => (ev) => {
    handleOpen(ev);
    setDialogContent(
      <SkillInfo
        data={data}
        experiences={expSkills}
        closeHandler={handleClose}
      />
    );
  };

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
  }, [navigate]);

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

    // console.log(skillSearchRef);
  }, []);

  useEffect(() => {
    const e2S = {};
    experiences.forEach((exp) => {
      if (exp.relatedSkills) {
        exp.relatedSkills.forEach((skill) => {
          skill = skill.toLowerCase();
          if (!e2S[skill]) {
            e2S[skill] = [exp];
          } else {
            e2S[skill].push(exp);
          }
        });
      }
    });

    setExpIntoSkills(e2S);
  }, [experiences]);

  const filterSkills = useCallback(
    (tabI) => {
      let retValue = skills;
      const queryFilterCallback = (each) => {
        // Search by keyword
        const query = skillSearchQuery.replace(/\.js/gi, "js");
        const isAMatch =
          each?.name?.toLowerCase()?.match(new RegExp(`${query}`, "gi")) !==
          null;
        return isAMatch;
      };

      switch (tabI) {
        case 0: // Interpersonal Skilss
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/interpersonal/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 1: // Mobile & Web Development
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/web development|mobile/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 2: // Cloud Provider
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/cloud/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 3: // Database
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/database/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 4: // Version Control
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/vcs/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 5: // Graphics design & Animations
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter(
                  (tag) =>
                    tag.search(/graphics|graphics design|animation/gi) >= 0
                );

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 6: // others
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter(
                  (tag) =>
                    tag.search(
                      /interpersonal|web development|database|vcs|graphics|graphics design|animation/gi
                    ) >= 0
                );

              return relatedTags.length === 0;
            })
            .filter(queryFilterCallback);

        default:
          return retValue.filter(queryFilterCallback);
      }
    },
    [skillSearchQuery, skills]
  );

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
        <div
          className="cols sm:mr-12"
          style={{ justifyContent: "center", padding: "10px" }}
        >
          <h1 className="main-text" style={{ fontSize: "5rem" }}>
            <span style={{ fontSize: "28px", fontWeight: 600 }}>Who is </span>
            <br />
            <span style={{}}>Temiloluwa Ogunbanjo ?</span>
          </h1>

          <h3
            className="inline-block mt-8 sm:mt-6"
            style={{ fontSize: "24px" }}
          >
            <span
              className="mr-3"
              style={{
                letterSpacing: "0px",
                color: "var(--light-text-color)",
              }}
            >
              I am a
            </span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer!",
                1000,
                "Graphics Designer!",
                1000,
                "3D Animator!",
                1000,
                "Part-time Therapist!",
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
          </h3>

          {isLayman ? (
            <Fade>
              <p className="py-8 text-xl" style={styles.bioStyle}>
                {`Meet a dynamic full-stack software developer with a passion for innovation and ${
                  new Date().getFullYear() - 2019
                } years of hands-on experience crafting robust RESTful APIs using the powerful M.E.R.N. (MongoDB, ExpressJS, React.Js, NodeJS) stack. With an artistic flair as a part-time graphics designer and animator, I bring creativity and adaptability to every project. As a recent graduate of the esteemed University of Lagos, I am eager to leverage my skills to build cutting-edge, scalable solutions that leave a lasting impact. Let's code the future together!`}
              </p>
            </Fade>
          ) : (
            <Fade>
              <p className="py-8 text-xl" style={styles.bioStyle}>
                {`With an illustrious ${
                  new Date().getFullYear() - 2019
                }-year journey as a Fullstack Software
            Developer, I exude a charismatic blend of expertise in crafting
            impeccable RESTful APIs using the formidable M.E.R.N. stack
            (MongoDB, Express, ReactJS, NodeJS). My adeptness extends to
            seamlessly navigating a diverse array of databases encompassing
            NoSQL, ORM, Amazon RDS, and RDBMS, while consistently delivering
            cutting-edge and scalable full stack solutions. As a testament to my
            multifaceted nature, I also channel my creative prowess as a
            part-time graphics designer and animator, all crowned by my recent
            graduation from the esteemed University of Lagos.`}{" "}
                <span
                  onClick={() => {
                    setIsLayman(true);
                  }}
                  style={{
                    cursor: "pointer",
                    color: "var(--primary-color)",
                  }}
                >
                  Translate to English?
                </span>
              </p>
            </Fade>
          )}

          <div
            className="flex flex-col sm:flex-row pt-10 sm:mx-0"
            style={{ paddingTop: "40px" }}
          >
            <a
              href="tel:+2349059620514"
              className="mb-6 sm:mr-12 w-full sm:w-1/3 block"
              style={{ minWidth: "150px" }}
            >
              <CustomButton
                className="w-full h-full"
                value={
                  <span
                    className="flex flex-row items-center justify-center text-center uppercase"
                    style={{ color: "var(--contrast-text-color)" }}
                  >
                    <PhoneIcon
                      className="mr-3"
                      style={{
                        fontSize: "16px",
                      }}
                    />

                    <span>Let's Chat!</span>
                  </span>
                }
                sx={{
                  border: "2px solid var(--primary-color)",
                  // opacity: 0.95,
                  backgroundColor: "var(--primary-color)",
                  boxShadow: "none",
                }}
              />
            </a>

            <a
              href="#skill-section"
              className="mb-6 w-full sm:w-1/3 block"
              style={{ minWidth: "150px" }}
            >
              <CustomButton
                className="border-2 w-full"
                value={
                  <span
                    className="flex flex-row items-center justify-center text-center uppercase"
                    style={{ color: "var(--primary-color)" }}
                  >
                    <i
                      className="mr-3 animate-bounce"
                      style={{
                        fontSize: "26px",
                        // color: "#78ffdf"
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
                  borderColor: "var(--primary-color)",
                }}
              />
            </a>
          </div>
        </div>

        <Fade right cascade>
          <div className="flex flex-col user-profile-section overflow-hidden shadow-md sm:shadow-none">
            <div
              className="w-full flex flex-row img-wrapper mt-0 mb-12 transition-all ease-in"
              style={{
                opacity: showProfilePic ? 1 : 0,
              }}
            >
              <Image
                className="user-profile-picture shadow-lg sm:shadow-none"
                src={require("../../assets/images/Me.jpeg")}
                alt="Temiloluwa"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>

            <h2
              className="text-3xl capitalize text-left w-full mb-6"
              style={{
                fontFamily: 'Poppins, "Open Sans"',
                color: "var(--text-color)",
                fontWeight: 500,
              }}
            >
              Thought of the Day:
            </h2>
            <blockquote className="w-full">
              <TypeAnimation
                sequence={getRandomItem(
                  quoteSequence(() => {
                    console.log("Done typing!");
                    setShowProfilePic(true);
                  })
                )}
                wrapper="span"
                speed={35}
                deletionSpeed={88}
                cursor={true}
                repeat={0}
                className="text-center sm:text-justify"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 2,
                  margin: "1rem 0 0",
                }}
              />
            </blockquote>
            <Collapse
              orientation="vertical"
              in={showProfilePic}
              timeout={600}
              className="w-full mt-auto"
            >
              <i
                className="inline-block text-right"
                style={{
                  margin: "2.8rem 0 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--light-text-color)",
                  width: "100%",
                  opacity: showProfilePic ? 1 : 0,
                }}
              >
                {`Last updated on ${new Date(2023, 7, 2).toDateString()}`}
              </i>
            </Collapse>
          </div>
        </Fade>
        {/* <div className="background-illuminator"></div> */}
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

          <span
            className="-mt-10 mb-12 text-center text-xl"
            style={{
              color: "var(--light-text-color)",
              fontWeight: 400,
              opacity: 0.8,
              lineHeight: 1.8,
              maxWidth: "650px",
            }}
          >
            This section showcases my technical expertise and proficiency in
            programming languages, frameworks, tools, and technologies. It
            demonstrates my problem-solving abilities, analytical skills, and
            commitment to continuous learning. Explore this section to gain
            insight into the technical knowledge and capabilities that enable me
            to deliver innovative solutions.
          </span>

          <div className="flex flex-col flex-wrap sm:flex-nowrap w-full">
            <ResponsiveTab
              value={tabIndex}
              onChange={handleTabChange}
              sx={{
                mb: 2,
                width: "100%",
                color: "var(--text-color)",
                borderBottom: "1px solid var(--border-line-color)",
              }}
            >
              <Tab
                label="Inter-Personal Skills"
                sx={{ ...styles.tabStyles, display: "none" }}
              />
              <Tab label="Mobile & Web Development" sx={styles.tabStyles} />
              <Tab label="Cloud Provider" sx={styles.tabStyles} />
              <Tab label="Database Management" sx={styles.tabStyles} />
              <Tab label="Version Controls" sx={styles.tabStyles} />
              <Tab
                label="3D Animations & Graphics Design"
                sx={styles.tabStyles}
              />
              <Tab label="Others" sx={styles.tabStyles} />
            </ResponsiveTab>

            {[0, 1, 2, 3, 4, 5, 6].map((each, index) => (
              <TabPanel
                key={index}
                index={each}
                currentTabIndex={tabIndex}
                sx={{ display: each === 0 ? "none" : "initial" }}
              >
                <Stack
                  direction="row"
                  justifyContent={"space-between"}
                  alignItems="center"
                  className="bordr"
                  sx={{
                    marginBottom: { xs: "15px", sm: "15px" },
                  }}
                >
                  <TextField
                    ref={skillSearchRef}
                    onChange={(ev) => setSkillSearchQuery(ev.target.value)}
                    // onFocus={() => }
                    value={skillSearchQuery}
                    placeholder="Search for a skill"
                    variant="outlined"
                    className="text-xl block py-0"
                    InputProps={{
                      endAdornment: (
                        <AiOutlineSearch style={{ fontSize: "20px" }} />
                      ),
                      sx: {
                        color: "var(--text-color)",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                      inputProps: {
                        style: {
                          fontSize: "1.45rem",
                          padding: "12px 18px",
                        },
                      },
                    }}
                    sx={{
                      maxWidth: "450px",
                      minWidth: { xs: "150px", md: "300px" },
                      width: "100%",
                      "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "var(--border-line-color)",
                          borderWidth: "1px",
                        },
                    }}
                  />

                  <Stack direction="row" alignItems={"center"} sx={{ ml: 4 }}>
                    <FilterIcon
                      style={{
                        fontSize: "24px",
                        marginRight: "10px",
                        color: "var(--light-text-color)",
                      }}
                    />
                    <CustomSelect
                      height="34px"
                      sx={{
                        border: "1px solid var(--border-line-color)",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      }}
                      options={[]}
                    />
                  </Stack>
                </Stack>

                {!loadingSkills && filterSkills(tabIndex).length > 0 ? (
                  <div
                    className="flex flex-row justify-start flex-wrap w-full"
                    style={{ marginLeft: "-10px", width: "calc(100% + 20px)" }}
                  >
                    {(showAllSkills
                      ? filterSkills(tabIndex)
                      : filterSkills(tabIndex).slice(0, MAX_SKILLS_DISPLAYED)
                    ).map((eachSkill, i) => (
                      <SkillCard
                        key={i}
                        data={eachSkill}
                        onClick={handleSkillClick(
                          eachSkill,
                          expIntoSkills[eachSkill.name.toLowerCase()]
                        )}
                      />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    className="flex flex-col items-center justify-center w-4/7"
                    isLoading={loadingSkills}
                  />
                )}
              </TabPanel>
            ))}
          </div>

          {filterSkills(tabIndex).length > MAX_SKILLS_DISPLAYED && (
            <CustomButton
              onClick={() => {
                setShowAllSkills((prev) => !prev);
              }}
              className="mt-16"
              value={
                <span
                  className="flex flex-row items-center text-center uppercase"
                  style={{ color: "var(--contrast-text-color)" }}
                >
                  <span>
                    {!showAllSkills
                      ? `Show ${
                          filterSkills(tabIndex).length - MAX_SKILLS_DISPLAYED
                        } more`
                      : "Show less"}
                  </span>
                  <i
                    className="ml-3 animate-bounce"
                    style={{
                      fontSize: "16px",
                      color: "var(--contrast-text-color)",
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
                backgroundColor: "var(--primary-color)",
                boxShadow: "none",
                color: "#fff",
              }}
            />
          )}
        </section>
      </Fade>

      {/* EXPERIENCES */}
      <Fade bottom cascade>
        <section className="experiences flex flex-col items-left pb-12 pt-12 md:pt-8">
          <h2
            className="mb-10 right-headings"
            style={{
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Professional Experiences
          </h2>

          <div className="flex flex-col mt-2 pl-6">
            {!loadingExperiences && experiences.length > 0 ? (
              (showAllExperiences ? experiences : experiences.slice(0, 3)).map(
                (each, i) => <ExperienceCard key={i} data={each} />
              )
            ) : (
              <EmptyState
                className="flex flex-col items-center justify-center"
                isLoading={loadingExperiences}
              />
            )}
          </div>

          {experiences.length > 3 && (
            <CustomButton
              onClick={() => {
                setShowAllExperiences((prev) => !prev);
              }}
              className="mt-12 mx-auto"
              value={
                <span
                  className="flex flex-row items-center text-center uppercase"
                  style={{ color: "var(--contrast-text-color)" }}
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
                color: "var(--contrast-text-color)",
              }}
            />
          )}
        </section>
      </Fade>

      {/* My PROJECTS */}
      <Fade bottom cascade>
        <section
          className="projects flex flex-col py-12 mb-10"
          style={{
            minHeight: "unset",
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
            Featured Projects
          </h2>

          <div className="flex flex-row flex-wrap justify-center">
            {!loadingProjects && projects.length > 0 ? (
              (showAllProjects ? projects : projects.slice(0, 9)).map(
                (eachProj, index) => {
                  const isLocalImage =
                    eachProj?.content?.[0]?.type === "image" &&
                    eachProj?.content?.[0]?.url &&
                    !eachProj?.content?.[0]?.url.includes("http");

                  return (
                    <div
                      key={index}
                      className={`flex py-12 mb-4 ${
                        index % 2 === 0
                          ? "flex-col sm:flex-row"
                          : "flex-col sm:flex-row-reverse"
                      } items-center md:items-center`}
                      style={{
                        width: "100%",
                      }}
                    >
                      <Box
                        className={`${
                          index % 2 === 0 ? "mr-0 sm:mr-12" : "ml-0 sm:ml-12"
                        } mb-10 sm:mb-0`}
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
                          border: {
                            sm: "1px solid var(--border-line-color)",
                            xs: "1px solid var(--border-line-color)",
                          },
                          backgroundColor: "var(--border-line-color)",
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

                        {eachProj?.content?.[0]?.type === "image" && (
                          <Image
                            src={
                              isLocalImage
                                ? loadLocalFile(eachProj?.content?.[0]?.url)
                                : eachProj?.content?.[0]?.url || ""
                            }
                            alt={eachProj.name}
                            style={{
                              width: "calc(100% - 1px)",
                              height: "100%",
                            }}
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
                            fontWeight: 600,
                            opacity: 0.8,
                          }}
                        >
                          {eachProj.tag}
                        </span>
                        <p
                          className="mt-3 text-xl md:text-2xl"
                          style={{
                            fontSize: "14px",
                            color: "var(--light-text-color)",
                            fontWeight: 400,
                            lineHeight: 1.8,
                            maxWidth: "600px",
                          }}
                        >
                          {eachProj.description}
                        </p>

                        {eachProj.link && (
                          <Link
                            href={eachProj.link}
                            className="flex flex-row items-center text-xl mt-3"
                            style={{
                              // fontFamily: "'Open Sans'",
                              fontWeight: 600,
                              color: "var(--primary-color)",
                              lineHeight: 2,
                              textDecoration: "none",
                            }}
                          >
                            Read more{" "}
                            <FaAngleRight style={{ verticalAlign: "middle" }} />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                }
              )
            ) : (
              <EmptyState
                className="flex flex-col items-center justify-center"
                isLoading={loadingProjects}
              />
            )}
          </div>
        </section>
      </Fade>

      {/* ABOUT SITE */}
      {/* <Fade bottom cascade>
        <section id="about-section" className="skills flex flex-col">
          <h2
            className="subtitle center-headings"
            style={{
              // fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            About This Site
          </h2>

          <span
            className="-mt-10 mb-12 text-center text-2xl"
            style={{
              color: "var(--light-text-color)",
              fontWeight: 400,
              opacity: 0.8,
              lineHeight: 1.8,
              maxWidth: "650px",
            }}
          >
            This sections shows all the skills acquired all through my tech
            career. Search for the keywords to learn more about each warning.
            Search for the keywords to learn more about each warning. Search for
            the keywords to learn more about each warning.
          </span>
        </section>
      </Fade> */}

      <Dialog open={openModal} onClose={handleClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};

const AuthScreen = ({ closeHandler = () => {} }) => {
  return (
    <Stack
      id="auth_screen"
      className="h-screen w-screen items-center justify-center"
    >
      <Stack className="items-center justify-center">
        <StyledAvatar
          src={require("../../assets/images/Me.jpeg")}
          alt="Aret Online"
          sx={{
            width: "150px",
            height: "150px",
          }}
        />

        <div className="my-6 text-2xl text-white font-medium">
          Temiloluwa Ogunbanjo
        </div>

        <CustomButton
          className="w-full mt-5"
          variant="outlined"
          value={"Sign In"}
          onClick={closeHandler}
        />
      </Stack>
    </Stack>
  );
};

const PortfolioIndex = () => {
  const [openModal, setOpenModal] = useState(true);
  const [windowInfo, setWindowInfo] = useState(null);
  const [apps, setApps] = useState([
    <HomeApp
      name={`About Me`}
      icon={
        <BsPenFill style={{ ...styles.appIconStyles }} />
      }
    />,
    <HomeApp
      name={`Skills & Experiences`}
      icon={
        <AiFillSetting
          style={{ ...styles.appIconStyles }}
        />
      }
    />,
    <FolderApp
      name={`Professional Experiences`}
      onDoubleClick={(ev) => {
        delay(
          () =>
            setWindowInfo({
              name: `Professional Experiences`,
              type: "folder",
            }),
          WINDOW_LOAD_TIME
        );
      }}
    />,
    <CustomButton
      className="w-full"
      variant="outlined"
      value={"Add Box"}
      onClick={() => {
        setApps((prev) =>
          prev.concat([
            <HomeApp
              name={`Home Application ${prev.length + 1}`}
              icon={
                <img
                  src={require("../../assets/images/Commodify.png")}
                  alt="#"
                  style={styles.appIconStyles}
                />
              }
            />,
            <FolderApp name={`Folder ${prev.length + 1}`} />,
          ])
        );
      }}
    />,
    <CustomButton
      className="w-full"
      variant="outlined"
      value={"Remove Box"}
      onClick={() => {
        setApps((prev) => prev.slice(0, Math.max(2, prev.length - 1)));
      }}
    />,
  ]);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section className="flex flex-col relative pt-10 px-4">
        <Grid
          container
          spacing={2}
          // gridTemplateAreas={["1fr", "1fr", "1fr"]}
          sx={{}}
        >
          {apps.map((eachApp, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={1}
              xl={1}
              key={index}
              alignItems={"center"}
              justifyContent="center"
              sx={{ flexGrow: 1, border: "2px solid transparent" }}
            >
              {eachApp}
            </Grid>
          ))}
        </Grid>
      </section>

      {windowInfo && (
        <Window info={windowInfo} closeHandler={() => setWindowInfo(null)}>
          <Explorer />
        </Window>
      )}

      <Dialog
        open={openModal}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: "var(--page-dialog-bg-color)",
            maxWidth: "unset",
            maxHeight: "unset",
            margin: 0,
            padding: 0,
          },
        }}
        DialogContentProps={{
          sx: { padding: 0 },
        }}
      >
        <AuthScreen closeHandler={handleClose} />
      </Dialog>
    </>
  );
};

const styles = {
  bioStyle: {
    fontSize: "14px",
    textAlign: "justify",
    fontWeight: 400,
    color: "var(--light-text-color)",
    lineHeight: 2,
    maxWidth: "712px",
  },
  iconStyles: { fontSize: "20px", marginBottom: "10px" },
  appIconStyles: { width: "100%", height: "100%", objectFit: "contain", color: "#86d1ff" },
  tabStyles: {
    fontFamily: "Poppins, Roboto,'Open Sans', Montserrat, san-serif",
    color: "var(--light-text-color)",
    fontSize: "14px",
    py: "6px",
    textTransform: "capitalize",
  },
};

export default PortfolioIndex;
