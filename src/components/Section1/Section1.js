import Typography from '../Typography';
import styles from './Section1.module.css';
import iphone1 from './iphone-1.png';
import iphone2 from './iphone-2.png';
import Button from '../Button';
import Spacer from '../Spacer';

function Section1() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.iphoneLeft}>
            <img src={iphone1} alt="The mojo app showing person surfing and list of mindset exercises." />
          </div>
          <div className={styles.iphoneRight}>
            <img src={iphone2} alt="The mojo app course at chapter 1, who am i?  and course progress at 100%" />
          </div>
        </div>
        <div className={styles.copy}>
          <Typography variant="FuturaTitleSmall">
            A simple approach to find happiness and confidence
          </Typography>
          <Spacer size='small'/>
          <Typography variant="NewYorkHeadingXSmall">
            3 Questions and 3 Mindsets to change your life
          </Typography>
          <Spacer size='medium'/>
          <Button variant='large'>
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
