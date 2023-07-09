import { Box, Stack, Typography } from "@mui/material";
import {
  HiLightningBolt as FeaturedSkillBadgeIcon,
  HiExternalLink,
} from "react-icons/hi";
import Status from "../../../components/common/StatusIndicator";

export const SkillInfo = ({ data, experiences, closeHandler }) => {
  // console.log(experiences);
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
                  type={"pending"}
                  sx={{ marginBottom: "8px", marginRight: "8px" }}
                />
              );
            })}
          </Stack>
        </div>
      </Stack>

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
            More Description
          </Typography>
        </div>

        <p className="mt-4" style={{ lineHeight: 2, fontSize: "1.4rem" }}>
          {data?.description ||
            "This section showcases my technical expertise and proficiency in programming languages, frameworks, tools, and technologies. It demonstrates my problem-solving abilities, analytical skills, and commitment to continuous learning. Explore this section to gain insight into the technical knowledge and capabilities that enable me to deliver innovative solutions."}
        </p>
      </Stack>

      {experiences && experiences?.length > 0 && (
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
                        className="text-sm mt-1 uppercase"
                        style={{
                          fontWeight: 500,
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

      {data?.certifications && data?.certifications?.length > 0 && (
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
