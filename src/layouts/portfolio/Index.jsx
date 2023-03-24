import React, { useState } from "react";
import {
  CgArrowLongDown as DownArrowIcon,
  CgCodeSlash,
  CgPathOutline as CallIcon,
} from "react-icons/cg";
import { AiOutlineCode, AiOutlineTool } from "react-icons/ai";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaBezierCurve,
  FaCloudUploadAlt,
  FaDatabase,
  FaEthernet,
  FaGithub,
  FaPalette,
} from "react-icons/fa";
import ReactHtmlParser from "html-react-parser";
import JsxParser from "parser-string-html-jsx";
import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";
import CustomButton from "../../components/common/Button";
import NavigationTabs from "../../components/NavigationTabs";

import { sectionStyle, sectionHeaderStyle } from "../../data/globals";

// import avatar from "../../assets/images/Me.jpeg";
import nullimgT from "../../assets/images/nullimgT.png";
import univers from "../../assets/images/logo-2.png";
import loading from "../../assets/images/04de2e31234507.564a1d23645bf2.gif";
import workman from "../../assets/images/workmanlogomain.png";
import CommodifyProjectImage from "../../assets/images/Commodify.png";
import nullImg from "../../assets/images/nullimgT.png";

function ProfileOverview(props) {
  const unitDataStyle = {
    padding: "0.5rem 1rem 0.5rem 0.2rem",
    textAlign: "left",
  };

  const unitDataWrapperStyle = {
    fontSize: "1.4rem",
    maxWidth: "600px",
  };

  return (
    <div
      className="cols"
      style={{ fontSize: "1.5rem", color: "var(--light-text-color)" }}
    >
      <Fade bottom cascade>
        {/* My Profile Summary Section */}
        <section style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>My Profile:</h2>
          <div className="cols">
            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Email Address:
              </span>
              <span className="lg-60" style={unitDataStyle}>
                ogunbanjotemiloluwa@gmail.com
              </span>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Mobile Number:
              </span>
              <span className="lg-60" style={unitDataStyle}>
                +2349059620514
              </span>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Nationality:
              </span>
              <span className="lg-60" style={unitDataStyle}>
                Nigerian
              </span>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Language Spoken:
              </span>
              <span className="lg-60" style={unitDataStyle}>
                English & Yoruba
              </span>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Current Job:
              </span>
              <span className="lg-60" style={unitDataStyle}>
                {props.profession}
              </span>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        {/* My Objective Summary Section */}
        <section style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>Career Objectives:</h2>
          <div>
            To use my wealth of skills and talents to better the lives of people
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        {/* My Eduction Summary Section */}
        <section style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>Education:</h2>
          <div
            className="cols education-container"
            style={{ marginLeft: "0.5rem" }}
          >
            <div className="cols">
              <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
                University of Lagos, Akoka Nigeria
              </h4>
              <em>Tertiary Institution</em>
              <span>Mechanical Engineering (B. Sc.)</span>
              <span className="date">2015 - Present</span>
            </div>

            <div className="cols">
              <h4 style={{ marginBottom: 0 }}>Solidrock Model College</h4>
              <em>Secondary Institution</em>
              <span className="date">2009 - 2015</span>
            </div>

            <div className="cols">
              <h4 style={{ marginBottom: 0 }}>Akesan Royal School</h4>
              <em>Primary Institution</em>
              <span className="date">2001 - 2009</span>
            </div>
          </div>
        </section>
      </Fade>

      <Fade bottom cascade>
        {/* My Work Experiences */}
        <section style={sectionStyle}>
          <h2 style={sectionHeaderStyle}>Industrial Experiences:</h2>
          <div className="rows experiences" style={{ marginLeft: "0.5rem" }}>
            <div className="cols card">
              <div className="rows img-wrapper">
                <img
                  src={require("../../assets/images/FBN-logo.png")}
                  alt="teh"
                  width={200}
                  height={80}
                />
              </div>
              <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
                First Bank Of Nigeria
              </h4>
              <em>Banking & Finance</em>
              <span>RPA Developer</span>
              <span className="date">2015 - Present</span>
            </div>

            <div className="cols card">
              <div className="rows img-wrapper">
                <img
                  src={nullImg}
                  alt="teh"
                  // width={200}
                  height={80}
                />
              </div>
              <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
                Lixom Technologies
              </h4>
              <em>Game & Casino</em>
              <span>Senior NodeJS/Backend Engineer</span>
              <span className="date">2009 - 2015</span>
            </div>

            <div className="cols card">
              <div className="rows img-wrapper">
                <img
                  src={require("../../assets/images/Commodify.png")}
                  alt="teh"
                  height={80}
                />
              </div>
              <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>TradeBuza</h4>
              <em>Agro-Tech & FinTech</em>
              <span>Senior Frontend Developer</span>
              <span className="date">2001 - 2009</span>
            </div>

            <div className="cols card">
              <div className="rows img-wrapper">
                <img
                  src={require("../../assets/images/Jara.ico")}
                  alt="teh"
                  height={80}
                />
              </div>
              <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
                Jara Analytics
              </h4>
              <em>E-Commerce & FinTech</em>
              <span>Junior Fullstack Developer</span>
              <span className="date">2001 - 2009</span>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
}

function ProjectTab(props) {
  const { name, type, description, isDummy, previewImg, link, tags } =
    props.details;
  const classForDummyElements = isDummy ? "pad lazy-loading" : "";

  return (
    <Fade bottom>
      <div
        className={`cols ${isDummy ? "dummy" : ""} project-item`}
        //   data-tilt
        //   data-tilt-max="25"
        //   data-tilt-speed="400"
        //   data-tilt-glare="true"
      >
        <div
          style={{
            backgroundImage: `linear-gradient(-135deg, rgba(255, 91, 152, 0.0), rgba(255, 255, 255, 0) 25%), url(${
              previewImg ? previewImg : loading
            })`,
            backgroundSize: "200px",
            backgroundPosition: "8% 11%",
            backgroundRepeat: "no-repeat",
          }}
          className={`project-item-preview top`}
          data-index={props.index + 1}
        ></div>
        <div className="cols bottom">
          <h3 className={`project-item-name ${classForDummyElements}`}>
            {name}
          </h3>
          <span className={`project-item-source ${classForDummyElements}`}>
            {type}
          </span>
          <div
            className={`project-item-tags ${
              tags ? "line-clamp line-clamp-1" : ""
            } ${classForDummyElements}`}
          >
            {tags}
          </div>
          <div
            className={`project-item-description line-clamp line-clamp-5 ${classForDummyElements}`}
          >
            {description}
          </div>
          <a
            href={link ? link : "#"}
            target="blank"
            className={`project-view-btn rows ${classForDummyElements}`}
            disabled={true}
            data-disabled={link ? false : true}
          >
            <span className="content">
              {link ? "view project" : "coming soon..."}
            </span>
            <i className="icofont-caret-right"></i>
          </a>
        </div>
      </div>
    </Fade>
  );
}

function ContactTab() {
  let headerStyle = {
    ...sectionHeaderStyle,
    lineHeight: "1.5",
    marginBottom: "0.5rem",
  };

  let unitDataStyle = {
    padding: "0.5rem 1rem 0.5rem 0.2rem",
    textAlign: "left",
  };

  let unitDataWrapperStyle = {
    fontSize: "1.4rem",
    maxWidth: "630px",
  };

  return (
    <div
      className="cols"
      style={{ fontSize: "1.4rem", color: "var(--light-text-color)" }}
    >
      <div style={sectionStyle}>
        <Fade right cascade>
          <section style={sectionStyle}>
            <h2 style={headerStyle}>My Social Media:</h2>
            <div className="cols">
              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  <i className="icon icofont-brand-whatsapp"></i> Whatsapp:
                </span>
                <a
                  href="https://wa.me/+2349059620514?text=Hi"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  +234 905 962 0514
                </a>
              </div>

              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  <i className="icon icofont-instagram"></i> Instagram:
                </span>
                <a
                  href="https://instagram.com/+2349059620514?text=Hi"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  +234 905 962 0514
                </a>
              </div>

              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  <i className="icon icofont-github"></i> Github:
                </span>
                <a
                  href="https://github.com/tehmi2000"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  https://github.com/tehmi2000
                </a>
              </div>

              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  <i className="icon icofont-linkedin"></i> LinkedIn:
                </span>
                <a
                  href="https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168
                </a>
              </div>
            </div>
          </section>
        </Fade>
        <Fade bottom cascade>
          <section style={sectionStyle}>
            <h2 style={headerStyle}>Telephone:</h2>
            <div className="cols">
              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  Mobile Number:
                </span>
                <a
                  href="tel:+2349059620514"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  +234 905 962 0514
                </a>
              </div>

              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  Alt. Number:
                </span>
                <a
                  href="tel:+2348021444047"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  +234 802 144 4047
                </a>
              </div>

              <div className="rows" style={unitDataWrapperStyle}>
                <span className="lg-35" style={unitDataStyle}>
                  Skype:
                </span>
                <a
                  href="tel:+2349059620514"
                  className="lg-60"
                  style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
                >
                  +234 905 962 0514
                </a>
              </div>
            </div>
          </section>
        </Fade>
      </div>
    </div>
  );
}

const PortfolioIndex = () => {
  const [isActive, setIsActive] = useState(1);
  const [isActiveTab, setIsActiveTab] = useState("overview-container");
  const [navTabs, setNavTabs] = useState([
    {
      img: "icofont-book",
      name: "Overview",
      total: null,
      handler: (ev) => {
        setIsActive(0);
        setIsActiveTab("overview-container");
      },
    },
    {
      img: "icofont-book-alt",
      name: "Skills & Knowledge",
      total: 4,
      handler: async (ev) => {
        setIsActive(1);
        setIsActiveTab("skills-container");

        // const skills = await AppUtils.fetchUserSkills("user");
        // if (skills) {
        //   props.setHomeComponentState({ skills });
        //   setDataCount(skills.length, 1);
        // }
      },
    },
    {
      img: "icofont-tasks-alt",
      name: "Projects",
      total: 4,
      handler: async (ev) => {
        setIsActive(2);
        setIsActiveTab("project-container");

        // const projects = await AppUtils.fetchUserProject("user");
        // if (projects) {
        //   props.setHomeComponentState({ projects });
        //   setDataCount(projects.length, 2);
        // }
      },
    },
    {
      img: "icofont-cube",
      name: "Contacts",
      total: null,
      handler: (ev) => {
        setIsActive(3);
        setIsActiveTab("contact-container");
      },
    },
  ]);

  const iconStyles = { fontSize: "24px", marginBottom: "2px" };
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skills, setSkills] = useState([
    {
      name: "NodeJS",
      level: 9,
      tag: "Software Development (Backend)",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "Javascript (JS)",
      level: 9,
      tag: "Software Development",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "Typescript (TS)",
      level: 8,
      tag: "Software Development",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "ReactJS",
      level: 8.5,
      tag: "Software Development (Frontend)",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "MySQL",
      level: 8.5,
      tag: "Database (SQL)",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "PostgreSQL",
      level: 8.5,
      tag: "Database (SQL)",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "RethinkDB",
      level: 8.5,
      tag: "Database (NoSQL)",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "MongoDB",
      level: 5,
      tag: "Database (NoSQL)",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "Git/GitHub",
      level: 6,
      tag: "Version Control System (VCS)",
      icon: <FaGithub style={iconStyles} />,
    },
    {
      name: "REST API",
      level: 9,
      tag: "web development",
      icon: <FaCloudUploadAlt style={iconStyles} />,
    },
    { name: "GraphQL", level: 3, tag: "web development" },
    {
      name: "AWS Services",
      level: 4,
      tag: "web development",
      icon: <FaCloudUploadAlt style={iconStyles} />,
    },
    {
      name: "Autodesk AutoCAD",
      level: 5,
      tag: "machinery & designs",
    },
    {
      name: "Autodesk Inventor",
      level: 6,
      tag: "machinery & designs",
    },
    {
      name: "Welding & Fabrication",
      level: 4,
      tag: "machinery & designs",
      icon: <AiOutlineTool style={iconStyles} />,
    },
    {
      name: "Adobe Photoshop",
      level: 8,
      tag: "graphics design",
      icon: <FaPalette style={iconStyles} />,
    },
    {
      name: "Figma",
      level: 6.5,
      tag: "graphics design",
      icon: <FaEthernet style={iconStyles} />,
    },
    {
      name: "Adobe XD",
      level: 5,
      tag: "graphics design",
      icon: <FaBezierCurve style={iconStyles} />,
    },
    {
      name: "Blender",
      level: 7,
      tag: "Animations & Motion Graphics",
      icon: <AiOutlineCode style={iconStyles} />,
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      company: "First Bank Of Nigeria",
      timeframe: "Sep 2022 - March 2023",
      role: "RPA Developer • Internship",
      description: "I was responsible for ...",
    },
    {
      company: "TradeBuza",
      timeframe: "May 2022 - Present",
      role: "Senior Frontend Developer • Full-Time",
      description: `<p>I was responsible for:</p>
      <ol>
      <li>Design client-side and server-side 
      architectures. </li>
      <li>Develop effective APIs with standardized 
      documentations.</li>
      <li>Test software to ensure responsiveness & 
      efficiency.</li> 
      <li>Create ssecurity and data protection 
      settings.</li>
      </ol>
      `,
    },
    {
      company: "Lixom Technologies Ltd.",
      timeframe: "Nov 2021 - Present",
      role: "Senior Backend/Game Engineer • Full-Time",
      description: `<p>Built scalable and automated solutions for major game companies (can not disclose due to NDA) in the country. I was responsible for:</p>
      <ol style={{ list-style: 'decimal' }}>
      <li>Collaborate with the team of professionals engineers to build and document the server-side architecture for the game suite. </li>
      
      <li>Write effective algorithm to handle data analytics of the players, admin and agents on the platform. </li>
      
      <li>Develop effective (super fast and has low time & space complexity) algorithms that can process millions of data. </li>
      
      <li>Perform coverage, integration and unit testing on the whole game flow. </li>
      
      <li>Manage & troubleshoot cloud (AWS, Digital Ocean) integrations and payment portals </li>
      
      <li>Write efficient automation scripts to manage automated tasks such as result generation, ticket events and user activity monitoring. </li>
      
      <li>Documentation of the API endpoints. </li>
      
      <li> Management and supervision of my engineers.</li>
      </ol>
      `,
    },
    {
      company: "Jara Analytics",
      timeframe: "May 2021 - Feb 2022",
      role: "Fullstack Software Engineer • Full-Time",
      description: `<p>I was responsible for:</p>
      <ol>
      <li>Design client-side and server-side 
      architectures. </li>
      <li>Develop effective APIs with standardized 
      documentations.</li>
      <li>Test software to ensure responsiveness & 
      efficiency.</li> 
      <li>Create ssecurity and data protection 
      settings.</li>
      </ol>
      `,
    },
  ]);

  const [projects] = useState([
    {
      name: "Commodify",
      type: "Loans & Finance",
      description:
        "Commodify provides working capital loans to agricultural commodity exporters in Sub-Saharan Africa",
      previewImg: CommodifyProjectImage,
      link: "https://commodify.co",
    },
    {
      name: "T-Guide",
      type: "Business",
      description:
        "T-Guide is a react app that serves as a virtual tour guide for travelers and tourists.",
      previewImg: nullimgT,
      link: "https://t-guide.herokuapp.com",
    },
    {
      name: "Univers",
      type: "e-Commerce",
      description:
        "An ecommerce platform for buying and selling all categories of products from household items to fashion items and many more.",
      previewImg: univers,
      link: "https://oneunivers.herokuapp.com",
    },
    {
      name: "Game Project",
      type: "Games",
      description:
        "Game Project is a 2D game written in VanillaJS. The game consists of a player (plane) and opponent (plane). The player can change its color and can navigate using the keyboard keys.",
      previewImg: nullimgT,
      link: "https://hitmee.herokuapp.com",
    },
    {
      name: "Workman",
      type: "Lifestyle",
      description:
        "Workman was designed to help people reach out to a wide range of services at the click of the button",
      previewImg: workman,
      link: null,
    },
  ]);

  const showSubSection = (_, isActive) => {
    switch (isActive) {
      case 0:
        return <ProfileOverview profession={null} />;

      // case 1:
      //   return withSkillCategory(context);

      case 2:
        return projects.map((aProject, index) => {
          return <ProjectTab key={index} index={index} details={aProject} />;
        });

      case 3:
        return <ContactTab />;

      default:
        return null;
    }
  };

  const quoteSequence = [
    [
      "A wise man once said:",
      2000,
      "A wise man once said: 'Someone to love",
      2000,
      "A wise man once said: 'Someone to love, something to hope for",
      2000,
      "A wise man once said: 'Someone to love, something to hope for and something to do",
      2000,
      "A wise man once said: 'Someone to love, something to hope for and something to do is the true formula to happiness'.",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
      },
    ],
    [
      "In the quest for learning...",
      2000,
      "In the quest for learning, we should not neglect the importance of unlearning...",
      2000,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute...",
      2000,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is...",
      2000,
      "In the quest for learning, we should not neglect the importance of unlearning. For knowledge is never complete or absolute and the more we believe it is, the harder it will be to re-learn.",
      4000, // Waits 1s
      () => {
        console.log("Done typing!"); // Place optional callbacks anywhere in the array
      },
    ]
  ];

  const getRandomQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quoteSequence.length);
    return quoteSequence[quoteIndex];
  }

  return (
    <>
      <section className="hero rows relative">
        <Fade left cascade>
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
                  color: "var(--tab-border-color)",
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
                new Date().getFullYear() - 2017
              } years of professional experience using M.E.R.N. (MongoDB, Express, ReactJS, NodeJS) stack, building RESTful APIs, managing various databases (NoSQL, ORM, Amazon RDS, and RDBMS) and building modern and scalable frontend solutions. I am also a part-time graphics designer, animator, and finally, a recent graduate of the University of Lagos.`}
            </p>

            <div className="flex flex-row pt-10" style={{ paddingTop: "40px" }}>
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

              <CustomButton
                className="ml-6"
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
                  backgroundColor: "var(--tab-border-color)",
                  boxShadow: "none",
                }}
              />
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="cols user-profile-section">
            <div className="rows img-wrapper">
              <img
                className="user-profile-picture"
                src={require("../../assets/images/Me.jpeg")}
                alt="Temiloluwa"
                width="120"
                height="120"
              />
              {/* <span className="username">{"Temiloluwa Ogunbanjo"}</span> */}
            </div>

            <div
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
            </div>

            <TypeAnimation
              sequence={getRandomQuote()}
              wrapper="code"
              speed={35}
              deletionSpeed={88}
              cursor={true}
              repeat={0}
              className="user-details text-justify"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.8,
                margin: "1.8rem 0 0",
              }}
            />
            {/* <code
              className="user-details text-justify"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.8,
                margin: "1.8rem 0 0",
              }}
            >
              "A wise man once said: 'Someone to love, something to hope for and something to do is the formula to happiness'."
            </code> */}

            <i
              className="user-last-seen"
              style={{ margin: "1.8rem 0 0", fontSize: "1rem", width: "100%" }}
            >
              {`Last updated on ${new Date(2023, 1, 6).toDateString()}`}
            </i>
          </div>
          <div className="background-illuminator"></div>
        </Fade>
      </section>

      <Fade bottom cascade>
        <section
          className="skills flex flex-col items-center p-5 "
          // style={{ backgroundColor: "rgba(100, 100, 100, 0.2)" }}
        >
          <h2
            className="mb-5 subtitle"
            style={{
              fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Skills & Technical Knowledge
          </h2>

          <div className="flex flex-row flex-wrap">
            {(showAllSkills ? skills : skills.slice(0, 8)).map((eachSkill) => (
              <div
                className="card flex flex-col mx-6"
                style={{
                  borderRadius: "8px",
                }}
              >
                {eachSkill.icon}
                <div className="rows img-wrapper">
                  <b
                    className="text-center"
                    style={{
                      margin: 0,
                      color: "var(--text-color)",
                      fontSize: "20px",
                    }}
                  >
                    {eachSkill.name}
                  </b>
                </div>
                <em className="mt-4 capitalize">{eachSkill.tag}</em>
              </div>
            ))}
          </div>

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
                    ? `Show ${skills.length - 8} more`
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
          />
        </section>
      </Fade>

      <Fade bottom cascade>
        <section
          className="experiences flex flex-col items-left p-5 "
          // style={{ backgroundColor: "rgba(100, 100, 100, 0.2)" }}
        >
          <h2
            className="mb-8"
            style={{
              fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            Industrial Experiences
          </h2>
          <div className="flex flex-col flex-wrap">
            {experiences.map((each) => (
              <div className="flex flex-row mb-12 my-3">
                <div
                  className="flex flex-col mr-8 h-auto"
                  style={{ width: "200px", flex: "none" }}
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

                <div className="flex flex-col flew-grow ml-8 text-2xl">
                  <span
                    className="text-3xl mb-8"
                    style={{ fontWeight: 700, color: "var(--text-color)" }}
                  >
                    {each.company}
                  </span>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "var(--light-text-color)",
                      lineHeight: 2,
                    }}
                  >
                    {ReactHtmlParser(each.description)}
                  </div>
                </div>
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

      <section className="main-content-section">
        <NavigationTabs navTabs={navTabs} isActive={isActive} />
        <div className="section-content">
          <div id={isActiveTab} className="cols">
            {/* Create Selected Tab Content */}
            {showSubSection(null, isActive)}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioIndex;
