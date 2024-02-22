/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import styles from './About.module.css'
import { getImageUrl } from '../../utils'

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>A Little bit about Me</h2>
            <div className={styles.content}>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')}
                            alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')}
                            alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience working with databases and API's
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')}
                            alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple apps and webpages
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
