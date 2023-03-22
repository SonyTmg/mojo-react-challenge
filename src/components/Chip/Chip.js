import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '../Typography';
import styles from './Chip.module.css';

function Chip(props) {
  const handleClick = (e) => {
    e.preventDefault()
    props.onClick()
  }

  return (
    <Typography variant='FuturaHeadingMedium'>
      <a href={props.href} onClick={handleClick} className={`${styles.wrapper} ${props.active && styles.active}`}>
        {props.children}
      </a>
    </Typography>
  )
}

Chip.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Chip;
