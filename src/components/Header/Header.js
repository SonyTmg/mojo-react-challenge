import Typography from '../Typography';
import React from 'react';
import styles from './Header.module.css';
import logo from './logo.svg';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <Typography variant='FuturaHeadingMedium'>
            <nav className={styles.nav}>
              <a href="#" className={styles.navItem}>Home</a>
              <a href="#" className={styles.navItem}>Course & App</a>
              <a href="#" className={styles.navItem}>For Work</a>
              <a href="#" className={styles.navItem}>Merch</a>
              <a href="#" className={styles.navItem}>Contact us</a>
              <a href="#" className={styles.navItem}>My account</a>
            </nav>
          </Typography>

        </div>
      </div>
    </header>
  );
}

export default Header;
