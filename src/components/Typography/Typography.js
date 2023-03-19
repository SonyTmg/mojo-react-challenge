import PropTypes from 'prop-types'

const styles = {
  FuturaTitleSmall: {

  },

  FuturaTitleXSmall: {},

  FuturaHeadingLarge: {
    fontFamily: 'FuturaBTExtraBlack',
    fontSize: 44,
    fontWeight: 400,
    lineHeight: '52.8px',
    textTransform: 'uppercase'
  },

  FuturaHeadingMedium: {
    fontFamily: 'FuturaBTMediumCondensed',
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '24px'
  },

  FuturaHeadingSmall: {},

  FuturaParagraphMedium: {
    fontFamily: 'FuturaBTBook',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: -0.4,
    lineHeight: '20px',
  },

  FuturaParagraphSmall: {},

  NewYorkHeadingSmall: {},

  NewYorkHeadingXSmall: {
    fontFamily: 'NewYork',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '28px'
  },

  Timberwolf44: {},

  Timberwolf28: {}
};

function Typography(props) {
  const { children, variant = 'FuturaParagraphMedium' } = props;

  return (
    <div style={styles[variant]}>
      {children}
    </div>
  );
}

Typography.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.string
}

export default Typography;
