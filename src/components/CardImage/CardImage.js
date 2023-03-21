import PropTypes from 'prop-types';
import styles from './CardImage.module.css';

function CardImage(props) {
  return (
    <img src={props.src} alt={props.alt} width={352} height={234} className={styles.wrapper} />
  )
}

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default CardImage;
