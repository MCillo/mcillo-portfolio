// ProjectCard.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

// Start Modal Code
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// End Modal Code

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, caseStudy, overview, purposeContext, objective, approach, challenges, duration, credits },
}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            Source
          </a>
        </div>
        {/* Start Modal Code */}
        <div className={styles.modalLinks}>
          <a className={styles.modalLink} onClick={handleOpen} >More Info!</a>
          <Modal
            open={open}
            onClose={handleClose}
          // className={styles.modal}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          >
            <div className={styles.modal} onClick={handleClose}>
              <h1 className={styles.caseStudyTitle}>{caseStudy}</h1>
              <h3 className={styles.caseStudySection}>Overview</h3>
              <p className={styles.caseStudyDescription}>{overview}</p>
              <h3 className={styles.caseStudySection}>Purpose & Context</h3>
              <p className={styles.caseStudyDescription}>{purposeContext}</p>
              <h3 className={styles.caseStudySection}>Objective</h3>
              <p className={styles.caseStudyDescription}>{objective}</p>
              <h3 className={styles.caseStudySection}>Approach</h3>
              {/* <h5 className={styles.caseStudySkills}>{skills}</h5> */}
              <p className={styles.caseStudyDescription}>{approach}</p>
              <h3 className={styles.caseStudySection}>Challenges</h3>
              <p className={styles.caseStudyDescription}>{challenges}</p>
              <h3 className={styles.caseStudySection}>Duration</h3>
              <p className={styles.caseStudyDescription}>{duration}</p>
              <h3 className={styles.caseStudySection}>Credits</h3>
              <p className={styles.caseStudyDescription}>{credits}</p>
              <ul className={styles.skills}>
                {skills.map((skill, id) => {
                  return (
                    <li key={id} className={styles.skill}>
                      {skill}
                    </li>
                  );
                })}
              </ul>
              {/* image of case study */}
              {/* <img className={styles.caseStudy} src={getImageUrl(caseStudy)} alt="" /> */}

            </div>
          </Modal>
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