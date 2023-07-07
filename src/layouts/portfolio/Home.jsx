import React, { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";
import {
  Avatar,
  AvatarGroup,
  Box,
  Collapse,
  IconButton,
  Link,
  Stack,
  Tab,
  Tabs,
  Tooltip,
} from "@mui/material";
import { CgArrowLongDown as DownArrowIcon } from "react-icons/cg";
import { AiFillSafetyCertificate } from "react-icons/ai";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleRight,
} from "react-icons/fa";
import {
  BsTelephoneFill as PhoneIcon,
  BsGlobe as WebIcon,
} from "react-icons/bs";
// BsTelephoneFill
import {
  HiExternalLink,
  HiOutlineLightningBolt as SkillBadgeIcon,
  HiLightningBolt as FeaturedSkillBadgeIcon,
} from "react-icons/hi";
import { IoMail as MailIcon } from "react-icons/io5";

import { PieChart } from "react-minimal-pie-chart";
import ReactHtmlParser from "html-react-parser";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import Fade from "@successtar/react-reveal/Fade";
// import { Fade as AwesomeFade } from "react-awesome-reveal";

import CustomButton from "../../components/common/Button";
import TabPanel from "../../components/common/TabPanel";
import Spinner from "../../components/common/Spinner";
import Dialog from "../../components/common/Dialog";

import {
  fetchUserExperiences,
  fetchUserProject,
  fetchUserSkills,
} from "../../database";
import { getRandomItem, setDarkMode } from "../../utils";
import { blueGrey } from "@mui/material/colors";
import StyledAvatar from "../../components/common/StyledAvatar";
import { SkillInfo } from "./ModalContents";

const SkillCard = (props) => {
  const { onClick = () => {} } = props;
  const [skillPieWidth, skillPieHeight] = [25, 25];

  const getColor = (grade) => {
    switch (true) {
      case grade >= 0 && grade < 3.33:
        // return "var(--light-text-color)";
        return "gold";
      // return "#ff56cf";

      case grade >= 3.33 && grade < 6.67:
        // return "var(--light-text-color)";
        return "gold";
      // return "#ffdb56";

      case grade >= 6.67:
        // return "var(--light-text-color)";
        return "gold";
      // return "#79ff9f";

      default:
        return grade.color || "#E38627";
    }
  };

  return (
    <div
      className="card flex flex-col-reverse mx-4 items-center"
      style={{
        borderRadius: "8px",
        padding: "15px",
      }}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col w-full">
          <b
            className="text-left text-2xl uppercase"
            style={{
              margin: 0,
              fontWeight: 700,
              color: "var(--text-color)",
              // fontSize: "15px",
            }}
          >
            {props.data?.name}
          </b>
          <span className="mt-3 text-lg capitalize text-left">
            {props.data?.tags[0]}
          </span>
          {props.data?.certifications?.length > 0 && (
            <span
              className="flex flex-row items-center mt-3 uppercase text-left text-md"
              style={{
                color: "var(--light-text-color)",
              }}
            >
              <AiFillSafetyCertificate
                className="text-lg"
                style={{ marginRight: "4px" }}
              />
              Certified Skill
            </span>
          )}
        </div>

        <div className="flex rounded-full">
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
            lineWidth={10}
            data={[
              {
                title: "Mastered",
                value: props.data?.level * 10,
                color: getColor(props.data?.level),
              },
              {
                title: "Unmastered",
                value: 100 - props.data?.level * 10,
                color: "var(--border-line-color)",
              },
              // { title: 'Three', value: 10, color: '#6A2135' },
            ]}
            style={{ height: "58px" }}
          />
        </div>
      </div>

      <div
        className="flex flex-row-reverse mb-10 w-full items-center justify-between px-4 py-4 rounded-lg shadow"
        style={{
          backgroundColor: "rgba(170, 170, 170, 0.15)",
        }}
      >
        {!props.data?.featured ? (
          <SkillBadgeIcon
            style={{
              fontSize: "23px",
              marginBottom: "11px",
              marginTop: "11px",
              color: "var(--light-text-color)",
            }}
          />
        ) : (
          <FeaturedSkillBadgeIcon
            style={{
              fontSize: "25px",
              marginBottom: "10px",
              marginTop: "10px",
              color: "gold",
            }}
          />
        )}

        {props?.data?.icon && (
          <img
            src={props?.data?.icon}
            alt={""}
            height="30px"
            style={{ objectFit: "contain", width: "auto", height: "35px" }}
          />
        )}
      </div>
    </div>
  );
};

