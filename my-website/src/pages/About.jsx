import React from "react";
import PropTypes from "prop-types";
import styles from "./About.module.css";

const About = ({ title, description }) => {
  return (
    <section className={styles.about} aria-label="About section">
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
};

About.defaultProps = {
  title: "About Me",
};

export default About;
