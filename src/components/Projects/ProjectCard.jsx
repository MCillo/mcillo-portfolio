/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// import { ProjectModal } from "../ProjectModal/ProjectModal";
import ProjectModal from "../ProjectModal/ProjectModal";


export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    console.log('Open Modal function is called');
    setModalOpen(true);
  };

  console.log('Rendering ProjectCard');

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.links}>

          <button onClick={openModal} className={styles.link}>
More Info
          </button>

          <a href={demo} className={styles.link} target="blank" rel="noopener">
            Demo
          </a>
          <a href={source} className={styles.link} target="blank" rel="noopener">
            Source
          </a>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal project={{ title, description }} onClose={closeModal} style={{ display: 'block' }} />
)}

    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};