import React from "react";
import { sectionStyle, sectionHeaderStyle } from "../../../../data/globals";

function ContactSection(props) {
  let headerStyle = {
    ...sectionHeaderStyle,
    lineHeight: "1.5",
    marginBottom: "0.5rem",
  };

  let unitDataStyle = {
    padding: "0.5rem 1rem 0.5rem 0.2rem",
    textAlign: "left",
  };

  let unitDataWrapperStyle = {
    fontSize: "1.4rem",
    maxWidth: "630px",
  };

  return (
    <div
      className="cols"
      style={{ fontSize: "1.4rem", color: "var(--light-text-color)" }}
    >
      <div style={sectionStyle}>
        <section style={sectionStyle}>
          <h2 style={headerStyle}>My Social Media:</h2>
          <div className="cols">
            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                <i className="icon icofont-brand-whatsapp"></i> Whatsapp:
              </span>
              <a
                href="https://wa.me/+2349059620514?text=Hi"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                +234 905 962 0514
              </a>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                <i className="icon icofont-instagram"></i> Instagram:
              </span>
              <a
                href="https://instagram.com/+2349059620514?text=Hi"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                +234 905 962 0514
              </a>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                <i className="icon icofont-github"></i> Github:
              </span>
              <a
                href="https://github.com/tehmi2000"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                https://github.com/tehmi2000
              </a>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                <i className="icon icofont-linkedin"></i> LinkedIn:
              </span>
              <a
                href="https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168
              </a>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={headerStyle}>Telephone:</h2>
          <div className="cols">
            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Mobile Number:
              </span>
              <a
                href="tel:+2349059620514"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                +234 905 962 0514
              </a>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Alt. Number:
              </span>
              <a
                href="tel:+2348021444047"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                +234 802 144 4047
              </a>
            </div>

            <div className="rows" style={unitDataWrapperStyle}>
              <span className="lg-35" style={unitDataStyle}>
                Skype:
              </span>
              <a
                href="tel:+2349059620514"
                className="lg-60"
                style={{ ...unitDataStyle, color: "var(--page-link-color)" }}
              >
                +234 905 962 0514
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactSection;
