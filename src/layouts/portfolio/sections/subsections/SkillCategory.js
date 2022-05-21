import React from "react";
import { sectionStyle, sectionHeaderStyle } from "../../../../data/globals";

function SkillItem(props) {
  let skillLevel = props.level
    ? `${Math.round((props.level / 10) * 100)}`
    : "0";
    const progressStyles = {
        color: {
            '#ee0000': '#fff',
            '#2c2c2c': '#fff',
        },
        bgColor: {
            '#ee0000': 'skyblue',
            '#2c2c2c': '#898907',
            // '#0052cd': 'darkorange'
        },
        fontWeight: {
        }
    }
    let skillLevelStyle = {
        width: `${skillLevel}%`,
        color: progressStyles.color[props.bgColor],
        fontWeight: progressStyles.fontWeight[props.bgColor],
        backgroundColor: progressStyles.bgColor[props.bgColor],
    }
  return (
    <div className="cols skill-item" style={{ backgroundColor: props.bgColor }}>
      <h3>{props.name || "Skill Name"}</h3>
      <div className="rows" style={{ alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ marginRight: "1rem" }}>Skill level:</div>
        <div className="progress">
          <div className="progress-value" style={skillLevelStyle}>
            {`${skillLevel}%`}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCategory(props) {
  let headerStyle = {
    ...sectionHeaderStyle,
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
    borderLeft: "none",
  };
  return (
    <section style={sectionStyle}>
      {/* <SearchBar setHomeComponentState={ props.setHomeComponentState }/> */}
      <h2 style={headerStyle}>
        {props.isDummyCategory === true ? "Loading..." : props.name}
      </h2>
      <div className="rows skill-wrapper">
        {props.skills.map((prop, index) => {
          return (
            <SkillItem
              key={index}
              name={prop.name}
              bgColor={prop.bgColor}
              level={prop.level}
            />
          );
        })}
      </div>
    </section>
  );
}

export default SkillCategory;
