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
        <option value="gt">Maior que</option>
        <option value="lt">Menor que</option>
        <option value="eq">Igual a</option>
      </select>
    </div>
  );
}
