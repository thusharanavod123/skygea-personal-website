import React from "react";
import PropTypes from "prop-types";
import styles from "./Home.module.css";

const Home = ({ name, role, description, ctaText, onCtaClick }) => (
  <section className={styles.home} aria-label="Homepage Introduction">
    <div className={styles.hero}>
      <h1 className={styles.welcome}>
        <span className={styles.highlight}>Welcome</span> to My Portfolio
      </h1>
      <h2 className={styles.subtitle}>
        I'm <span className={styles.name}>{name}</span>, {role}
      </h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.ctaContainer}>
        <button className={styles.ctaButton} onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
      <div className={styles.socials}>
        {/* Example Social Icon Links */}
        <a href="mailto:your.email@example.com" aria-label="Email" className={styles.icon}>
          📧
        </a>
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <img src="/linkedin.svg" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </section>
);

Home.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
};

Home.defaultProps = {
  name: "[Your Name]",
  role: "CEO of Skygea",
  description: "Expert in Finance & Digital Marketing. I help businesses grow and innovate in the digital age.",
  ctaText: "Get in Touch",
  onCtaClick: () => alert("Thanks for reaching out!"),
};

export default Home;
