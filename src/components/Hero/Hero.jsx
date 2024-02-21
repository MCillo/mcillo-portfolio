/* eslint-disable no-unused-vars */
import React from 'react'

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hello, My name is Michael</h1>
                <p className={styles.description}>
                    I am a full-stack developer that loves to make fun and exciting apps. Contact me if you would like to learn more!</p>
                <a href="mailto:michael.cillo@me.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl('hero/heroImage.png')}
                alt='hero image of me'
                className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
