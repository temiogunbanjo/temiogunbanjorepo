import { Collapse } from "@mui/material";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import Image from "components/common/Image";

import { quoteSequence } from "database/globals";
import { getRandomItem } from "utils";

import profilePic from "assets/images/Me.jpeg";

function HeroProfile() {
  const [showProfilePic, setShowProfilePic] = useState(false);

  return (
    <div className="flex flex-col user-profile-section overflow-hidden shadow--md shadow-none">
      <div
        className="w-full flex flex-row img-wrapper mt-0 mb-12 transition-all ease-in"
        style={{
          opacity: showProfilePic ? 1 : 0,
        }}
      >
        <Image
          className="user-profile-picture shadow-lg sm:shadow-none"
          src={profilePic}
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
            fontSize: "1rem",
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
  );
}

export default HeroProfile;
