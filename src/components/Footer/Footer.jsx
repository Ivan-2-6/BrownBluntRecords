import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.separator}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brandColumn}>
            <h2 className={styles.brandLogo}>BBR</h2>
          </div>
          
          <nav className={styles.navColumn}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink} role="link">Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink} role="link">About</a>
              </li>
              <li className={styles.navItem}>
                <a href="#releases" className={styles.navLink} role="link">Releases</a>
              </li>
              <li className={styles.navItem}>
                <a href="#artists" className={styles.navLink} role="link">Artists</a>
              </li>
              <li className={styles.navItem}>
                <a href="#contact" className={styles.navLink} role="link">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className={styles.copyright}>
          <p>© 2025 Brown Blunt Records. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;