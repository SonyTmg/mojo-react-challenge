import PropTypes from 'prop-types';

const variants = {
  small: {
    marginTop: 12
  },
  medium: {
    marginTop: 24
  },
  large: {
    marginTop: 32
  },
  xl: {
    marginTop: 42
  }
}

function Spacer (props) {
  return (
    <div style={variants[props.size]}></div>
  )
}

Spacer.propTypes = {
  size: PropTypes.string
}

export default Spacer;
