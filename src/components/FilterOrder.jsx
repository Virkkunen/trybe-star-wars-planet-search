import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterOrder() {
  const { filter, handleSort, handleClickSort } = useContext(SearchContext);
  return (
    <div className="col">
      <select
        className="dropdown-html"
        name="column"
        value={ filter.order.column }
        data-testid="column-sort"
        onChange={ handleSort }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <div className="form-check">
        <label className="form-check-label" htmlFor="ASC">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            id="ASC"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleSort }

          />
          ASC
        </label>
        <br />
        <label className="form-check-label" htmlFor="DESC">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            value="DESC"
            id="DESC"
            data-testid="column-sort-input-desc"
            onChange={ handleSort }

          />
          DESC
        </label>
      </div>
      <button
        className="btn btn-sm btn-primary"
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClickSort }
      >
        Ordenar
      </button>
    </div>
  );
}
