const styles = {
  FuturaParagraphMedium: {
    fontFamily: 'FuturaBTBook',
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: -0.4,
    lineHeight: '20px',
  },
};

function Typography(props) {
  const { children, variant = 'FuturaParagraphMedium' } = props;

  return (
    <div style={styles[variant]}>
      {children}
    </div>
  );
}

export default Typography;
