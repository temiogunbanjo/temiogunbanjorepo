import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

import { IoMail as MailIcon } from "react-icons/io5";
import { HiExternalLink } from "react-icons/hi";

import {
  BsTelephoneFill as PhoneIcon,
  BsGlobe as WebIcon,
} from "react-icons/bs";


import ReactHtmlParser from "html-react-parser";
import { blueGrey } from "@mui/material/colors";
import StyledAvatar from "../../components/common/StyledAvatar";

const ExperienceCard = (props) => {
  const experienceId = props?.data?.company
    ?.replace(/['".()&]/gi, "")
    .replace(/\s+/gi, "-");
  return (
    <Box
      component="div"
      id={experienceId}
      className={`card flex flex-col sm:flex-row-reverse sm:justify-between mb-12 sm:mb-8 pl-8 my-3 -ml-4`}
      sx={{}}
    >
      <div className="flex flex-col mr-8 sm:ml-12 h-auto timeline-section">
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

        {props?.data?.references && props?.data?.references.length > 0 && (
          <div className="hidden sm:flex flex-col mt-4 sm:mt-5 w-full">
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
                  key={index}
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
                      borderColor: "var(--page-bg-color) !important",
                      fontSize: "12px",
                      width: 30,
                      height: 30,
                      bgcolor: "#4A4453",
                    }}
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          </div>
        )}
      </div>

      <div
        className="flex flex-col flew-grow sm:ml-8 mt-4 sm:mt-0 text-2xl w-full"
        style={{ maxWidth: "800px" }}
      >
        <div className="flex flex-row items-center justify-start">
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

        <Box className="mt-5 sm:mt-6">
          <span
            className="inline-block text-xl mb-2"
            style={{
              color: "#888",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Role Description:
          </span>
          <Box
            className="text-xl md:text-2xl sm:text-justify"
            sx={{
              fontWeight: 500,
              color: "var(--light-text-color)",
              lineHeight: 1.8,
              // letterSpacing: "0.5px",
              fontSize: {
                xs: "12px",
                md: "12px",
              },
            }}
          >
            {ReactHtmlParser(props?.data?.description)}
          </Box>
        </Box>

        {props?.data?.relatedSkills &&
          props?.data?.relatedSkills.length > 0 && (
            <div className="flex flex-col justify-start items-start mt-6 sm:mt-7 mb-2">
              <span
                className="text-xl mb-2"
                style={{
                  color: "#888",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                Related Skills:
              </span>
              <span
                className="text-lg uppercase"
                style={{
                  color: "var(--text-color)",
                  fontWeight: 500,
                  lineHeight: 1.8,
                  letterSpacing: "0.5px",
                  fontSize: {
                    xs: "12px",
                    md: "12px",
                  },
                }}
              >
                {props?.data?.relatedSkills.join(" • ")}
              </span>
            </div>
          )}

        {props?.data?.references && props?.data?.references.length > 0 && (
          <div className="sm:hidden flex flex-col mt-4 sm:mt-5 w-full">
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
                  key={index}
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
                      borderColor: "var(--page-bg-color) !important",
                      fontSize: "12px",
                      width: 30,
                      height: 30,
                      bgcolor: "#4A4453",
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

export default ExperienceCard;
