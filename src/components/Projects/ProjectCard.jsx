// ProjectCard.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

import Modal from '@mui/material/Modal';

export const ProjectCard = ({
  project: { title, imageSrc, description, source, demo, caseStudy },
}) => {

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const openCaseStudy = () => {
    window.open(caseStudy, '_self');
  }

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
          <a href={demo} className={styles.link} target="blank" rel="noopener">
            Demo
          </a>
          <a href={source} className={styles.link} target="blank" rel="noopener">
            GitHub
          </a>
          {/* <a className={styles.link} onClick={handleOpen} >
            More Info!
          </a> */}

          <a className={styles.link} onClick={openCaseStudy} >
            More Info!
          </a>


          {/* <Modal
            open={open}
            onClose={handleClose}
          >
            <div className={styles.modal} onClick={handleClose}>
    
              <img className={styles.caseStudy} src={getImageUrl(caseStudy)} alt="" />

            </div>
          </Modal> */}
        </div>
        {/* End Modal Code */}


      </div>
    </div >
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
    caseStudy: PropTypes.string.isRequired,
  }).isRequired,
};