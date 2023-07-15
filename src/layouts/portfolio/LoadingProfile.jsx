import React from "react";
import { TypeAnimation } from "react-type-animation";

const LoadingProfile = () => {
  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative">
        <div
          className="cols sm:mr-8 w-full"
          style={{ justifyContent: "center", padding: "10px" }}
        >
          {/* <span
            className="mb-3 text-center"
            style={{
              fontSize: "26px",
              fontWeight: 500,
              color: "var(--light-text-color)",
            }}
          >
            Please wait
          </span> */}

          <h1
            className="main-text text-center capitalize"
            style={{ fontSize: "38px", letterSpacing: "0" }}
          >
            Loading profile
          </h1>

          <h3
            className="inline-block mt-8 sm:mt-6 text-center"
            style={{ fontSize: "24px" }}
          >
            <TypeAnimation
              key={1}
              sequence={[
                "Loading all assets...",
                2500,
                "Sorting information...",
                2500,
                "Recalling dates and time...",
                2500,
                "Decorating pages...",
                2500,
                "Finalizing...",
                3500,
                "Rendering pages...",
                500,
                () => {},
              ]}
              wrapper="span"
              speed={75}
              deletionSpeed={68}
              cursor={true}
              // repeat={Infinity}
              className="animate-bounce"
              style={{
                color: "var(--primary-color)",
              }}
            />
          </h3>
        </div>
      </section>
    </>
  );
};

export default LoadingProfile;
