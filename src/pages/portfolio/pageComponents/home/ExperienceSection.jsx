import React from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import ExperienceCard from "components/Cards/ExperienceCard";
import CustomButton from "components/common/Button";
import EmptyState from "components/common/EmptyState";

function ExperienceSection({
  data: experiences,
  loading: loadingExperiences,
  showAll: showAllExperiences,
  setShowAll: setShowAllExperiences,
}) {
  return (
    <section className="experiences flex flex-col items-left pb-12 pt-12 md:pt-8">
      <h2
        className="mb-10 right-headings"
        style={{
          color: "var(--text-color)",
          fontWeight: 700,
        }}
      >
        Professional Experiences
      </h2>

      <div className="flex flex-col mt-2 pl-6">
        {!loadingExperiences && experiences.length > 0 ? (
          (showAllExperiences ? experiences : experiences.slice(0, 3)).map(
            (each, i) => <ExperienceCard key={i} data={each} />
          )
        ) : (
          <EmptyState
            className="flex flex-col items-center justify-center"
            isLoading={loadingExperiences}
          />
        )}
      </div>

      {experiences.length > 3 && (
        <CustomButton
          onClick={() => {
            setShowAllExperiences((prev) => !prev);
          }}
          className="mt-12 mx-auto"
          value={
            <span
              className="flex flex-row items-center text-center uppercase"
              style={{ color: "var(--contrast-text-color)" }}
            >
              <span>
                {!showAllExperiences
                  ? `Show ${experiences.length - 2} more`
                  : "Show less"}
              </span>
              <i
                className="ml-3 animate-bounce"
                style={{
                  fontSize: "16px",
                }}
              >
                {!showAllExperiences ? (
                  <FaAngleDoubleDown />
                ) : (
                  <FaAngleDoubleUp />
                )}
              </i>
            </span>
          }
          sx={{
            backgroundColor: "var(--primary-color)",
            boxShadow: "none",
            color: "var(--contrast-text-color)",
          }}
        />
      )}
    </section>
  );
}

export default ExperienceSection;
