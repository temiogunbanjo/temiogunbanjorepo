import React, { useState } from "react";
import {
  CgArrowLongDown as DownArrowIcon,
  CgChart,
  CgCodeSlash,
  CgPathOutline as CallIcon,
} from "react-icons/cg";
import { IoApps, IoColorPaletteOutline, IoCube } from "react-icons/io5";
import { AiOutlineTool } from "react-icons/ai";
import { TbSlideshow } from "react-icons/tb";
import { SiMlflow } from "react-icons/si";
import { PieChart } from "react-minimal-pie-chart";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAws,
  FaDatabase,
  FaGithub,
  FaNetworkWired,
  FaPython,
} from "react-icons/fa";
import ReactHtmlParser from "html-react-parser";
// import JsxParser from "parser-string-html-jsx";
import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";
import CustomButton from "../../components/common/Button";
// import NavigationTabs from "../../components/NavigationTabs";

// import { sectionStyle, sectionHeaderStyle } from "../../data/globals";

// import avatar from "../../assets/images/Me.jpeg";
// import nullimgT from "../../assets/images/nullimgT.png";
// import univers from "../../assets/images/logo-2.png";
// import loading from "../../assets/images/04de2e31234507.564a1d23645bf2.gif";
// import workman from "../../assets/images/workmanlogomain.png";
// import CommodifyProjectImage from "../../assets/images/Commodify.png";
// import nullImg from "../../assets/images/nullimgT.png";

// function ProfileOverview(props) {
//   const unitDataStyle = {
//     padding: "0.5rem 1rem 0.5rem 0.2rem",
//     textAlign: "left",
//   };

//   const unitDataWrapperStyle = {
//     fontSize: "1.4rem",
//     maxWidth: "600px",
//   };

//   return (
//     <div
//       className="cols"
//       style={{ fontSize: "1.5rem", color: "var(--light-text-color)" }}
//     >
//       <Fade bottom cascade>
//         {/* My Profile Summary Section */}
//         <section style={sectionStyle}>
//           <h2 style={sectionHeaderStyle}>My Profile:</h2>
//           <div className="cols">
//             <div className="rows" style={unitDataWrapperStyle}>
//               <span className="lg-35" style={unitDataStyle}>
//                 Email Address:
//               </span>
//               <span className="lg-60" style={unitDataStyle}>
//                 ogunbanjotemiloluwa@gmail.com
//               </span>
//             </div>

//             <div className="rows" style={unitDataWrapperStyle}>
//               <span className="lg-35" style={unitDataStyle}>
//                 Mobile Number:
//               </span>
//               <span className="lg-60" style={unitDataStyle}>
//                 +2349059620514
//               </span>
//             </div>

//             <div className="rows" style={unitDataWrapperStyle}>
//               <span className="lg-35" style={unitDataStyle}>
//                 Nationality:
//               </span>
//               <span className="lg-60" style={unitDataStyle}>
//                 Nigerian
//               </span>
//             </div>

//             <div className="rows" style={unitDataWrapperStyle}>
//               <span className="lg-35" style={unitDataStyle}>
//                 Language Spoken:
//               </span>
//               <span className="lg-60" style={unitDataStyle}>
//                 English & Yoruba
//               </span>
//             </div>

//             <div className="rows" style={unitDataWrapperStyle}>
//               <span className="lg-35" style={unitDataStyle}>
//                 Current Job:
//               </span>
//               <span className="lg-60" style={unitDataStyle}>
//                 {props.profession}
//               </span>
//             </div>
//           </div>
//         </section>
//       </Fade>

//       <Fade bottom cascade>
//         {/* My Objective Summary Section */}
//         <section style={sectionStyle}>
//           <h2 style={sectionHeaderStyle}>Career Objectives:</h2>
//           <div>
//             To use my wealth of skills and talents to better the lives of people
//           </div>
//         </section>
//       </Fade>

