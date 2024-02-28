import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add other details you want to display */}
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
