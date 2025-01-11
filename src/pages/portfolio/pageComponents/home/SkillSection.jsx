import React, { useCallback, useRef, useState } from "react";
import { Stack, Tab, TextField } from "@mui/material";

import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter as FilterIcon } from "react-icons/bi";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import ResponsiveTab from "components/common/ResponsiveTab";
import TabPanel from "components/common/TabPanel";
import CustomSelect from "components/common/Select";
import SkillCard from "components/Cards/SkillsCard";
import CustomButton from "components/common/Button";
import EmptyState from "components/common/EmptyState";
import { SkillInfo } from "../../ModalContents";

function SkillSection({
  data: skills,
  loading: loadingSkills,
  showAll: showAllSkills,
  setShowAll: setShowAllSkills,
  handleOpen,
  handleClose,
  setDialogContent,
  expIntoSkills,
}) {
  const MAX_SKILLS_DISPLAYED = 6;

  const [skillSearchQuery, setSkillSearchQuery] = useState("");
  const [tabIndex, setTabIndex] = useState(1);

  const skillSearchRef = useRef();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSkillClick = (data, expSkills) => (ev) => {
    handleOpen(ev);
    setDialogContent(
      <SkillInfo
        data={data}
        experiences={expSkills}
        closeHandler={handleClose}
      />
    );
  };

  const filterSkills = useCallback(
    (tabI) => {
      let retValue = skills;
      const queryFilterCallback = (each) => {
        // Search by keyword
        const query = skillSearchQuery.replace(/\.js/gi, "js");
        const isAMatch =
          each?.name?.toLowerCase()?.match(new RegExp(`${query}`, "gi")) !==
          null;
        return isAMatch;
      };

      switch (tabI) {
        case 0: // Interpersonal Skilss
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/interpersonal/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 1: // Mobile & Web Development
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/web development|mobile/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 2: // Cloud Provider
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/cloud/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 3: // Database
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/database/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 4: // Version Control
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter((tag) => tag.search(/vcs/gi) >= 0);

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 5: // Graphics design & Animations
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter(
                  (tag) =>
                    tag.search(/graphics|graphics design|animation/gi) >= 0
                );

              return relatedTags.length > 0;
            })
            .filter(queryFilterCallback);

        case 6: // others
          return retValue
            .filter((each) => {
              const relatedTags = each.tags
                .map((tag) => tag.toLowerCase())
                .filter(
                  (tag) =>
                    tag.search(
                      /interpersonal|web development|database|vcs|graphics|graphics design|animation/gi
                    ) >= 0
                );

              return relatedTags.length === 0;
            })
            .filter(queryFilterCallback);

        default:
          return retValue.filter(queryFilterCallback);
      }
    },
    [skillSearchQuery, skills]
  );

  return (
    <section id="skill-section" className="skills flex flex-col">
      <h2
        className="subtitle center-headings"
        style={{
          // fontSize: "24px",
          color: "var(--text-color)",
          fontWeight: 700,
        }}
      >
        Skills & Technical Knowledge
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
        commitment to continuous learning. Explore this section to gain insight
        into the technical knowledge and capabilities that enable me to deliver
        innovative solutions.
      </span>

      <div className="flex flex-col flex-wrap sm:flex-nowrap w-full">
        <ResponsiveTab
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            mb: 2,
            width: "100%",
            color: "var(--text-color)",
            borderBottom: "1px solid var(--border-line-color)",
          }}
        >
          <Tab
            label="Inter-Personal Skills"
            sx={{ ...styles.tabStyles, display: "none" }}
          />
          <Tab label="Mobile & Web Development" sx={styles.tabStyles} />
          <Tab label="Cloud Provider" sx={styles.tabStyles} />
          <Tab label="Database Management" sx={styles.tabStyles} />
          <Tab label="Version Controls" sx={styles.tabStyles} />
          <Tab label="3D Animations & Graphics Design" sx={styles.tabStyles} />
          <Tab label="Others" sx={styles.tabStyles} />
        </ResponsiveTab>

        {[0, 1, 2, 3, 4, 5, 6].map((each, index) => (
          <TabPanel
            key={index}
            index={each}
            currentTabIndex={tabIndex}
            sx={{ display: each === 0 ? "none" : "block", p: "20px", pt: 1 }}
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
              className="bordr"
              sx={{
                marginBottom: { xs: "25px", sm: "25px" },
              }}
            >
              <TextField
                ref={skillSearchRef}
                onChange={(ev) => setSkillSearchQuery(ev.target.value)}
                // onFocus={() => }
                value={skillSearchQuery}
                placeholder="Search for a skill"
                variant="outlined"
                className="text-xl block py-0"
                InputProps={{
                  endAdornment: (
                    <AiOutlineSearch style={{ fontSize: "20px" }} />
                  ),
                  sx: {
                    color: "var(--text-color)",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                  inputProps: {
                    style: {
                      fontSize: "1.45rem",
                      padding: "12px 18px",
                    },
                  },
                }}
                sx={{
                  maxWidth: "450px",
                  minWidth: { xs: "150px", md: "300px" },
                  width: "100%",
                  "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "var(--border-line-color)",
                      borderWidth: "1px",
                    },
                }}
              />

              <Stack direction="row" alignItems={"center"} sx={{ ml: 4 }}>
                <FilterIcon
                  style={{
                    fontSize: "24px",
                    marginRight: "10px",
                    color: "var(--light-text-color)",
                  }}
                />
                <CustomSelect
                  height="34px"
                  sx={{
                    border: "1px solid var(--border-line-color)",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  options={[]}
                />
              </Stack>
            </Stack>

            {!loadingSkills && filterSkills(tabIndex).length > 0 ? (
              <div
                className="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-start w-full"
                style={{ marginLeft: "0px" }}
              >
                {(showAllSkills
                  ? filterSkills(tabIndex)
                  : filterSkills(tabIndex).slice(0, MAX_SKILLS_DISPLAYED)
                ).map((eachSkill, i) => (
                  <SkillCard
                    key={i}
                    data={eachSkill}
                    onClick={handleSkillClick(
                      eachSkill,
                      expIntoSkills[eachSkill.name.toLowerCase()]
                    )}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                className="flex flex-col items-center justify-center w-4/7"
                isLoading={loadingSkills}
              />
            )}
          </TabPanel>
        ))}
      </div>

      {filterSkills(tabIndex).length > MAX_SKILLS_DISPLAYED && (
        <CustomButton
          onClick={() => {
            setShowAllSkills((prev) => !prev);
          }}
          className="mt-16"
          value={
            <span
              className="flex flex-row items-center text-center uppercase"
              style={{ color: "var(--contrast-text-color)" }}
            >
              <span>
                {!showAllSkills
                  ? `Show ${
                      filterSkills(tabIndex).length - MAX_SKILLS_DISPLAYED
                    } more`
                  : "Show less"}
              </span>
              <i
                className="ml-3 animate-bounce"
                style={{
                  fontSize: "16px",
                  color: "var(--contrast-text-color)",
                }}
              >
                {!showAllSkills ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
              </i>
            </span>
          }
          sx={{
            backgroundColor: "var(--primary-color)",
            boxShadow: "none",
            color: "#fff",
          }}
        />
      )}
    </section>
  );
}

const styles = {
  tabStyles: {
    fontFamily: "Poppins, Roboto,'Open Sans', Montserrat, san-serif",
    color: "var(--light-text-color)",
    textTransform: "capitalize",
    fontSize: "14px",
    py: "6px",
  },
};

export default SkillSection;