//       <Fade bottom cascade>
//         {/* My Eduction Summary Section */}
//         <section style={sectionStyle}>
//           <h2 style={sectionHeaderStyle}>Education:</h2>
//           <div
//             className="cols education-container"
//             style={{ marginLeft: "0.5rem" }}
//           >
//             <div className="cols">
//               <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
//                 University of Lagos, Akoka Nigeria
//               </h4>
//               <em>Tertiary Institution</em>
//               <span>Mechanical Engineering (B. Sc.)</span>
//               <span className="date">2015 - Present</span>
//             </div>

//             <div className="cols">
//               <h4 style={{ marginBottom: 0 }}>Solidrock Model College</h4>
//               <em>Secondary Institution</em>
//               <span className="date">2009 - 2015</span>
//             </div>

//             <div className="cols">
//               <h4 style={{ marginBottom: 0 }}>Akesan Royal School</h4>
//               <em>Primary Institution</em>
//               <span className="date">2001 - 2009</span>
//             </div>
//           </div>
//         </section>
//       </Fade>

//       <Fade bottom cascade>
//         {/* My Work Experiences */}
//         <section style={sectionStyle}>
//           <h2 style={sectionHeaderStyle}>Industrial Experiences:</h2>
//           <div className="rows experiences" style={{ marginLeft: "0.5rem" }}>
//             <div className="cols card">
//               <div className="rows img-wrapper">
//                 <img
//                   src={require("../../assets/images/FBN-logo.png")}
//                   alt="teh"
//                   width={200}
//                   height={80}
//                 />
//               </div>
//               <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
//                 First Bank Of Nigeria
//               </h4>
//               <em>Banking & Finance</em>
//               <span>RPA Developer</span>
//               <span className="date">2015 - Present</span>
//             </div>

//             <div className="cols card">
//               <div className="rows img-wrapper">
//                 <img
//                   src={nullImg}
//                   alt="teh"
//                   // width={200}
//                   height={80}
//                 />
//               </div>
//               <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
//                 Lixom Technologies
//               </h4>
//               <em>Game & Casino</em>
//               <span>Senior NodeJS/Backend Engineer</span>
//               <span className="date">2009 - 2015</span>
//             </div>

//             <div className="cols card">
//               <div className="rows img-wrapper">
//                 <img
//                   src={require("../../assets/images/Commodify.png")}
//                   alt="teh"
//                   height={80}
//                 />
//               </div>
//               <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>TradeBuza</h4>
//               <em>Agro-Tech & FinTech</em>
//               <span>Senior Frontend Developer</span>
//               <span className="date">2001 - 2009</span>
//             </div>

//             <div className="cols card">
//               <div className="rows img-wrapper">
//                 <img
//                   src={require("../../assets/images/Jara.ico")}
//                   alt="teh"
//                   height={80}
//                 />
//               </div>
//               <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
//                 Jara Analytics
//               </h4>
//               <em>E-Commerce & FinTech</em>
//               <span>Junior Fullstack Developer</span>
//               <span className="date">2001 - 2009</span>
//             </div>
//           </div>
//         </section>
//       </Fade>
//     </div>
//   );
// }

// function ProjectTab(props) {
//   const { name, type, description, isDummy, previewImg, link, tags } =
//     props.details;
//   const classForDummyElements = isDummy ? "pad lazy-loading" : "";

//   return (
//     <Fade bottom>
//       <div
//         className={`cols ${isDummy ? "dummy" : ""} project-item`}
//         //   data-tilt
//         //   data-tilt-max="25"
//         //   data-tilt-speed="400"
//         //   data-tilt-glare="true"
//       >
//         <div
//           style={{
//             backgroundImage: `linear-gradient(-135deg, rgba(255, 91, 152, 0.0), rgba(255, 255, 255, 0) 25%), url(${
//               previewImg ? previewImg : loading
//             })`,
//             backgroundSize: "200px",
//             backgroundPosition: "8% 11%",
//             backgroundRepeat: "no-repeat",
//           }}
//           className={`project-item-preview top`}
//           data-index={props.index + 1}
//         ></div>
//         <div className="cols bottom">
//           <h3 className={`project-item-name ${classForDummyElements}`}>
//             {name}
//           </h3>
//           <span className={`project-item-source ${classForDummyElements}`}>
//             {type}
//           </span>
//           <div
//             className={`project-item-tags ${
//               tags ? "line-clamp line-clamp-1" : ""
//             } ${classForDummyElements}`}
//           >
//             {tags}
//           </div>
//           <div
//             className={`project-item-description line-clamp line-clamp-5 ${classForDummyElements}`}
//           >
//             {description}
//           </div>
//           <a
//             href={link ? link : "#"}
//             target="blank"
//             className={`project-view-btn rows ${classForDummyElements}`}
//             disabled={true}
//             data-disabled={link ? false : true}
//           >
//             <span className="content">
//               {link ? "view project" : "coming soon..."}
//             </span>
//             <i className="icofont-caret-right"></i>
//           </a>
//         </div>
//       </div>
//     </Fade>
//   );
// }

