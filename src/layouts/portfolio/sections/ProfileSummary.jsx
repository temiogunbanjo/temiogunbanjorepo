import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";
import AppContext from "../../../context/AppContext";

function ProfileSummary() {
  const [bios] = useState([
    "I am a Full Stack Software Engineer",
    "I am a Mobile App Developer",
    "I am a Graphics Designer",
    "I am a Mechanical Engineer",
    `I primarily work as a Fullstack Software Developer with ${
      new Date().getFullYear() - 2019
    } years of professional experience building RESTful APIs`,
    `I primarily work as a Fullstack Software Developer with ${
      new Date().getFullYear() - 2019
    } years of professional experience managing databases (NoSQL, ORM, Amazon RDS, and RDBMS)`,
    `I primarily work as a Fullstack Software Developer with ${
      new Date().getFullYear() - 2019
    } years of professional experience building modern websites using the M.E.R.N. (MongoDB, Express, ReactJS, NodeJS) stack`,
    "Finally...",
    "Finally, I am a recent graduate of the University of Lagos. One the top universities in Nigeria",
    "Nice to meet you!",
  ]);

  return (
    <AppContext.Consumer>
      {(context) => (
        <Fade bottom>
          <section className="cols user-profile-section">
            <div className="rows img-wrapper border">
              <img
                className="user-profile-picture"
                src={context.avatar}
                alt="Temiloluwa"
                width="120"
                height="120"
              />
              <span className="username">{context.name}</span>
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
              sequence={[
                bios[0], // Types 'One'
                1000, // Waits 1s
                bios[1], // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                bios[2], // Types 'Three' without deleting 'Two'
                1000,
                bios[3],
                1000,
                bios[4],
                4000, // Waits 1s
                bios[5], // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                bios[6], // Types 'Three' without deleting 'Two'
                1000,
                bios[7],
                1000,
                bios[8],
                1000,
                bios[9],
                3000,
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              speed={45}
              deletionSpeed={88}
              cursor={true}
              repeat={Infinity}
              className="user-details"
              style={{ fontSize: "1.45rem", margin: "1.8rem 0 0" }}
            />
            <i
              className="user-last-seen"
              style={{ margin: "1.8rem 0 0", fontSize: "1rem", width: "100%" }}
            >
              {`Last updated on ${new Date(2023, 1, 6).toDateString()}`}
            </i>
          </section>
        </Fade>
      )}
    </AppContext.Consumer>
  );
}

export default ProfileSummary;
