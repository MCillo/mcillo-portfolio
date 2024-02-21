import React, { useState } from 'react'

import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';
import { element } from 'prop-types';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt='menu-button'
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li >
            <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
          </li>
          <li >
            <a href="#experience" onClick={(e) => scrollToSection('experience', e)}>Experience</a>
          </li>
          <li >
            <a href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</a>
          </li>
          <li >
            <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
