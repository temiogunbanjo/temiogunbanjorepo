import React from "react";
import ReactPlayer from "react-player";
import { Box, Link } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

import { loadLocalFile } from "utils";
import Image from "components/common/Image";
import EmptyState from "components/common/EmptyState";

function ProjectSection({ loadingProjects, data: projects, showAllProjects }) {
  return (
    <section
      className="projects flex flex-col py-12 mb-10"
      style={{
        minHeight: "unset",
      }}
    >
      <h2
        className="mb-5 subtitle left-headings"
        style={{
          // fontSize: "24px",
          color: "var(--text-color)",
          fontWeight: 700,
        }}
      >
        Featured Projects
      </h2>

      <div className="flex flex-row flex-wrap justify-center">
        {!loadingProjects && projects.length > 0 ? (
          (showAllProjects ? projects : projects.slice(0, 9)).map(
            (eachProj, index) => {
              const isLocalImage =
                eachProj?.content?.[0]?.type === "image" &&
                eachProj?.content?.[0]?.url &&
                !eachProj?.content?.[0]?.url.includes("http");

              return (
                <div
                  key={index}
                  className={`flex py-12 mb-4 ${
                    index % 2 === 0
                      ? "flex-col sm:flex-row"
                      : "flex-col sm:flex-row-reverse"
                  } items-center md:items-center`}
                  style={{
                    width: "100%",
                  }}
                >
                  <Box
                    className={`${
                      index % 2 === 0 ? "mr-0 sm:mr-12" : "ml-0 sm:ml-12"
                    } mb-10 sm:mb-0`}
                    sx={{
                      width: {
                        xs: "100%",
                        md: "50vw",
                      },
                      height: "250px",
                      maxWidth: {
                        xs: "unset",
                        sm: "400px",
                      },
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: {
                        sm: "1px solid var(--border-line-color)",
                        xs: "1px solid var(--border-line-color)",
                      },
                      backgroundColor: "var(--border-line-color)",
                    }}
                  >
                    {eachProj?.content?.[0]?.type === "video" && (
                      <ReactPlayer
                        url={eachProj?.content?.[0]?.url || ""}
                        controls={true}
                        width={"100%"}
                        height={"100%"}
                        // style={{ width: "250px", height: "250px" }}
                      />
                    )}

                    {eachProj?.content?.[0]?.type === "image" && (
                      <Image
                        src={
                          isLocalImage
                            ? loadLocalFile(eachProj?.content?.[0]?.url)
                            : eachProj?.content?.[0]?.url || ""
                        }
                        alt={eachProj.name}
                        style={{
                          width: "calc(100% - 1px)",
                          height: "100%",
                        }}
                      />
                    )}
                  </Box>

                  <div className="flex flex-col w-full px-6 pb-6">
                    <div className="rows img-wrapper">
                      <b
                        className="text-4xl"
                        style={{
                          margin: 0,
                          color: "var(--text-color)",
                          fontWeight: 400,
                        }}
                      >
                        {eachProj.name}
                      </b>
                    </div>
                    <span
                      className="mt-3 capitalize"
                      style={{
                        color: "var(--light-text-color)",
                        fontWeight: 600,
                        opacity: 0.8,
                      }}
                    >
                      {eachProj.tag}
                    </span>
                    <p
                      className="mt-3 text-xl md:text-2xl"
                      style={{
                        fontSize: "14px",
                        color: "var(--light-text-color)",
                        fontWeight: 400,
                        lineHeight: 1.8,
                        maxWidth: "600px",
                      }}
                    >
                      {eachProj.description}
                    </p>

                    {eachProj.link && (
                      <Link
                        href={eachProj.link}
                        className="flex flex-row items-center text-xl mt-3"
                        style={{
                          // fontFamily: "'Open Sans'",
                          fontWeight: 600,
                          color: "var(--primary-color)",
                          lineHeight: 2,
                          textDecoration: "none",
                        }}
                      >
                        Read more{" "}
                        <FaAngleRight style={{ verticalAlign: "middle" }} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            }
          )
        ) : (
          <EmptyState
            className="flex flex-col items-center justify-center"
            isLoading={loadingProjects}
          />
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
