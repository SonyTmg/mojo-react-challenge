import Typography from '../Typography';
import styles from './Section4.module.css';
import image from './image3.png';
import Button from '../Button';
import Spacer from '../Spacer';

function Section4() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Typography variant="Timberwolf44">
            Exclusive videos from ben & Atheletes*
          </Typography>
          <Typography>Inspirational videos from athletes that have done this work before.</Typography>
          <Spacer size="xl" />
          <div className={styles.image}>
            <img src={image} alt="ben" />
          </div>
        </div>
        <div className={styles.copyContainer}>
          <div className={styles.copy}>
            <Typography variant="NewYorkHeadingSmall">
              The Mojo Course
            </Typography>
            <Spacer size='small' />
            <Typography variant="NewYorkHeadingSmall">
              3 Chapters. 17 Exercises
            </Typography>
            <Spacer size='medium' />
            <Typography variant="FuturaParagraphMedium">
              <p>
                A series of self-paced exercises and interactive videos, based on the exact 1:1 journey that Ben has taken global leaders and world-class athletes on.
                <Spacer size='small' />
                <strong>It's like having your own mindset coach in your pocket.</strong>
                <Spacer size='small' />
                Your investment in yourself is the same price as a coffee a week.
                <Spacer size='small' />
                $240 to unlock the full course, including a free 12-month Mojo membership.
                <Spacer size='small' />
                The cost of a membership is $15 per month thereafter.
                <Spacer size='small' />
                The membership includes:
                <ul>
                  <li>Full access to the Mojo Mindset Course</li>
                  <li>Acccess to all the premium content in the library</li>
                  <li>Members masterclasses with Ben Crowe</li>
                </ul>
              </p>
            </Typography>
            <Spacer size='medium' />
            <Button variant='large'>
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
