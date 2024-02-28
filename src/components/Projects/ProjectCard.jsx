/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PropTypes } from 'prop-types';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

import ProjectModal from "../Modal/Modal";

export const ProjectCard = ({
  project: { title, imageSrc, description, demo, source },
}) => {

  let [isModalOpen, setModalOpen] = useState(false);

  let openModal = () => {
    setModalOpen = (true);
  };

  let closeModal = () => {
    setModalOpen = (false);
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
        </div>
        <div className={styles.links}>
          <a href={demo} className={styles.link} target="blank" rel="noopener">
            Demo
          </a>
          <a href={source} className={styles.link} target="blank" rel="noopener">
            Source
          </a>
        </div>
      </div>
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