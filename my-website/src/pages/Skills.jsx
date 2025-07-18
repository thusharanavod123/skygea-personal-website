import React from "react";
import PropTypes from "prop-types";
import styles from "./Skills.module.css";

const Skills = ({ skills, title }) => (
  <section className={styles.skills} aria-label="Skills section">
    <h1>{title}</h1>
    <ul>
      {skills.map((skill, i) => (
        <li key={i}>{skill}</li>
      ))}
    </ul>
  </section>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

Skills.defaultProps = {
  title: "My Skills",
  skills: [
    "Financial Analysis & Planning",
    "Investment Strategies",
    "Digital Marketing Campaigns",
    "SEO & SEM",
    "Social Media Marketing",
    "Team Leadership & Management",
    "Business Development",
    "Strategic Planning",
  ],
};

export default Skills;
