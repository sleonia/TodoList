import React from 'react';
import FilterLink from '../../Containers/FilterLink';
import styles from './style.module.css';
import Actions from '../../Constants/ActionTypes';

const Footer = () => (
  <div className={styles.footer}>
    <span>Show: </span>
    <FilterLink filter={Actions.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={Actions.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={Actions.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
