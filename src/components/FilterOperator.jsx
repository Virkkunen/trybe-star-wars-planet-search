import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterOperator() {
  const { filter, handleChange } = useContext(SearchContext);

  return (
    <div className="col">
      <select
        className="dropdown-html"
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
        value={ filter.comparison }
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}