const ExperienceCard = (props) => {
  return (
    <Box
      component="div"
      className={`card flex flex-col sm:flex-row mb-12 sm:mb-8 pl-8 my-3 -ml-4`}
      sx={{}}
    >
      <div className="flex flex-col mr-8 h-auto timeline-section">
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
        className="flex flex-col flew-grow sm:ml-8 mt-2 sm:mt-0 text-2xl w-full"
        style={{ maxWidth: "800px" }}
      >
        <div className="flex flex-row items-center justify-start mb-3 sm:mb-4">
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

        <div
          className="mt-2 text-xl md:text-2xl sm:mt-2"
          style={{
            fontWeight: 400,
            color: "var(--text-color)",
            lineHeight: 1.8,
            // fontSize: '14px'
          }}
        >
          {ReactHtmlParser(props?.data?.description)}
        </div>

        {props?.data?.relatedSkills &&
          props?.data?.relatedSkills.length > 0 && (
            <div className="flex flex-col justify-start items-start mt-4 sm:mt-6 mb-2">
              <span
                className="text-xl mb-2"
                style={{
                  color: "#888",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                }}
              >
                Related Skills:
              </span>
              <span
                className="text-lg"
                style={{
                  color: "#888",
                  fontWeight: 400,
                  letterSpacing: "0.5px",
                }}
              >
                {props?.data?.relatedSkills.join(" • ")}
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

            <AvatarGroup
              max={4}
              spacing="medium"
              sx={{
                my: 1,
                justifyContent: "left",
                border: "none",
                "& [class*=MuiAvatar-root-MuiAvatarGroup-avatar]": {
                  fontSize: "12px",
                  backgroundColor: "black",
                  borderColor: "var(--border-line-color) !important",
                  width: 30,
                  height: 30,
                },
              }}
            >
              {props?.data?.references.map((eachImg, index) => (
                <Tooltip
                  arrow={true}
                  placement="bottom-start"
                  title={
                    <div className="p-5">
                      <div className="flex flex-row items-center">
                        <StyledAvatar
                          alt={eachImg?.name || "Remy Sharp"}
                          src={eachImg?.url || ""}
                          sx={{
                            borderColor: "var(--border-line-color) !important",
                            fontSize: "12px",
                            width: 28,
                            height: 28,
                            bgcolor: blueGrey[500],
                          }}
                        />
                        <Stack className="ml-5">
                          <span className="text-xl" style={{ fontWeight: 700 }}>
                            {eachImg.name}
                          </span>
                          <span className="text-lg" style={{ fontWeight: 400 }}>
                            {eachImg?.title || "-- --"}
                          </span>
                        </Stack>
                      </div>

                      <div className="flex flex-row items-center justify-between border-b-2 border-t-2 p-2 mt-4">
                        <IconButton
                          href={`tel:${eachImg?.phone}`}
                          disabled={!eachImg?.phone}
                          className="mr-2"
                        >
                          <PhoneIcon
                            style={{
                              color: !eachImg?.phone ? "inherit" : "white",
                              fontSize: "14px",
                            }}
                          />
                        </IconButton>

                        <IconButton
                          href={`mailto:${eachImg?.email}`}
                          disabled={!eachImg?.email}
                          className="mr-2"
                        >
                          <MailIcon
                            style={{
                              color: !eachImg?.email ? "inherit" : "white",
                              fontSize: "16px",
                            }}
                          />
                        </IconButton>

                        <IconButton
                          href={`mailto:${eachImg?.website}`}
                          disabled={!eachImg?.website}
                          className="mr-0"
                        >
                          <WebIcon
                            style={{
                              color: !eachImg?.website ? "inherit" : "white",
                              fontSize: "16px",
                            }}
                          />
                        </IconButton>
                      </div>
                    </div>
                  }
                >
                  <Avatar
                    key={index}
                    alt={eachImg?.name || "Remy Sharp"}
                    src={eachImg?.url || ""}
                    sx={{
                      borderColor: "var(--border-line-color) !important",
                      fontSize: "12px",
                      width: 30,
                      height: 30,
                      bgcolor: blueGrey[500],
                    }}
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          </div>
        )}
      </div>
    </Box>
  );
};

const PortfolioIndex = () => {
  const navigate = useNavigate();
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [isLayman, setIsLayman] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const [loadingSkills, setLoadingSkills] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skills, setSkills] = useState([]);

  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [experiences, setExperiences] = useState([]);

  const [showAllProjects] = useState(false);
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
      "A wise man once said: 'Someone to love, something to hope for and something to do are the 3 essence of true happiness'.",
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
      3000, // Waits 1s
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
      "The expectations of an outcome produces a manifestation that would, in time, become your new reality. We should guard our heart and minds with all our might as it would surely produce something with whatever you put into it.",
      2000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ],
    [
      "If GOD isn't real...",
      quotePause,
      "If GOD isn't real, and these whole universe was just born from pure randomness including us...",
      quotePause,
      "If GOD isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts?",
      quotePause,
      "If GOD isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts? How can we be so sure of the consistency of our logic?",
      quotePause,
      "If GOD isn't real, and these whole universe was just born from pure randomness including us, then how can we trust our own thoughts? How can we be so sure of the consistency of our logic? Therefore, GOD is REAl!",
      2000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ],
    [
      "Survivorship bias is a common logical error that distorts our understanding of the world...",
      quotePause,
      "Survivorship bias is a common logical error that distorts our understanding of the world. It happens when we assume that success tells the whole story and when we don't adequately consider past failures.",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
        setShowProfilePic(true);
      },
    ]
  ];

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSkillClick = (data) => (ev) => {
    handleOpen(ev);
    setDialogContent(<SkillInfo data={data} />);
  };

  useEffect(() => {
    const vName = window.localStorage.getItem("visitor_name");
    const isDarkMode = window.localStorage.getItem("dark_mode");

    if (!vName) {
      navigate("/");
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    } else {
      setDarkMode(true);
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

  const expIntoSkills = useMemo(() => {
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

    return e2S;
  }, [experiences]);

  // console.log(expIntoSkills);

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
        <Fade cascade>
          <div
            className="cols"
            style={{ justifyContent: "center", padding: "10px" }}
          >
            <h1 className="main-text" style={{ fontSize: "50px" }}>
              <span style={{ fontSize: "28px", lineHeight: 0.5 }}>Who is </span>
              <br />
              <span style={{}}>Temiloluwa Ogunbanjo </span>
              <span className="" style={{ color: "var(--primary-color)" }}>
                {" "}
                ?
              </span>
            </h1>
            <h3
              className="flex flex-row align-center mt-3"
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
                  color: "var(--primary-color)",
                  letterSpacing: "1px",
                }}
              />
            </h3>

            {isLayman ? (
              <Fade>
                <p
                  className="py-8"
                  style={{
                    // fontFamily: "'Open Sans'",
                    textAlign: "justify",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text-color)",
                    lineHeight: 2,
                    maxWidth: "650px",
                  }}
                >
                  {`I am a Fullstack Software Developer with ${
                    new Date().getFullYear() - 2019
                  } years of professional experience building RESTful APIs, using M.E.R.N. (MongoDB, Express, ReactJS, NodeJS) stack, managing various databases (NoSQL, ORM, Amazon RDS, and RDBMS) and building modern and scalable full stack solutions. I am also a part-time graphics designer, animator, and finally, a recent graduate of the University of Lagos.`}
                </p>
              </Fade>
            ) : (
              <Fade>
                <p
                  className="py-8"
                  style={{
                    // fontFamily: "'Open Sans'",
                    textAlign: "justify",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "var(--text-color)",
                    lineHeight: 2,
                    maxWidth: "650px",
                  }}
                >
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
                      textDecoration: "underline",
                      // fontWeight: 600,
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
              <a href="#skill-section">
                <CustomButton
                  className="border mb-6 w-full"
                  value={
                    <span
                      className="flex flex-row items-center justify-center text-center uppercase"
                      style={{ color: "var(--text-color)" }}
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
                  }}
                />
              </a>

              <a href="tel:+2349059620514">
                <CustomButton
                  className="mb-6 sm:ml-9 w-full"
                  value={
                    <span
                      className="flex flex-row items-center justify-center text-center uppercase"
                      style={{ color: "#eee" }}
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
                    border: "1px solid var(--primary-color)",
                    // opacity: 0.95,
                    backgroundColor: "var(--primary-color)",
                    boxShadow: "none",
                  }}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col user-profile-section">
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
            <Collapse
              orientation="vertical"
              in={showProfilePic}
              timeout={600}
              className=""
            >
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
            </Collapse>

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
            {/* <div className="w-1/2"></div> */}
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Skills Tab"
              orientation="horizontal"
              variant="standard"
              scrollButtons="auto"
              centered={true}
              sx={{
                display: { xs: "none", md: "flex" },
                width: "100%",
                mb: 2,
                color: "var(--text-color)",
                borderBottom: "1px solid var(--border-line-color)",
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

            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              aria-label="Skills Tab"
              orientation="horizontal"
              variant="scrollable"
              scrollButtons="auto"
              centered={false}
              sx={{
                display: { xs: "flex", md: "none" },
                width: "100%",
                mb: 2,
                color: "var(--text-color)",
                borderBottom: "1px solid var(--border-line-color)",
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
                  <div className="flex flex-row justify-center flex-wrap w-4/7">
                    {(showAllSkills
                      ? filterSkills(tabIndex)
                      : filterSkills(tabIndex).slice(0, 9)
                    ).map((eachSkill, i) => (
                      <SkillCard
                        key={i}
                        data={eachSkill}
                        experiences={
                          expIntoSkills[eachSkill.name.toLowerCase()]
                        }
                        onClick={handleSkillClick(eachSkill)}
                      />
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
                  className="flex flex-row items-center text-center uppercase"
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
            {!loadingExperiences ? (
              (showAllExperiences ? experiences : experiences.slice(0, 2)).map(
                (each, i) => <ExperienceCard key={i} data={each} />
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

      {/* My Projects */}
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
            Featured Projects
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
                          xs: "1px solid #555",
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
                          fontWeight: 600,
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

                      <Link
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
                    </div>
                  </div>
                )
              )
            ) : (
              <Spinner />
            )}
          </div>
        </section>
      </Fade>

      {/* ABOUT SITE */}
      <Fade bottom cascade>
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
      </Fade>

      <Dialog open={openModal} onClose={handleClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};

const styles = {
  iconStyles: { fontSize: "20px", marginBottom: "10px" },
  tabStyles: {
    fontFamily: "Poppins, Roboto,'Open Sans', Montserrat, san-serif",
    color: "var(--light-text-color)",
    fontSize: "14px",
    py: "6px",
    textTransform: "capitalize",
  },
};

export default PortfolioIndex;
