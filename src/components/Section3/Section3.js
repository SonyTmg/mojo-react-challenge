import Typography from '../Typography';
import Card from '../Card';
import CardImage from '../CardImage';
import CardContent from '../CardContent';
import styles from './Section3.module.css';
import Spacer from '../Spacer';
import image1 from './img-1.png';
import image2 from './img-2.png';
import image3 from './img-3.png';

function Section3() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.description}>
        <Typography variant="FuturaHeadingLarge" style={{ color: "var(--color--dark-gray)" }}>
          Mojo's mindset course introduces you to the practice of 3 distinct mindsets: Connection, Purpose & Performance.
        </Typography>
        <Spacer size='small' />
        <Typography variant="FuturaHeadingSmall" style={{ color: "var(--color--dark-gray)" }}>And these mindsets ultimately help you answer 3 simple but not so easy questions:</Typography>
      </div>
      <div className={styles.container}>
        <Card>
          <CardImage src={image1} alt="person" />
          <Spacer size='medium' />
          <CardContent>
            <Typography variant="FuturaParagraphSmall" style={{ color: "var(--color--light-gray)" }}>Chapter 1</Typography>
            <Typography variant="NewYorkHeadingSmall">Who Am I?</Typography>
            <Spacer size='medium' />
            <Typography variant="FuturaParagraphMedium" style={{ color: "var(--color--light-gray)" }}>
              <ul>
                <li>We dive into connection mindset and explore how we connect with ourselves before we connect with others. </li>
                <li>We learn to accept ourselves unconditionally and develop a bulletproof self-confidence.  </li>
                <li>We let go of imposter syndrome and FOPO (Fear of other people's opinions).  </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={image2} alt="person" />
          <Spacer size='medium' />
          <CardContent>
            <Typography variant="FuturaParagraphSmall" style={{ color: "var(--color--light-gray)" }}>Chapter 2</Typography>
            <Typography variant="NewYorkHeadingSmall">What Do I Want?</Typography>
            <Spacer size='medium' />
            <Typography variant="FuturaParagraphMedium" style={{ color: "var(--color--light-gray)" }}>
              <ul>
                <li>We tackle purpose mindset to figure out our 'why'.</li>
                <li>We identify our sweet spot of motivations (extrinsic and intrinsic) to redefine success.</li>
                <li>We unlock our core values to find a balance between achievement and fulfilment.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardImage src={image3} alt="person" />
          <Spacer size='medium' />
          <CardContent>
            <Typography variant="FuturaParagraphSmall" style={{ color: "var(--color--light-gray)" }}>Chapter 3</Typography>
            <Typography variant="NewYorkHeadingSmall">How Do I Get There?</Typography>
            <Spacer size='medium' />
            <Typography variant="FuturaParagraphMedium" style={{ color: "var(--color--light-gray)" }}>
              <ul>
                <li>We create our A Game.</li>
                <li>We develop a performance mindset to accept uncontrollables and focus back on controllables.</li>
                <li>We design and put our new operating system into action.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Section3;
