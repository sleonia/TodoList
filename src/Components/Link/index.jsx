import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Link = ({ active, children, handleClick }) => (
  <button
    className={styles.link}
    type="button"
    onClick={handleClick}
    disabled={active}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Link;
