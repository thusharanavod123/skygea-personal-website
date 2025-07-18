import React from "react";
import PropTypes from "prop-types";
import styles from "./Experience.module.css";

const Experience = ({
  currentRole,
  company,
  summary,
  previousRoles
}) => (
  <section className={styles.experience} aria-label="Professional experience section">
    <h1>Experience</h1>
    <h2>{currentRole}, {company}</h2>
    <p>{summary}</p>
    <h3>Previous Experience</h3>
    <ul>
      {previousRoles.map((role, idx) => (
        <li key={idx}>{role}</li>
      ))}
    </ul>
  </section>
);

Experience.propTypes = {
  currentRole: PropTypes.string,
  company: PropTypes.string,
  summary: PropTypes.string,
  previousRoles: PropTypes.arrayOf(PropTypes.string)
};

Experience.defaultProps = {
  currentRole: "CEO",
  company: "Skygea",
  summary: "Leading Skygea to new heights in digital innovation and financial growth. Responsible for strategic direction, team leadership, and major project execution.",
  previousRoles: [
    "Finance Manager at [Previous Company]",
    "Digital Marketing Lead at [Previous Company]",
    "Consultant for various startups and enterprises"
  ]
};

export default Experience;
