import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterColumn() {
  const { filter, handleChange, columns } = useContext(SearchContext);

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
        { columns.map((col) => (
          <option
            value={ col }
            key={ col }
          >
            {col}
          </option>
        ))}
      </select>
    </div>
  );
}
