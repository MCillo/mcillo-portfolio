/* eslint-disable no-unused-vars */
import React from 'react'

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {

  // const resumeUrl = 'src/data/Cillo-Michael Resume.pdf'; // Development
  const resumeUrl = 'assets/Cillo-Michael Resume.pdf';  // Live


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, my name is Michael</h1>
        <p className={styles.description}>
          and I'm embarking on an exciting journey into the ever-evolving realm of full-stack web development. As an entry-level web developer, I bring a unique blend of experiences, combining my proficiency in retail and sales with the discipline and teamwork cultivated during my time in the military.
          <br />
          My career shift is driven by a passion for technology and problem-solving. While my previous roles honed my detail-oriented nature and communication skills through customer interactions and public speaking, my military service equipped me with a commitment to accountability and achieving excellence beyond standards.
          <br />
          I'm thrilled to channel my diverse background into creating innovative web solutions. Join me on this transformative journey as I embrace new challenges and contribute my skills to the dynamic field of web development!
        </p>
        <div className={styles.heroButtons}>
          <a href="mailto:michael.cillo@me.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={resumeUrl} download='Cillo-Michael resumeUrl.pdf' className={styles.resumeBtn}>
            My Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl('hero/mcillocartoonportrait.jpeg')}
        alt='hero cartoon image of me'
        className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
