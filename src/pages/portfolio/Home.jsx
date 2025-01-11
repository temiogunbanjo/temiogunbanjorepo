import React, { useEffect, useState } from "react";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";

import { useNavigate } from "react-router-dom";
import Fade from "@successtar/react-reveal/Fade";
// import { Fade as AwesomeFade } from "react-awesome-reveal";

import {
  fetchUserExperiences,
  fetchUserProject,
  fetchUserSkills,
} from "database";

import { VisitorAuth } from "./ModalContents";

import { getSavedMode, setDarkMode, setTheme } from "utils";

import Dialog from "components/common/Dialog";

import ProjectSection from "./pageComponents/home/ProjectSection";
import ExperienceSection from "./pageComponents/home/ExperienceSection";
import SkillSection from "./pageComponents/home/SkillSection";
import HeroInfo from "./pageComponents/home/HeroInfo";
import HeroProfile from "./pageComponents/home/HeroProfile";

const PortfolioIndex = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const [skills, setSkills] = useState([]);
  const [loadingSkills, setLoadingSkills] = useState(true);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const [experiences, setExperiences] = useState([]);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [loadingExperiences, setLoadingExperiences] = useState(true);

  const [showAllProjects] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projects, setProjects] = useState([]);

  const [expIntoSkills, setExpIntoSkills] = useState({});

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setDialogContent(null);
    setOpenModal(false);
  };

  useEffect(() => {
    const vName = window.localStorage.getItem("visitor_name");
    const lastUsedTheme = window.localStorage.getItem("theme");
    const isDarkMode = getSavedMode();

    if (!vName) {
      setDialogContent(<VisitorAuth closeHandler={handleClose} />);
      window.setTimeout(() => {
        handleOpen();
      }, 4000);
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    }

    if (lastUsedTheme !== null) {
      setTheme(lastUsedTheme);
    }
  }, [navigate]);

  useEffect(() => {
    (async () => {
      // setLoadingProjects(false);
      const projResponse = await fetchUserProject(1);
      if (projResponse) {
        setLoadingProjects(false);
        setProjects(projResponse);
      }

      const skillResponse = await fetchUserSkills(1);
      if (skillResponse) {
        setLoadingSkills(false);
        setSkills(skillResponse);
      }

      const expResponse = await fetchUserExperiences(1);
      if (expResponse) {
        setLoadingExperiences(false);
        setExperiences(expResponse);
      }
    })();

    // console.log(skillSearchRef);
  }, []);

  useEffect(() => {
    const e2S = {};
    experiences.forEach((exp) => {
      if (exp.relatedSkills) {
        exp.relatedSkills.forEach((skill) => {
          skill = skill.toLowerCase();
          if (!e2S[skill]) {
            e2S[skill] = [exp];
          } else {
            e2S[skill].push(exp);
          }
        });
      }
    });

    setExpIntoSkills(e2S);
  }, [experiences]);

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
        <HeroInfo />

        <Fade right cascade>
          <HeroProfile />
        </Fade>
        {/* <div className="background-illuminator"></div> */}
      </section>

      {/* MY SKILLS */}
      <Fade bottom cascade>
        <SkillSection
          data={skills}
          loading={loadingSkills}
          showAll={showAllSkills}
          setShowAll={setShowAllSkills}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setDialogContent={setDialogContent}
          expIntoSkills={expIntoSkills}
        />
      </Fade>

      {/* EXPERIENCES */}
      <Fade bottom cascade>
        <ExperienceSection
          loading={loadingExperiences}
          showAll={showAllExperiences}
          setShowAll={setShowAllExperiences}
          data={experiences}
        />
      </Fade>

      {/* My PROJECTS */}
      <Fade bottom cascade>
        <ProjectSection
          data={projects}
          loadingProjects={loadingProjects}
          showAllProjects={showAllProjects}
        />
      </Fade>

      {/* ABOUT SITE */}
      {/* <Fade bottom cascade>
        <section id="about-section" className="skills flex flex-col">
          <h2
            className="subtitle center-headings"
            style={{
              // fontSize: "24px",
              color: "var(--text-color)",
              fontWeight: 700,
            }}
          >
            About This Site
          </h2>

          <span
            className="-mt-10 mb-12 text-center text-2xl"
            style={{
              color: "var(--light-text-color)",
              fontWeight: 400,
              opacity: 0.8,
              lineHeight: 1.8,
              maxWidth: "650px",
            }}
          >
            This sections shows all the skills acquired all through my tech
            career. Search for the keywords to learn more about each warning.
            Search for the keywords to learn more about each warning. Search for
            the keywords to learn more about each warning.
          </span>
        </section>
      </Fade> */}

      <Dialog open={openModal} onClose={handleClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default PortfolioIndex;
