import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ email, linkedInUrl, linkedInText }) => {
  return (
    <section className={styles.contact} aria-label="Contact section">
      <h1>Contact Me</h1>
      <p>
        Email:{" "}
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          {email}
        </a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkedInText}
        </a>
      </p>
    </section>
  );
};

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  linkedInText: PropTypes.string,
};

Contact.defaultProps = {
  linkedInText: "linkedin.com/in/yourprofile",
};

export default Contact;
