import React from "react";

import NavigationBar from "../../../components/navigationbar";
import ProfileOverview from "./subsections/ProfileOverview";
import Project from "./subsections/Project";
import SkillCategory from "./subsections/SkillCategory";
import ContactSection from "./subsections/ContactSection";

import AppContext from "../../../context/AppContext";

function formatSkills(context) {
  const skillset = context.portfolio.skills;
  const returnedItem = [];
  const skCategory = {};

  // Sort each skill into their respective categories
  skillset.forEach((skill) => {
    if (!skill.category) {
      if (skCategory["other"]) skCategory["other"].push(skill);
      else skCategory["other"] = [skill];
    } else {
      if (skCategory[skill.category]) skCategory[skill.category].push(skill);
      else skCategory[skill.category] = [skill];
    }
  });

  Object.keys(skCategory).forEach((category) => {
    returnedItem.push(
      <SkillCategory
        name={category}
        skills={skCategory[category]}
        setHomeComponentState={context.setHomeComponentState}
      />
    );
  });

  return returnedItem;
}

function createSubSection(context, props) {
  switch (props.isActive) {
    case 0:
      return <ProfileOverview profession={context.portfolio.profession} />;

    case 1:
      return formatSkills(context);

    case 2:
      return context.portfolio.projects.map((aProject, index) => {
        return <Project key={index} details={aProject} />;
      });

    case 3:
      return <ContactSection />;

    default:
      return null;
  }
}

class ProfileBody extends React.Component {
  render() {
    const { navTabs, isActive, isActiveTab } = this.props;
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <section className="main-content-section">
              <NavigationBar navTabs={navTabs} isActive={isActive} />
              <div className="section-content">
                <div id={isActiveTab} className="cols">
                  {/* Create Selected Tab Content */}
                  {createSubSection(context, this.props)}
                </div>
              </div>
            </section>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default ProfileBody;
