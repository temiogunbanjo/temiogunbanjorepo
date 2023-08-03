import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { TypeAnimation } from "react-type-animation";
// import Fade from "@successtar/react-reveal/Fade";
import {
  Box,
  Stack,
  Typography,
  Collapse,
  TextField,
  IconButton,
} from "@mui/material";
import {
  HiLightningBolt as FeaturedSkillBadgeIcon,
  HiExternalLink,
} from "react-icons/hi";

import { setDarkMode } from "../../../utils";
import CustomButton from "../../../components/common/Button";
import Status from "../../../components/common/StatusIndicator";
import { AiOutlineClose } from "react-icons/ai";

export const SkillInfo = ({ data, experiences, closeHandler }) => {
  // console.log(experiences);
  const hasMore = true;

  return (
    <Stack sx={{ color: "var(--text-color)" }}>
      <Stack direction="row" className="mb-8 flex-wrap sm:flex-nowrap">
        <div
          className="flex flex-row-reverse w-full items-center justify-center px-5 py-4.5 rounded-lg mr-8"
          style={{
            width: "120px",
            height: "120px",
            backgroundColor: "rgba(170, 170, 170, 0.15)",
          }}
        >
          <img
            src={data?.icon}
            alt={""}
            width="100%"
            height="100%"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>

        <div className="mt-4 sm:mt-0">
          <div className="flex flex-row items-center">
            <Typography
              component="h2"
              style={{
                fontSize: "24px",
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              {data?.name}
            </Typography>

            {data?.featured && (
              <FeaturedSkillBadgeIcon
                style={{
                  fontSize: "20px",
                  marginLeft: "10px",
                  // marginTop: "6px",
                  color: "gold",
                }}
              />
            )}
          </div>

          <Stack direction="row" flexWrap="wrap" className="" sx={{ mt: 2 }}>
            {data?.tags?.map((tag, index) => {
              return (
                <Status
                  key={index}
                  value={tag}
                  type={"neutral"}
                  sx={{ marginBottom: "8px", marginRight: "8px" }}
                />
              );
            })}
          </Stack>
        </div>
      </Stack>

      {data?.description && data?.description?.length > 0 && (
        <Stack className="mb-8">
          <div
            className="border-b w-full pb-2"
            style={{ borderColor: "var(--border-line-color)" }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{ fontFamily: "Poppins", textTransform: "capitalize" }}
            >
              {`About ${data?.name}:`}
            </Typography>
          </div>

          <p
            className="mt-4"
            style={{ lineHeight: 2, fontSize: "1.2rem", fontWeight: 400 }}
          >
            {data?.description}
          </p>
        </Stack>
      )}

      {hasMore && experiences && experiences?.length > 0 && (
        <Stack className="mb-8">
          <div
            className="border-b w-full pb-2"
            style={{ borderColor: "var(--border-line-color)" }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{ fontFamily: "Poppins" }}
            >
              Gained From:
            </Typography>
          </div>

          <Stack direction="row" className="mt-2 flex-wrap">
            {experiences.map((exp, index) => {
              const expLink = `/home#${exp?.company
                ?.replace(/['".()&]/gi, "")
                .replace(/\s+/gi, "-")}`;
              return (
                <Box
                  component="a"
                  className="flex flex-grow my-2 py-2 pr-2 flex-none"
                  href={expLink}
                  onClick={() => {
                    closeHandler();
                  }}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "50%",
                    },
                  }}
                >
                  <Stack key={index} direction="row" className="flex-grow">
                    <div
                      className="flex flex-row-reverse w-full items-center justify-center p-2 rounded-lg mr-6"
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "rgba(170, 170, 170, 0.15)",
                      }}
                    >
                      <img
                        src={
                          exp?.icon ||
                          "https://cdn.onlinewebfonts.com/svg/img_404146.png"
                        }
                        alt={""}
                        width="100%"
                        height="100%"
                        style={{
                          objectFit: "contain",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>

                    <div className="flex flex-col">
                      <Typography
                        component="h2"
                        style={{
                          fontFamily: "Poppins",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                          textTransform: "capitalize",
                          // letterSpacing: "0.5px",
                        }}
                      >
                        {exp?.company}
                      </Typography>

                      <span
                        className="mt-1 uppercase"
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--primary-color)",
                          letterSpacing: "0.5px",
                          lineHeight: 1.5,
                        }}
                      >
                        {exp?.role}
                      </span>
                    </div>
                  </Stack>
                </Box>
              );
            })}
          </Stack>
        </Stack>
      )}

      {hasMore && data?.certifications && data?.certifications?.length > 0 && (
        <Stack className="mb-8">
          <div
            className="border-b w-full pb-2"
            style={{ borderColor: "var(--border-line-color)" }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{ fontFamily: "Poppins" }}
            >
              Skill Certifications
            </Typography>
          </div>

          <Stack className="mt-4">
            {data?.certifications.map((certificate, index, a) => (
              <Stack
                key={index}
                direction="row"
                className={`${
                  index === a.length - 5 ? "border-b" : ""
                } my-1.5 pb-3`}
                sx={{ borderColor: "var(--border-line-color)" }}
              >
                <div
                  className="flex flex-row w-full items-center justify-center p-0 overflow-hidden rounded-lg mr-6"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(170, 170, 170, 0.15)",
                  }}
                >
                  <img
                    src={certificate?.organization_icon}
                    alt={""}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-row items-center justify-start -mt-0.5">
                    <Typography
                      component="h2"
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        // letterSpacing: "0.5px",
                      }}
                    >
                      {certificate?.title}
                    </Typography>
                  </div>

                  <span
                    className="inline-block mt-0.5 text-lg"
                    sx={{ color: "var(--light-text-color)", fontWeight: 500 }}
                  >
                    {`By ${certificate?.organization}`}
                  </span>

                  <span
                    className="inline-block mt-1.5 text-lg"
                    sx={{ color: "var(--light-text-color)" }}
                  >
                    {`Issued on ${certificate?.issue_date}`}
                  </span>

                  {(certificate?.certificateId ||
                    certificate?.verification_link) && (
                    <a
                      href={certificate?.verification_link}
                      className="flex flex-row items-center text-sm mt-1.5 uppercase"
                      style={{
                        // fontFamily: "'Open Sans'",
                        fontWeight: 500,
                        color: "var(--primary-color)",
                        letterSpacing: "0.5px",
                        lineHeight: 1.5,
                      }}
                    >
                      {"VIEW CERTIFICATE"}
                      <HiExternalLink className="ml-2" />
                    </a>
                  )}
                </div>
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export const VisitorAuth = ({ closeHandler }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState("Guest 1");
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setTouched] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFocus = (event) => {
    if (!isTouched) {
      setTouched(true);
    }
    setIsDone(false);
  };

  const testPattern = /^(([A-Za-z]{1,})(\s*))+$/gi;

  const handleChange = (event) => {
    const test = event.target.value.match(testPattern) !== null;
    setIsValid(test);
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const test = value.match(testPattern) !== null;
    setIsValid(test);
    setIsDone(true);

    if (test === true) {
      setIsSubmitting(true);
      window.localStorage.setItem("visitor_name", value);
      window.setTimeout(() => {
        closeHandler(event);
        setIsSubmitting(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const vName = window.localStorage.getItem("visitor_name");
    const isDarkMode = window.localStorage.getItem("dark_mode");

    if (vName) {
      setValue(vName);
      navigate("/home");
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    } else {
      setDarkMode(true);
    }
  }, [navigate]);

  return (
    <Stack justifyContent={"flex-end"}>
      <IconButton
        className="self-end -mr-4 -top-3 -right-4"
        onClick={closeHandler}
      >
        <AiOutlineClose
          style={{ fontSize: "24px", color: "var(--primary-color)" }}
        />
      </IconButton>
      <Stack
        direction="row"
        className="-mt-4 items-start"
        style={{
          justifyContent: "center",
          width: "500px",
          minWidth: { xs: "unset", md: "505px" },
          maxWidth: "750px",
        }}
      >
        <figure
          className="p-5 mr-10 flex flex-row items-center justify-center"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.32)",
            borderRadius: "8px",
          }}
        >
          {(() => {
            let face = "😋";
            switch (true) {
              case !isTouched:
                face = "😋";
                break;

              case isTouched && value.length === 0 && !isDone:
                face = "🙂";
                break;

              case isTouched &&
                value.length > 0 &&
                value.length <= 20 &&
                !isDone:
                face = "👀";
                break;

              case isTouched && value.length > 20 && !isDone:
                face = "😳";
                break;

              case isTouched && value.length > 0 && isDone && isValid:
                face = "👍";
                break;

              case isTouched && value.length > 0 && isDone && !isValid:
                face = "🙄";
                break;

              default:
                face = "😋";
                break;
            }
            return <span className="text-6xl">{face}</span>;
          })()}
        </figure>

        <div className="flex flex-col">
          <h3
            className="text-4xl text-left capitalize"
            style={{ color: "var(--text-color)", fontWeight: 500 }}
          >
            Hey Buddy, quick one...
          </h3>

          <p
            className="py-8 mb-5 text-left"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--text-color)",
              lineHeight: 2,
              maxWidth: "550px",
              minHeight: "100px",
            }}
          >
            Before we go in, please introduce yourself so that I can remember
            who paid me a visit. Pheww, don't mind me, I tend to forget little
            things pretty fast.
          </p>

          <Collapse orientation="horizontal" in={true} timeout={600}>
            <TextField
              onChange={handleChange}
              onFocus={handleFocus}
              focused={true}
              value={value}
              placeholder="Please enter your name"
              variant="outlined"
              className="text-xl my-2 block"
              InputProps={{
                sx: {
                  fontSize: "1.45rem",
                  px: 1.3,
                  backgroundColor: "rgba(255, 255, 255, 0.32)",
                  color: "var(--text-color)",
                },
              }}
              sx={{
                minWidth: { xs: "150px", md: "300px" },
                width: "100%",
                "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "transparent",
                  },
              }}
            />
          </Collapse>

          <div className="flex flex-row justify-end flex-wrap mt-20">
            <CustomButton
              sx={{
                marginRight: "24px",
                backgroundColor: "var(--border-line-color)",
                color: "#fff",
                boxShadow: "none",
              }}
              value={"Be Anonymous"}
              disabled={false}
              onClick={() => {
                setValue("Anonymous User");
                window.localStorage.setItem("visitor_name", value);
                closeHandler();
              }}
            />

            <CustomButton
              sx={{
                backgroundColor: "var(--primary-color)",
                boxShadow: "none",
                color: "var(--contrast-text-color)",
              }}
              value={isSubmitting ? "Saving..." : "Save & Close"}
              disabled={!isTouched}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </Stack>
    </Stack>
  );
};
