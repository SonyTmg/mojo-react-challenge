import PropTypes from 'prop-types';
import Typography from '../Typography';

const variants = {
  default: {
    backgroundColor: 'black',
    color: 'white',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    padding: '4px 12px',
    border: 'none',
    cursor: 'pointer'
  },
  medium: {
    borderRadius: 32,
    height: 44,
  },
  large: {
    borderRadius: 44,
    height: 52,
  },
}

function Button(props) {
  return (
    <button onClick={props.onClick} style={{ ...variants['default'], ...variants[props.variant] }
    }>
      <Typography variant='FuturaHeadingSmall'>
        {props.children}
      </Typography>
    </button >
  )
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.string
}

export default Button;
