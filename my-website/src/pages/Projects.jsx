import React from "react";
import PropTypes from "prop-types";
import styles from "./Projects.module.css";

const Projects = ({ title, projects }) => (
  <section className={styles.projects} aria-label="Projects and Achievements section">
    <h1>{title}</h1>
    <ul>
      {projects.map((project, index) => (
        <li key={index}>{project}</li>
      ))}
    </ul>
  </section>
);

Projects.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.string),
};

Projects.defaultProps = {
  title: "Projects & Achievements",
  projects: [
    "Launched Skygea's flagship digital platform",
    "Managed multi-million dollar finance campaigns",
    "Developed successful marketing strategies for global brands",
    "Speaker at international finance and marketing conferences",
    "Built stylish and modern blog websites using lovable.dev",
    "Developed websites for tea factories and personal branding using Vercel, GitHub, and Astro",
  ],
};

export default Projects;
