import PropTypes from 'prop-types';
import styles from './CardContent.module.css';

function Card (props) {
  return (
    <div className={styles.wrapper}>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.element.isRequired
}

export default Card;
