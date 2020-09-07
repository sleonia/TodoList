import React from 'react';
import FilterLink from '../../Containers/FilterLink';
import styles from './style.module.css';
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../Constants/ActionTypes';

const Footer = () => (
  <div className={styles.footer}>
    <span>Show: </span>
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
