import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Link = ({ active, children, onClick }) => (
  <button
    className={styles.link}
    type="button"
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
