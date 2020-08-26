import React from 'react';
import FilterLink from '../Containers/FilterLink';
import { VisibilityFilters } from '../Actions/index';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.ShowAll}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowActive}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.ShowCompleted}>Completed</FilterLink>
  </div>
);

export default Footer;
