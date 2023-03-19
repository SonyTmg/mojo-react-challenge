import Typography from '../Typography';
import styles from './Section1.module.css';
import iphone1 from './iphone-1.png';
import iphone2 from './iphone-2.png';

function Section1() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.images}>
          <div className={styles.iphoneLeft}>
            <img src={iphone1} alt="Iphone" />
          </div>
          <div className={styles.iphoneRight}>
            <img src={iphone2} alt="Iphone" />
          </div>
        </div>
        <div className={styles.copy}>
          <Typography variant="FuturaHeadingLarge">
            A simple approach to find happiness and confidence
          </Typography>
          <Typography variant="NewYorkHeadingXSmall">
            3 Questions and 3 Mindsets to change your life
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Section1;
