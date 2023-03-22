import Typography from '../Typography';
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.wrapper}>
        <div className={styles.container}>
          <Typography variant='FuturaParagraphSmall'>
            <nav className={styles.nav} role='navigation'>
              <a href="/" className={styles.navItem}>Terms & Conditions</a>
              <div className={styles.VerticalDivider}></div>
              <a href="/" className={styles.navItem}>Privacy Policy</a>
              <div className={styles.VerticalDivider}></div>
              <a href="/" className={styles.navItem}> ©  Copyright of Mojo Crowe 2022</a>
            </nav>
          </Typography>
        </div>
      </footer>
  );
}

export default Footer;
