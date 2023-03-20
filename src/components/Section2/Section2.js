import Typography from '../Typography';
import styles from './Section2.module.css';
import Button from '../Button';
import Spacer from '../Spacer';
import { ReactComponent as PlayIcon } from './play.svg';
import React, { useState } from 'react';

function Section2() {
  const [isPlaying, setIsPlaying] = useState(false);
  console.log('Is playing:', isPlaying);
  const togglePlay = () => {
    console.log('On click handler called');
    setIsPlaying(!isPlaying);
  }
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.video}>
          <video src="https://assets.mojocrowe.com/adhoc_videos/MOJO_WHY.mp4" controls={true} controlsList="nodownload" autoPlay={isPlaying}/>
        </div>
        <div className={styles.copy}>
          <Typography variant="FuturaTitleXSmall">
            Why the mojo mindset course & app?
          </Typography>
          <Spacer size='medium' />
          <Typography variant="FuturaParagraphMedium">
            Why are there so many self-help books, apps and programs about confidence and happiness, but people still feel stuck?
          </Typography>
          <Spacer size='small' />
          <Typography> Because it's complex and it takes work. The Mojo Course and App gives people a unique simple and practical way to do that work.</Typography>
          <Spacer size='small' />
            <Typography>We're not a mindfulness app. We go deeper by helping you figure our who you are, what you want and how to get there.</Typography>

          <Spacer size='medium' />
          <Button variant='medium' onClick={togglePlay}>
            Watch now <PlayIcon className={styles.playIcon}/>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Section2;
