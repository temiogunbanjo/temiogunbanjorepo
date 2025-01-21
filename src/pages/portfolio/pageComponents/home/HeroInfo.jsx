import React, { useState } from "react";
import { Fade } from "@successtar/react-reveal";
import { TypeAnimation } from "react-type-animation";

import { CgArrowLongDown as DownArrowIcon } from "react-icons/cg";
import { BsTelephoneFill as PhoneIcon } from "react-icons/bs";


import CustomButton from "components/common/Button";

function HeroInfo() {
  const [isLayman, setIsLayman] = useState(false);

  return (
    <div
      className="cols sm:mr-12"
      style={{ justifyContent: "center", padding: "10px" }}
    >
      <h1 className="main-text" style={{ fontSize: "5rem" }}>
        <span style={{ fontSize: "28px", fontWeight: 600 }}>Who is </span>
        <br />
        <span style={{}}>Temiloluwa Ogunbanjo ?</span>
      </h1>

      <h3 className="inline-block mt-8 sm:mt-6" style={{ fontSize: "24px" }}>
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
            {`A seasoned software developer with 5+ years of experience building scalable, high-performance web applications using the M.E.R.N. (MongoDB, ExpressJS, React.js, Node.js) stack. Adept at collaborating with teams ranging from startups to enterprise-scale organizations, I bring a unique combination of technical expertise and creative problem-solving. Proficient in crafting intuitive, responsive user interfaces and optimizing frontend performance, I focus on delivering exceptional user experiences. A proud graduate of the University of Lagos, I have led projects that reduced load times by 40%, mentored junior developers, and contributed to cross-functional team success. Let’s create the future of digital innovation together.`}
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
              Simplify?
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
  );
}

const styles = {
  bioStyle: {
    fontSize: "14px",
    textAlign: "justify",
    fontWeight: 400,
    color: "var(--light-text-color)",
    lineHeight: 2,
    maxWidth: "712px",
  },
};

export default HeroInfo;
