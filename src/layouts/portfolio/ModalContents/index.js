import { Stack, Typography } from "@mui/material";
import {
  HiLightningBolt as FeaturedSkillBadgeIcon,
  HiExternalLink,
} from "react-icons/hi";
import Status from "../../../components/common/StatusIndicator";

export const SkillInfo = ({ data, experiences }) => {
  console.log(experiences);
  return (
    <Stack sx={{ color: "var(--text-color)" }}>
      <Stack direction="row" className="mb-8">
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
            style={{ objectFit: "contain" }}
          />
        </div>

        <div>
          <div className="flex flex-row items-center">
            <Typography component="h2" style={{ fontSize: "24px" }}>
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
            {data?.tags?.map((tag) => {
              return (
                <Status
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
          className="border-b-2 w-full pb-2"
          style={{ borderColor: "var(--border-line-color)" }}
        >
          <Typography variant="h6" component="h2">
            More Description
          </Typography>
        </div>

        <p className="mt-4 text-lg" style={{ lineHeight: 2 }}>
          {data?.description ||
            "This section showcases my technical expertise and proficiency in programming languages, frameworks, tools, and technologies. It demonstrates my problem-solving abilities, analytical skills, and commitment to continuous learning. Explore this section to gain insight into the technical knowledge and capabilities that enable me to deliver innovative solutions."}
        </p>
      </Stack>

      {experiences && experiences?.length > 0 && (
        <Stack className="mb-8">
          <div
            className="border-b-2 w-full pb-2"
            style={{ borderColor: "var(--border-line-color)" }}
          >
            <Typography variant="h6" component="h2">
              Gained From:
            </Typography>
          </div>

          <Stack className="mt-4">
            {experiences.map((exp, index, a) => (
              <Stack key={index} direction="row" className="">
                <div
                  className="flex flex-row-reverse w-full items-center justify-center px-5 py-4.5 rounded-lg mr-6"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(170, 170, 170, 0.15)",
                  }}
                ></div>

                <div className="flex flex-col">
                  <Typography component="h2" style={{ fontSize: "14px" }}>
                    {data?.name}
                  </Typography>

                  <p
                    className="mt-1 text-lg"
                    style={{ color: "var(--light-text-color)" }}
                  >
                    28-02-2004
                  </p>
                </div>
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}

      {data?.certifications && data?.certifications?.length > 0 && (
        <Stack className="mb-8">
          <div
            className="border-b-2 w-full pb-2"
            style={{ borderColor: "var(--border-line-color)" }}
          >
            <Typography variant="h6" component="h2">
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
                  {/* <Typography
                    component="h2"
                    className="-mt-0.5"
                    sx={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    {certificate?.title}
                  </Typography> */}

                  <div className="flex flex-row items-center justify-start -mt-0.5">
                    <Typography
                      component="h2"
                      sx={{ fontSize: "14px", fontWeight: 500 }}
                    >
                      {certificate?.title}
                    </Typography>
                    {certificate?.verification_link && (
                      <a
                        href={certificate?.verification_link}
                        className="text-xl ml-3"
                        style={{
                          fontWeight: 700,
                          color: "var(--primary-color)",
                        }}
                      >
                        <HiExternalLink />
                      </a>
                    )}
                  </div>

                  <span
                    className="inline-block mt-1.5 text-lg"
                    sx={{ color: "var(--light-text-color)" }}
                  >
                    {`By ${certificate?.organization}`}
                  </span>

                  <span
                    className="inline-block mt-1.5 text-lg"
                    sx={{ color: "var(--light-text-color)" }}
                  >
                    {`Issued on ${certificate?.issue_date}`}
                  </span>
                </div>
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};
