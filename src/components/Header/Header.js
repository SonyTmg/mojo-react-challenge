import Chip from '../Chip'
import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from './logo.svg';

function Header() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.right}>
          <nav className={styles.nav} role='navigation'>
            <Chip href="/" onClick={() => setCurrentPath("/")} active={currentPath === '/'}>
              Home
            </Chip>
            <Chip href="/course" onClick={() => setCurrentPath("/course")} active={currentPath === '/course'}>
              Course & App
            </Chip>
            <Chip href="/for-work" onClick={() => setCurrentPath("/for-work")} active={currentPath === '/for-work'}>
              For Work
            </Chip>
            <Chip href="/merch" onClick={() => setCurrentPath("/merch")} active={currentPath === '/merch'}>
              Merch
            </Chip>
            <Chip href="/contact-us" onClick={() => setCurrentPath("/contact-us")} active={currentPath === '/contact-us'}>
              Contact us
            </Chip>
            <Chip href="/my-account" onClick={() => setCurrentPath("/my-account")} active={currentPath === '/my-account'}>
              My account
            </Chip>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
