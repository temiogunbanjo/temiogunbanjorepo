import React from "react";
import AppContext from "../../../context/AppContext";

function ProfileSummary() {
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

          <div
            className="rows center"
            style={{ width: "100%", alignItems: "center" }}
          >
            <input
              className="strip-btn lg-100"
              style={{
                fontWeight: 400,
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
              placeholder="Leave a comment"
            />
            <button className="strip-btn material-black user-status">
              <i className="icofont-ui-love"></i>
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
            {`Last updated on ${new Date(2023, 1, 6).toDateString()}`}
          </i>
        </section>
      )}
    </AppContext.Consumer>
  );
}

export default ProfileSummary;
