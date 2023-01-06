import React, { useEffect } from "react";
import { sectionStyle, sectionHeaderStyle } from "../../../data/globals";

function SkillItem(props) {
  let skillLevel = props.level
    ? `${Math.round((props.level / 10) * 100)}`
    : "0";

  const progressStyles = {
    "#ee0000": {
      color: "#fff",
      bgColor: "skyblue",
      fontWeight: 400,
    },
    "#2c2c2c": {
      color: "#fff",
      bgColor: "#898907",
      fontWeight: 400,
    },
    "purple": {
      color: "#fff",
      bgColor: "#db8f02",
      fontWeight: 500,
    },
  };

  // console.log(progressStyles[props.bgColor]);
  let skillLevelStyle = {
    width: `${skillLevel}%`,
    color: progressStyles[props.bgColor]?.color,
    fontWeight: progressStyles[props.bgColor]?.fontWeight,
    backgroundColor: progressStyles[props.bgColor]?.bgColor,
  };

  

  useEffect(() => {
    const elements = document.querySelectorAll(".skill-item");
    window.VanillaTilt.init(elements, {
      // max: 10,
      // reverse: true,
      // speed: 100,
      // glare: true,
      // "max-glare": 0.3,
    });
  });
  return (
    <div className="cols skill-item" style={{ backgroundColor: props.bgColor }}>
      <h3>{props.name || "Skill Name"}</h3>
      <div className="rows" style={{ alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ marginRight: "1rem", marginBottom: "5px" }}>Skill level:</div>
        <div
          className="progress"
          style={{
            width: "100%",
          }}
        >
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