const PortfolioIndex = () => {
  const iconStyles = { fontSize: "24px", marginBottom: "8px" };
  const [skillPieWidth, skillPieHeight] = [30, 30];
  const [showProfilePic, setShowProfilePic] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [skills, setSkills] = useState([
    {
      name: "NodeJS",
      level: 9.2,
      tag: "Software Development (Backend)",
      color: "purple",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "Javascript (JS)",
      level: 9.2,
      tag: "Software Development",
      color: "purple",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "ReactJS",
      level: 8.5,
      tag: "Software Development (Frontend)",
      color: "purple",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "React Native",
      level: 5.5,
      tag: "Software Development (Frontend)",
      color: "purple",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "Typescript (TS)",
      level: 8,
      tag: "Software Development",
      color: "purple",
      icon: <CgCodeSlash style={iconStyles} />,
    },
    {
      name: "MySQL",
      level: 7.5,
      tag: "Database (SQL)",
      color: "orange",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "PostgreSQL",
      level: 5.5,
      tag: "Database (SQL)",
      color: "orange",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "RethinkDB",
      level: 3.5,
      tag: "Database (NoSQL)",
      color: "orange",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "MongoDB",
      level: 5,
      tag: "Database (NoSQL)",
      color: "orange",
      icon: <FaDatabase style={iconStyles} />,
    },
    {
      name: "Git/GitHub",
      level: 7,
      tag: "Version Control System (VCS)",
      color: "orange",
      icon: <FaGithub style={iconStyles} />,
    },
    {
      name: "REST API",
      level: 9,
      tag: "web development",
      color: "orange",
      icon: <FaNetworkWired style={iconStyles} />,
    },
    {
      name: "GraphQL",
      level: 2.5,
      tag: "web development",
      color: "orange",
      icon: <CgChart style={iconStyles} />,
    },
    {
      name: "AWS Services",
      level: 4,
      tag: "web development",
      color: "orange",
      icon: <FaAws style={iconStyles} />,
    },
    {
      name: "Python",
      level: 7,
      tag: "Software Development",
      color: "purple",
      icon: <FaPython style={iconStyles} />,
    },
    {
      name: "Figma",
      level: 5.5,
      color: "orange",
      tag: "UI/UX Design & Prototyping",
      icon: <IoColorPaletteOutline style={iconStyles} />,
    },
    {
      name: "Adobe XD",
      level: 3,
      color: "orange",
      tag: "UI/UX Design & Prototyping",
      icon: <IoColorPaletteOutline style={iconStyles} />,
    },
    {
      name: "Adobe Photoshop",
      level: 6.5,
      color: "orange",
      tag: "graphics design",
      icon: <TbSlideshow style={iconStyles} />,
    },
    {
      name: "Blender",
      level: 7,
      color: "orange",
      tag: "Animations & Motion Graphics",
      icon: <IoCube style={iconStyles} />,
    },
    {
      name: "Microsoft Power Apps",
      level: 5,
      color: "orange",
      tag: "Low-Code Software Development",
      icon: <IoApps style={iconStyles} />,
    },
    // {
    //   name: "Teta",
    //   level: 5,
    //   color: "orange",
    //   tag: "Low-Code Software Development",
    //   icon: <IoCode style={iconStyles} />,
    // },
    {
      name: "UI Path",
      level: 3,
      color: "orange",
      tag: "Process & Automations",
      icon: <SiMlflow style={iconStyles} />,
    },
    {
      name: "Autodesk AutoCAD",
      level: 5,
      color: "orange",
      tag: "machinery & Computer Aided Designs",
    },
    {
      name: "Autodesk Inventor",
      level: 6,
      color: "orange",
      tag: "machinery & Computer Aided Designs",
    },
    {
      name: "Welding & Fabrication",
      level: 4,
      color: "orange",
      tag: "machinery & Computer Aided Designs",
      icon: <AiOutlineTool style={iconStyles} />,
    },
  ]);

  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      company: "First Bank Of Nigeria",
      timeframe: "Sep 2022 - March 2023",
      role: "RPA Developer • Internship",
      description: "I was responsible for building a Time Sheet Process Application using Microsoft PowerApp, SharePoint Lists and Power Automate. I was able to learn the fundamentals of No-code development and due to the guidance from the Exec 200 Team",
      images: [],
    },
    {
      company: "TradeBuza",
      timeframe: "May 2022 - Present",
      role: "Senior Frontend Developer • Full-Time",
      description: `<p>I was responsible for:</p>
      <ol>
      <li>Developing the frontend Web Application for the various new agro-tech products in the suites</li>
      <li>Rewriting the legacy apps</li>
      <li>Test software to ensure responsiveness & 
      efficiency.</li> 
      <li>Create security and data protection 
      settings.</li>
      <li>Collaboration with the team to brainstorm and generate ideas for improvements of the app suites</li>
      </ol>
      `,
    },
    {
      company: "Lixom Technologies Ltd.",
      timeframe: "Nov 2021 - Present",
      role: "Senior Backend/Game Engineer • Full-Time",
      description: `<p>Built scalable and automated solutions for 4 major game companies (can not disclose due to NDA). These were some of my roles:</p>
      <ol style={{ list-style: 'decimal' }}>
      <li>Collaborating with the team of professionals engineers to build and document the server-side architecture for the game suite. </li>
      
      <li>Writing effective algorithms to handle data analytics of the players, admin and agents on the platform. </li>
      
      <li>Develop effective (super fast, optimized time & space complexity) algorithms that can process millions of user data. </li>
      
      <li>Perform coverage, integration and unit testing on the whole game flow. </li>
      
      <li>Manage & troubleshoot cloud (AWS, Digital Ocean) infrastructures, integrations and payment portals, </li>
      
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
      <li>Create security and data protection 
      settings.</li>
      </ol>
      `,
    },
  ]);

  // const [projects] = useState([
  //   {
  //     name: "Commodify",
  //     type: "Loans & Finance",
  //     description:
  //       "Commodify provides working capital loans to agricultural commodity exporters in Sub-Saharan Africa",
  //     previewImg: CommodifyProjectImage,
  //     link: "https://commodify.co",
  //   },
  //   {
  //     name: "T-Guide",
  //     type: "Business",
  //     description:
  //       "T-Guide is a react app that serves as a virtual tour guide for travelers and tourists.",
  //     previewImg: nullimgT,
  //     link: "https://t-guide.herokuapp.com",
  //   },
  //   {
  //     name: "Univers",
  //     type: "e-Commerce",
  //     description:
  //       "An ecommerce platform for buying and selling all categories of products from household items to fashion items and many more.",
  //     previewImg: univers,
  //     link: "https://oneunivers.herokuapp.com",
  //   },
  //   {
  //     name: "Game Project",
  //     type: "Games",
  //     description:
  //       "Game Project is a 2D game written in VanillaJS. The game consists of a player (plane) and opponent (plane). The player can change its color and can navigate using the keyboard keys.",
  //     previewImg: nullimgT,
  //     link: "https://hitmee.herokuapp.com",
  //   },
  //   {
  //     name: "Workman",
  //     type: "Lifestyle",
  //     description:
  //       "Workman was designed to help people reach out to a wide range of services at the click of the button",
  //     previewImg: workman,
  //     link: null,
  //   },
  // ]);

  // const showSubSection = (_, isActive) => {
  //   switch (isActive) {
  //     case 0:
  //       return <ProfileOverview profession={null} />;

  //     // case 1:
  //     //   return withSkillCategory(context);

  //     case 2:
  //       return projects.map((aProject, index) => {
  //         return <ProjectTab key={index} index={index} details={aProject} />;
  //       });

  //     case 3:
  //       return <ContactTab />;

  //     default:
  //       return null;
  //   }
  // };

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
        setShowProfilePic(true);
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
        setShowProfilePic(true);
      },
    ],
  ];

  const getRandomQuote = () => {
    const quoteIndex = Math.floor(Math.random() * quoteSequence.length);
    return quoteSequence[quoteIndex];
  };

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
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

            <div className="flex flex-row pt-10" style={{ paddingTop: "40px" }}>
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

      <Fade bottom cascade>
        <section
          id="skill-section"
          className="skills flex flex-col "
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
            {(showAllSkills ? skills : skills.slice(0, 9)).map((eachSkill) => (
              <div
                className="card flex flex-row mx-6"
                style={{
                  borderRadius: "8px",
                }}
              >
                <div className="flex flex-col">
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
                    lineWidth={25}
                    data={[
                      {
                        title: "Mastered",
                        value: eachSkill.level * 10,
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
                        })(eachSkill.level),
                      },
                      {
                        title: "Unmastered",
                        value: 100 - eachSkill.level * 10,
                        color: "#555",
                      },
                      // { title: 'Three', value: 10, color: '#6A2135' },
                    ]}
                    style={{ height: "60px", marginLeft: "15px" }}
                  />
                </div>
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
          />
        </section>
      </Fade>

      {/* <Fade bottom cascade>
        <section
          id="project-section"
          className="projects flex flex-col items-center p-5"
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
            Some Cool Projects
          </h2>

          <div className="flex flex-row flex-wrap">
            {(showAllSkills ? skills : skills.slice(0, 6)).map((eachSkill) => (
              <div
                className="card flex flex-row mx-6"
                style={{
                  borderRadius: "8px",
                }}
              >
                <div className="flex flex-col">
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
                    lineWidth={25}
                    data={[
                      {
                        title: "Mastered",
                        value: eachSkill.level * 10,
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
                        })(eachSkill.level),
                      },
                      {
                        title: "Unmastered",
                        value: 100 - eachSkill.level * 10,
                        color: "#555",
                      },
                      // { title: 'Three', value: 10, color: '#6A2135' },
                    ]}
                    style={{ height: "60px", marginLeft: "15px" }}
                  />
                </div>
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
                    ? `Show ${skills.length - 6} more`
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
      </Fade> */}

      <Fade bottom cascade>
        <section className="experiences flex flex-col items-left p-5">
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

          <div className="flex flex-col">
            {(showAllExperiences ? experiences : experiences.slice(0, 3)).map(
              (each) => (
                <div
                  className={`card flex flex-col sm:flex-row mb-6 pb-3 pt-3 pl-8 my-3 -ml-1`}
                  style={{
                    borderLeft: "1px dashed #444",
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
                      className="text-l mt-2 sm:mt-5"
                      style={{
                        fontWeight: 500,
                        color: "var(--tab-notice-bgcolor)",
                        letterSpacing: "1px",
                        lineHeight: 2,
                      }}
                    >
                      {each.role}
                    </span>
                  </div>

                  <div className="flex flex-col flew-grow sm:ml-8 mt-3 sm:mt-0 text-2xl w-full">
                    <span
                      className="text-3xl mb-1 sm:mb-4"
                      style={{ fontWeight: 700, color: "var(--text-color)" }}
                    >
                      {each.company}
                    </span>
                    <div className="grid grid-cols-6 gap-6 w-full">
                      {each.images &&
                        each.images.map((eachImg) => (
                          <img className="rounded-lg" src={eachImg} alt="#" />
                        ))}
                    </div>
                    <div
                      className="mt-1 sm:mt-4"
                      style={{
                        // fontFamily: "Nunito",
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "var(--light-text-color)",
                        lineHeight: 2.25,
                      }}
                    >
                      {ReactHtmlParser(each.description)}
                    </div>
                  </div>
                </div>
              )
            )}

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
                    ? `Show ${experiences.length - 3} more`
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
        </section>
      </Fade>
    </>
  );
};

export default PortfolioIndex;
