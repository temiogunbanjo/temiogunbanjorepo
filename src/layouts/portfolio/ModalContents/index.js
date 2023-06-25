import { Stack, Typography } from "@mui/material";
import { HiLightningBolt as FeaturedSkillBadgeIcon } from "react-icons/hi";
import Status from "../../../components/common/StatusIndicator";

export const SkillInfo = ({ data }) => {
  return (
    <Stack sx={{ color: "var(--text-color)" }}>
      <Stack direction="row" className="mb-8">
        <div
          className="flex flex-row-reverse w-full items-center justify-between px-3 py-2.5 rounded-lg mr-8"
          style={{
            maxWidth: "150px",
            height: "130px",
            backgroundColor: "rgba(170, 170, 170, 0.15)",
          }}
        ></div>

        <div>
          <div className="flex flex-row items-center">
            <Typography component="h2" style={{ fontSize: "24px" }}>
              {data?.name}
            </Typography>

            {data?.featured && (
              <FeaturedSkillBadgeIcon
                style={{
                  fontSize: "20px",
                  marginLeft: "6px",
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
          className="border-b w-full pb-2"
          style={{ borderColor: "var(--border-line-color)" }}
        >
          <Typography variant="h6" component="h2">
            More Description
          </Typography>
        </div>

        <p className="mt-4 text-lg">
          This section showcases my technical expertise and proficiency in
          programming languages, frameworks, tools, and technologies. It
          demonstrates my problem-solving abilities, analytical skills, and
          commitment to continuous learning. Explore this section to gain
          insight into the technical knowledge and capabilities that enable me
          to deliver innovative solutions.
        </p>
      </Stack>

      <Stack className="mb-8">
        <div
          className="border-b w-full pb-2"
          style={{ borderColor: "var(--border-line-color)" }}
        >
          <Typography variant="h6" component="h2">
            Related Projects
          </Typography>
        </div>

        <p className="mt-4 text-lg">
          This section showcases my technical expertise and proficiency in
          programming languages, frameworks, tools, and technologies. It
          demonstrates my problem-solving abilities, analytical skills, and
          commitment to continuous learning. Explore this section to gain
          insight into the technical knowledge and capabilities that enable me
          to deliver innovative solutions.
        </p>
      </Stack>
    </Stack>
  );
};
