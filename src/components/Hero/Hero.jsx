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
          {/* I am a full-stack developer that loves to make fun and exciting apps. Contact me if you would like to learn more! */}
          Although most people just call me Mike. I was raised in a military family before I joined the ARMY after High School. I spent 6 years in the ARMY as a CH-47 Chinook Flight Engineer. I've been deployed to numerous locations around the world. After I got out of the ARMY I earned my bachelors degree in Information Technology. My hobbies include woodworking, photography, and playing video games. I am 42 years old and currently work in the Beverage Industry at Augusta Liquors.
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
