import React from "react";
import AppContext from "../../../context/AppContext";

class ProfileSummary extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {(context) => (
          <section className="cols user-profile-section">
            <div className="rows img-wrapper border">
              <img
                className="user-profile-picture"
                src={context.avatar}
                alt="Temiloluwa"
                width="120"
                height="120"
              />
              <span className="username">{context.name}</span>
            </div>

            <div className="rows" style={{width: '100%'}}>
              <button className="strip-btn user-status">
                <i className="icofont-ui-love"></i>
              </button>
              {/* <button className="strip-btn lg-100" style={{fontWeight: 500}}>Log In</button> */}
              <button className="strip-btn lg-100" style={{ fontWeight: 500 }}>
                Edit profile
              </button>
            </div>

            <div
              className="user-details"
              style={{ margin: "1.8rem 0 0", fontSize: "1.45rem" }}
            >
              {context.portfolio.bio}
            </div>

            <i
              className="user-last-seen"
              style={{ margin: "1.8rem 0 0", fontSize: "1rem", width: "100%" }}
            >
              {`Last updated on ${new Date(2022, 4, 21).toLocaleDateString()}`}
            </i>
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}

export default ProfileSummary;
