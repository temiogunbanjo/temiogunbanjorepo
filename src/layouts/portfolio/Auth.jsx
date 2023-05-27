import React, { useEffect, useState } from "react";

import { TextField, Fade as MuiFade } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Fade from "@successtar/react-reveal/Fade";

import CustomButton from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import { setDarkMode } from "../../utils";

const PortfolioAuth = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("Guest 1");
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setTouched] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [canType, setCanType] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleFocus = (event) => {
    if (!isTouched) {
      setTouched(true);
    }
    setIsDone(false);
    // setValue(event.target.value);
  };
  const testPattern = /^(([A-Za-z]{1,})(\s*))+$/gi;
  const handleChange = (event) => {
    const test = event.target.value.match(testPattern) !== null;
    setIsValid(test);
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    const test = value.match(testPattern) !== null;
    setIsValid(test);
    setIsDone(true);
    setSubmitCount((prev) => prev + 1);

    if (test === true) {
      window.localStorage.setItem("visitor_name", value);
      navigate("/home");
    }
    // alert(submitCount);
  };

  useEffect(() => {
    const vName = window.localStorage.getItem("visitor_name");
    const isDarkMode = window.localStorage.getItem("dark_mode");

    if (vName) {
      setValue(vName);
      navigate("/home");
    }

    if (isDarkMode !== null) {
      setDarkMode(isDarkMode);
    } else {
      setDarkMode(true);
    }
  }, [navigate]);

  return (
    <>
      <section className="hero flex flex-col sm:flex-row relative ">
        <Fade>
          <div
            className="cols items-center"
            style={{
              justifyContent: "center",
              padding: "10px",
              width: "100%",
              maxWidth: "unset",
              borderColor: "#333",
            }}
          >
            <MuiFade out={isDone && isValid}>
              <figure
                className="p-5 mb-3 rounded-full flex flex-row items-center justify-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              >
                {(() => {
                  let face = "😋";
                  switch (true) {
                    case !isTouched:
                      face = "😋";
                      break;

                    case isTouched && value.length === 0 && !isDone:
                      face = "🙂";
                      break;

                    case isTouched &&
                      value.length > 0 &&
                      value.length <= 20 &&
                      !isDone:
                      face = "👀";
                      break;

                    case isTouched && value.length > 20 && !isDone:
                      face = "😳";
                      break;

                    case isTouched && value.length > 0 && isDone && isValid:
                      face = "👍";
                      break;

                    case isTouched && value.length > 0 && isDone && !isValid:
                      face = "🙄";
                      break;

                    default:
                      face = "😋";
                      break;
                  }
                  return <span className="text-8xl">{face}</span>;
                })()}
              </figure>

              <h1 className="main-text text-center capitalize">{`Hey ${
                window.localStorage.getItem("visitor_name")
                  ? window.localStorage.getItem("visitor_name")
                  : "Buddy"
              }!`}</h1>
            </MuiFade>
            {(() => {
              let reaction = null;
              const allProps = {
                wrapper: "p",
                speed: 55,
                deletionSpeed: 68,
                cursor: true,
                repeat: 0,
                className: "py-8 text-center",
                style: {
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "var(--light-text-color)",
                  lineHeight: 2,
                  maxWidth: "500px",
                  minHeight: "100px",
                },
              };

              switch (true) {
                case !isTouched:
                  reaction = (
                    <TypeAnimation
                      key={1}
                      sequence={[
                        "Before we go in, please introduce yourself so that I can remember who paid me a visit. Pheww...",
                        1000, // Waits 1s
                        "Before we go in, please introduce yourself so that I can remember who paid me a visit. Pheww, don't mind me, I tend to forget little things pretty fast.",
                        500, // Waits 1s
                        () => {
                          setCanType(true); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                      speed={65}
                    />
                  );
                  break;

                case isTouched && value.length === 0 && !isDone:
                  reaction = (
                    <TypeAnimation
                      key={2}
                      sequence={[
                        "Hmmm...",
                        1000, // Waits 1s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                case isTouched &&
                  value.length > 4 &&
                  value.length <= 20 &&
                  submitCount === 0 &&
                  !isDone:
                  reaction = (
                    <TypeAnimation
                      key={3}
                      sequence={[
                        "Seems familiar and easy to recall...!",
                        1000, // Waits 1s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                case isTouched &&
                  value.length > 0 &&
                  value.length <= 20 &&
                  submitCount > 0 &&
                  !isDone:
                  reaction = (
                    <TypeAnimation
                      key={3}
                      sequence={[
                        "Maybe try a shorter name...!",
                        1000, // Waits 1s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                case isTouched && value.length > 20 && !isDone:
                  reaction = (
                    <TypeAnimation
                      key={4}
                      sequence={[
                        "Woah!",
                        1000, // Waits 1s
                        "You have a pretty long name, I am probably going to have a hard time remembering it!",
                        1000, // Waits 2s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                case isTouched && value.length > 0 && isDone && isValid:
                  reaction = (
                    <TypeAnimation
                      key={5}
                      sequence={[
                        "Perfect!",
                        500, // Waits 1s
                        "Perfect! I would try to remember your name. Let's go have fun!",
                        1000, // Waits 2s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                case isTouched && value.length > 0 && isDone && !isValid:
                  reaction = (
                    <TypeAnimation
                      key={6}
                      sequence={[
                        "Really?",
                        500, // Waits 1s
                        "Really? Is that even your name?",
                        1000, // Waits 2s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;

                default:
                  reaction = (
                    <TypeAnimation
                      key={7}
                      sequence={[
                        "Hmmmm...",
                        1000, // Waits 1s
                        () => {
                          console.log("Done typing!"); // Place optional callbacks anywhere in the array
                        },
                      ]}
                      {...allProps}
                    />
                  );
                  break;
              }
              return reaction;
            })()}

            <div
              className="flex flex-row pt-10 mx-auto sm:mx-0 items-center"
              style={{ paddingTop: "40px" }}
            >
              <TextField
                onChange={handleChange}
                onFocus={handleFocus}
                focused={canType}
                value={value}
                placeholder="Please enter your name"
                variant="standard"
                className="border text-xl"
                InputProps={{
                  classes: "text-xl",
                  sx: {
                    fontSize: "1.45rem",
                    px: 2.3,
                    py: 1.6,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "var(--text-color)",
                  },
                }}
                sx={{
                  minWidth: { xs: "150px", md: "300px" },
                }}
                disabled={!canType}
              />

              <CustomButton
                className="ml-9"
                sx={{
                  backgroundColor: "var(--tab-notice-bgcolor)",
                  boxShadow: "none",
                }}
                value={
                  <span
                    className="flex flex-row items-center"
                    style={{ color: "#fff" }}
                  >
                    <span>{!isValid || !isTouched ? "Test" : "Let's Go!"}</span>
                  </span>
                }
                disabled={!isTouched}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default PortfolioAuth;
