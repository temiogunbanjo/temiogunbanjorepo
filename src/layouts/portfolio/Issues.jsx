import React, { useState } from "react";
import ReactHtmlParser from "html-react-parser";
import {
  CgEye,
  CgArrowLongLeft as LeftIcon1,
  CgPathOutline as CallIcon,
} from "react-icons/cg";
import {
  BsChevronLeft as LeftIcon,
} from "react-icons/bs";
// import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";
import CustomButton from "../../components/common/Button";

const Issues = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "How I got my first tech job!",
      timeframe: "Sep 2022 - March 2023",
      role: "RPA Developer • Internship at First Bank of Nigeria",
      content: "I was responsible for ...",
    },
    {
      title: "How to code on your phone",
      timeframe: "May 2022 - Present",
      role: "Senior Frontend Developer • Full-Time",
      content: "I was responsible for ...",
    },
    {
      title: "The Trap of Remote Work And Burnouts",
      timeframe: "Nov 2021 - Present",
      role: "Senior Backend/Game Engineer • Full-Time",
      content: `Built scalable and automated solutions for major game companies (can not disclose due to NDA) in the country. I was responsible for:

      1. Collaborate with the team of professionals engineers to build and document the server-side architecture for the game suite. 
      
      2. Write effective algorithm to handle data analytics of the players, admin and agents on the platform. 
      
      3. Develop effective (super fast and has low time & space complexity) algorithms that can process millions of data. 
      
      4. Perform coverage, integration and unit testing on the whole game flow. 
      
      5. Manage & troubleshoot cloud (AWS, Digital Ocean) integrations and payment portals 
      
      6. Write efficient automation scripts to manage automated tasks such as result generation, ticket events and user activity monitoring. 
      
      7. Documentation of the API endpoints. 
      
      8. Management and supervision of my engineers.
      `,
    },
    {
      title: "Jara Analytics",
      timeframe: "May 2021 - Feb 2022",
      role: "Fullstack Software Engineer • Full-Time",
      content: `<p>I was responsible for:</p>
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

  return (
    <>
      <Fade bottom cascade>
        <section
          className="experiences flex flex-col items-left p-5 "
          style={{
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
            <a href="/" className="-ml-3">
              <LeftIcon />
            </a>
            <span className="ml-5">🐞🔨 Career Challenges Catalogue</span>
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
                      fontSize: '14px',
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
                    flex: 'none'
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
    </>
  );
};

export default Issues;
