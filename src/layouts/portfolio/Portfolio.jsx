import React, { useState } from "react";

import AppContext from "../../context/AppContext";

import AppHeader from "../../components/header";
import PointerBox from "../../components/pointerbox";
import Preloader from "../../components/preloader";
import Footer from "../../components/footer";

import ProfileSummary from "./sections/ProfileSummary";

import NavigationBar from "../../components/navigationbar";
import ProfileOverview from "./sections/ProfileOverview";
import Project from "./sections/Project";
import SkillCategory from "./sections/SkillCategory";
import ContactSection from "./sections/ContactSection";

// Import utilities
import AppUtils from "../../utils/AppUtils";

import "./portfolio.css";
import "./sections/skills.css";
import "./sections/projects.css";

function formatSkills(context) {
  const skillset = context.portfolio.skills;
  const returnedItem = [];
  const skCategory = {};

  let skCategoryIsDummy = false;

  // Sort each skill into their respective categories
  skillset.forEach((skill) => {
    if (skill.isDummy && skCategoryIsDummy === false) skCategoryIsDummy = true;

    if (!skill.category) {
      if (skCategory["other"]) skCategory["other"].push(skill);
      else skCategory["other"] = [skill];
    } else {
      if (skCategory[skill.category]) skCategory[skill.category].push(skill);
      else skCategory[skill.category] = [skill];
    }
  });

  Object.keys(skCategory).forEach((category, index) => {
    returnedItem.push(
      <SkillCategory
        key={`${category}-${index}`}
        name={category}
        skills={skCategory[category]}
        setHomeComponentState={context.setHomeComponentState}
        isDummyCategory={skCategoryIsDummy}
      />
    );
  });

  return returnedItem;
}

function ProfileBody(props) {
  const [isActive, setIsActive] = useState(0);
  const [isActiveTab, setIsActiveTab] = useState("overview-container");
  const [navTabs, setNavTabs] = useState([
    {
      img: "icofont-book",
      name: "Overview",
      total: null,
      handler: (ev) => {
        setIsActive(0);
        setIsActiveTab("overview-container");
      },
    },
    {
      img: "icofont-book-alt",
      name: "Skills & Knowledge",
      total: 4,
      handler: async (ev) => {
        setIsActive(1);
        setIsActiveTab("skills-container");

        const skills = await AppUtils.fetchUserSkills("user");
        if (skills) {
          props.setHomeComponentState({ skills });
          setDataCount(skills.length, 1);
        }
      },
    },
    {
      img: "icofont-tasks-alt",
      name: "Projects",
      total: 4,
      handler: async (ev) => {
        setIsActive(2);
        setIsActiveTab("project-container");

        const projects = await AppUtils.fetchUserProject("user");
        if (projects) {
          props.setHomeComponentState({ projects });
          setDataCount(projects.length, 2);
        }
      },
    },
    {
      img: "icofont-cube",
      name: "Contacts",
      total: null,
      handler: (ev) => {
        setIsActive(3);
        setIsActiveTab("contact-container");
      },
    },
  ]);

  const showSubSection = (context, isActive) => {
    switch (isActive) {
      case 0:
        return <ProfileOverview profession={context.portfolio.profession} />;

      case 1:
        return formatSkills(context);

      case 2:
        return context.portfolio.projects.map((aProject, index) => {
          return <Project key={index} index={index} details={aProject} />;
        });

      case 3:
        return <ContactSection />;

      default:
        return null;
    }
  };

  const setDataCount = (count, navTabIndex) => {
    let newNavTab = navTabs.map((navTab, index) => {
      if (index === navTabIndex) navTab.total = count;
      return navTab;
    });

    setNavTabs(newNavTab);
  };

  return (
    <AppContext.Consumer>
      {(context) => (
        <main className="cols">
          <ProfileSummary
            mainState={{
              isActive,
              isActiveTab,
              navTabs,
            }}
            mainProps={props}
          />

          <section className="main-content-section">
            <NavigationBar navTabs={navTabs} isActive={isActive} />
            <div className="section-content">
              <div id={isActiveTab} className="cols">
                {/* Create Selected Tab Content */}
                {showSubSection(context, isActive)}
              </div>
            </div>
          </section>
        </main>
      )}
    </AppContext.Consumer>
  );
}
class Portfolio extends React.Component {
  static contextType = AppContext;
  componentDidMount() {
    setTimeout(async () => {
      const user = await AppUtils.fetchUserProfile();
      if (user) {
        this.context.setAppState({
          name: user.name,
          avatar: user.avatar,
        });

        this.context.setPortfolioState({
          profession: user.profession,
          bio: user.bio,
        });
      }
    }, 3000);
  }

  render() {
    return (
      <React.Fragment>
        <Preloader
          user={this.context.name}
          avatar={this.context.avatar}
          profession={this.context.portfolio.profession}
          bio={this.context.portfolio.bio}
        />
        <AppHeader user={this.context.name} avatar={this.context.avatar} />
        <PointerBox />
        <ProfileBody setHomeComponentState={this.context.setPortfolioState} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Portfolio;
