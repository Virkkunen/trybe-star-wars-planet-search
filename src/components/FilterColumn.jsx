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
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
    </div>
  );
}
