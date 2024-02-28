/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./ProjectModal.module.css";

const ProjectModal = ({ project, onClose }) => {
  console.log('Rendering ProjectModal');
  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2 className={styles.modalTitle}>{project.title}</h2>
        <p className={styles.modalDescription}>{project.description}</p>
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
