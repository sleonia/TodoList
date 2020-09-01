import React from 'react';
import FilterLink from '../../Containers/FilterLink';
import styles from './style.module.css';
import Actions from '../../Constants/ActionTypes';

const Footer = () => (
  <div className={styles.footer}>
    <span>Show: </span>
    <FilterLink filter={Actions.ShowAll}>All</FilterLink>
    <FilterLink filter={Actions.ShowActive}>Active</FilterLink>
    <FilterLink filter={Actions.ShowCompleted}>Completed</FilterLink>
  </div>
);

export default Footer;
