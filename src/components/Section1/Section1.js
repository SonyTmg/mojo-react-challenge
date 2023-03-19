import Typography from '../Typography';
import styles from './Section1.module.css';

function Section1() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Typography>Section 1</Typography>
      </div>
    </section>
  );
}

export default Section1;
