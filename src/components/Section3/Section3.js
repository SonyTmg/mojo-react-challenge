import Typography from '../Typography';
import styles from './Section3.module.css';
import Spacer from '../Spacer';
import image1 from './img-1.png';
import image2 from './img-2.png';
import image3 from './img-3.png';

function Section3() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <Spacer size='medium' />
        <Typography variant="NewYorkHeadingSmall" style={{ color: "var(--color--dark-gray)" }}>
          Mojo's mindset course introduces you to the practice of 3 distinct mindsets: Connection, Purpose & Performance.
        </Typography>
        <Spacer size='medium' />
        <Typography variant="Timberwolf28" style={{ color: "var(--color--dark-gray)" }}>And these mindsets ultimately help you answer 3 simple but not so easy questions:</Typography>
        <Spacer size='medium' />
      </div>
      <div className={styles.container}>
        <card>
          <cardMedia>
          <img src={image1} alt="person" />
          </cardMedia>
          <cardContent>
            <Typography>Chapter 1</Typography>
            <Typography>Who Am I?</Typography>
              <Typography>
                <ul>
                <li>We dive into connection mindset and explore how we connect with ourselves before we connect with others. </li>
                <li>We learn to accept ourselves unconditionally and develop a bulletproof self-confidence.  </li>
                <li>We let go of imposter syndrome and FOPO (Fear of other people's opinions).  </li>
                </ul>
                </Typography>
            </cardContent>
        </card>
        <card>
          <cardMedia>
          <img src={image2} alt="person" />
          </cardMedia>
          <cardContent>
            <Typography>Chapter 2</Typography>
            <Typography>What Do I Want?</Typography>
              <Typography>
                <ul>
                <li>We tackle purpose mindser to figure out our 'why'.</li>
                <li>We identify our sweet spot of motivations (extrinsic and intrinsic) to redefine success.</li>
                <li>We unlock our core values to find a balance between achievement and fulfilment.</li>
                </ul>
                </Typography>
            </cardContent>
        </card>
        <card>
          <cardMedia>
          <img src={image3} alt="person" />
          </cardMedia>
          <cardContent>
            <Typography>Chapter 3</Typography>
            <Typography>How Do I Get There?</Typography>
              <Typography>
                <ul>
                <li>We create our A Game</li>
                <li>We develop a performance mindset to accept uncontrollables and focus back on controllables.</li>
                <li>We design and put our new operating system into action.</li>
                </ul>
                </Typography>
            </cardContent>
        </card>
      </div>
    </section>
  );
}

export default Section3;
