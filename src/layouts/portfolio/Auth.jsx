import React, { useEffect, useState } from "react";
import { IconButton, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IoMailOpen } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { BsTelephoneFill as PhoneIcon } from "react-icons/bs";

// import { setDarkMode } from "../../utils";
import { fetchAllProfiles } from "../../database";
import Spinner from "../../components/common/Spinner";
// import { HiLightningBolt as FeaturedSkillBadgeIcon } from "react-icons/hi";

const ProfileCard = (props) => {
  const { onClick = () => {} } = props;

  return (
    <div
      className="card flex flex-col mx-4 items-center"
      style={{
        borderRadius: "8px",
        padding: "2px",
      }}
    >
      <div
        className="flex flex-row-reverse mb-10 w-full items-center justify-between px-6 py-6 rounded-lg relative"
        style={{
          height: "120px",
          borderRadius: "7px",
          backgroundColor: "rgba(170, 170, 170, 0.10)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 60%, rgba(0, 0, 0, 0.6)), url(${props?.data?.avatar})`,
        }}
      >
        {
          <img
            src={props?.data?.avatar}
            alt={props?.data?.name}
            height="30px"
            className=""
            style={{
              position: "absolute",
              left: "16px",
              bottom: "-27px",
              objectFit: "cover",
              width: "55px",
              height: "55px",
              borderRadius: "50%",
              border: "3px solid var(--page-bg-color)",
              backgroundColor: "var(--page-bg-color)",
            }}
          />
        }
      </div>

      <div
        className="flex flex-row items-end justify-between w-full"
        style={{
          // borderRadius: "8px",
          padding: "15px",
        }}
      >
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

          <span
            className="mt-3 text-xl capitalize text-left"
            style={{ fontWeight: 500, color: "var(--light-text-color)" }}
          >
            {props.data?.professions?.[0]}
          </span>

          <div className="flex flex-row items-center justify-between mt-6">
            <Link
              href={props.data?.link}
              onClick={onClick}
              className="flex flex-row items-center text-2xl rounded-md"
              sx={{
                // px: 1,
                fontWeight: 500,
                color: "var(--primary-color)",
                lineHeight: 2,
                textDecoration: "none",
                // backgroundColor: "rgba(155, 155, 155, 0.1)"
              }}
            >
              View Profile <FaAngleRight style={{ verticalAlign: "middle" }} />
            </Link>

            <div className="flex flex-row">
              <IconButton
                className="flex items-center justify-center"
                sx={{
                  ml: 1,
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  "&:hover *": {
                    color: "var(--primary-color)",
                  }
                }}
              >
                <PhoneIcon
                  style={{
                    fontSize: "15px",
                    color: "var(--light-text-color)",
                  }}
                />
              </IconButton>

              <IconButton
                className="flex items-center justify-center"
                sx={{
                  ml: 1,
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  "&:hover *": {
                    color: "var(--primary-color)",
                  }
                }}
              >
                <IoMailOpen
                  style={{
                    fontSize: "20px",
                    color: "var(--light-text-color)",
                  }}
                />
              </IconButton>
            </div>
          </div>
        </div>

        <div className="flex rounded-full"></div>
      </div>
    </div>
  );
};

const PortfolioAuth = () => {
  const navigate = useNavigate();

  // const [value, setValue] = useState("Guest 1");
  const [profiles, setProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // const vName = window.localStorage.getItem("visitor_name");
    // const isDarkMode = window.localStorage.getItem("dark_mode");

    // if (vName) {
    //   setValue(vName);
    //   navigate("/temi/home");
    // }

    // if (isDarkMode !== null) {
    //   setDarkMode(isDarkMode);
    // } else {
    //   setDarkMode(true);
    // }
  }, [navigate]);

  useEffect(() => {
    (async () => {
      const profilesResponse = await fetchAllProfiles();
      if (profilesResponse) {
        setIsLoading(false);
        setProfiles(profilesResponse);
      }
    })();
  }, []);

  return (
    <>
      <section id="skill-section" className="skills flex flex-col">
        <h2
          className="subtitle center-headings"
          style={{
            // fontSize: "24px",
            color: "var(--text-color)",
            fontWeight: 700,
          }}
        >
          Choose a profile
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
          commitment to continuous learning.
        </span>

        <div className="flex flex-col flex-wrap sm:flex-nowrap w-full">
          {!isLoading ? (
            <div className="flex flex-row justify-center flex-wrap w-4/7">
              {profiles.map((eachProfile, i) => (
                <ProfileCard
                  key={i}
                  data={eachProfile}
                  onClick={() => {
                    if (eachProfile.redirectTo) {
                      navigate(eachProfile.redirectTo);
                    }
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-4/7">
              <Spinner />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioAuth;
