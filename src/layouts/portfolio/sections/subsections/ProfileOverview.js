import React from "react";
import { sectionStyle, sectionHeaderStyle } from '../../../../data/globals';

function ProfileOverview(props) {
  const unitDataStyle = {
    padding: "0.5rem 1rem 0.5rem 0.2rem",
    textAlign: "left",
  };

  const unitDataWrapperStyle = {
    fontSize: "1.4rem",
    maxWidth: "600px",
  };

  return (
    <div
      className="cols"
      style={{ fontSize: "1.5rem", color: "var(--light-text-color)" }}
    >
      {/* My Profile Summary Section */}
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>My Profile:</h2>
        <div className="cols">
          <div className="rows" style={unitDataWrapperStyle}>
            <span className="lg-35" style={unitDataStyle}>
              Email Address:
            </span>
            <span className="lg-60" style={unitDataStyle}>
              ogunbanjotemiloluwa@gmail.com
            </span>
          </div>

          <div className="rows" style={unitDataWrapperStyle}>
            <span className="lg-35" style={unitDataStyle}>
              Mobile Number:
            </span>
            <span className="lg-60" style={unitDataStyle}>
              +2349059620514
            </span>
          </div>

          <div className="rows" style={unitDataWrapperStyle}>
            <span className="lg-35" style={unitDataStyle}>
              Nationality:
            </span>
            <span className="lg-60" style={unitDataStyle}>
              Nigerian
            </span>
          </div>

          <div className="rows" style={unitDataWrapperStyle}>
            <span className="lg-35" style={unitDataStyle}>
              Language Spoken:
            </span>
            <span className="lg-60" style={unitDataStyle}>
              English & Yoruba
            </span>
          </div>

          <div className="rows" style={unitDataWrapperStyle}>
            <span className="lg-35" style={unitDataStyle}>
              Current Job:
            </span>
            <span className="lg-60" style={unitDataStyle}>
              {props.profession}
            </span>
          </div>
        </div>
      </section>

      {/* My Objective Summary Section */}
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Career Objectives:</h2>
        <div>
          To use my wealth of skills and talents to better the lives of people
        </div>
      </section>

      {/* My Eduction Summary Section */}
      <section style={sectionStyle}>
        <h2 style={sectionHeaderStyle}>Education:</h2>
        <div
          className="cols education-container"
          style={{ marginLeft: "0.5rem" }}
        >
          <div className="cols">
            <h4 style={{ marginBottom: 0, marginTop: "1rem" }}>
              University of Lagos, Akoka Nigeria
            </h4>
            <em>Tertiary Institution</em>
            <span>Mechanical Engineering (B. Sc.)</span>
            <span className="date">2015 - Present</span>
          </div>

          <div className="cols">
            <h4 style={{ marginBottom: 0 }}>Solidrock Model College</h4>
            <em>Secondary Institution</em>
            <span className="date">2009 - 2015</span>
          </div>

          <div className="cols">
            <h4 style={{ marginBottom: 0 }}>Akesan Royal School</h4>
            <em>Primary Institution</em>
            <span className="date">2001 - 2009</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProfileOverview;
