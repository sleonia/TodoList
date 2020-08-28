import React from 'react';
import FilterLink from '../../Containers/FilterLink';
import { VisibilityFilters } from '../../Actions/index';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.ShowAll}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowActive}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowCompleted}>Completed</FilterLink>
  </div>
);

export default Footer;
