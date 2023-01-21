import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterColumn() {
  const { filter, handleChange } = useContext(SearchContext);

  return (
    <div
      className="col"
    >
      <select
        className="dropdown-html"
        name="column"
        id="column"
        data-testid="column-filter"
        value={ filter.column }
        onChange={ handleChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
    </div>
  );
}
