import Typography from '../Typography';
import styles from './Section2.module.css';
import Button from '../Button';
import Spacer from '../Spacer';
import { ReactComponent as PlayIcon } from './play.svg';
import React, { useState } from 'react';

function Section2() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.video}>
          <video src="https://assets.mojocrowe.com/adhoc_videos/MOJO_WHY.mp4" controls={true} controlsList="nodownload" autoPlay={isPlaying} />
        </div>
        <div className={styles.copy}>
          <Typography variant="FuturaTitleXSmall">
            Why the mojo mindset course & app?
          </Typography>
          <Spacer size='medium' />
          <Typography variant="FuturaParagraphMedium">
            <p>
              Why are there so many self-help books, apps and programs about confidence and happiness, but people still feel stuck?
              <Spacer size='small' />
              <strong>Because it's complex and it takes work.</strong> The Mojo Course and App gives people a unique simple and practical way to do that work.
              <Spacer size='small' />
              We're not a mindfulness app. We go deeper by helping you figure our who you are, what you want and how to get there.
            </p>
          </Typography>
          <Spacer size='medium' />
          <Button variant='medium' onClick={togglePlay}>
            Watch now <PlayIcon className={styles.playIcon} />
          </Button>
        </div>
      </div>
      <div className={styles.quote}>
        <hr className={styles.divider}></hr>
        <Spacer size='medium' />
        <Typography variant="NewYorkHeadingSmall" style={{ color: "var(--color--dark-gray)" }}>
          "It changed the way that I live. It changed the way that I saw the world. And it changed the way that I saw myself."
        </Typography>
        <Spacer size='medium' />
        <Typography variant="Timberwolf28" style={{ color: "var(--color--gray)" }}>- Ash Barty</Typography>
        <Spacer size='medium' />
        <hr className={styles.divider}></hr>
      </div>
    </section>
  );
}

export default Section2;
