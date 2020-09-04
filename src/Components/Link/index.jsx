import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Link = ({ isActive, children, handleClick }) => (
  <button
    className={styles.link}
    type="button"
    onClick={handleClick}
    disabled={isActive}
  >
    {children}
  </button>
);

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Link;
