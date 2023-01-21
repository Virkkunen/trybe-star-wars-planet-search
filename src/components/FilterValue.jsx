import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterValue() {
  const { filter, handleChange } = useContext(SearchContext);

  return (
    <div className="col">
      <div className="input-group">
        <span className="input-group-text">#</span>
        <input
          type="number"
          className="form-control"
          placeholder="12345"
          data-testid="value-filter"
          name="value"
          value={ filter.value }
          onChange={ handleChange }
        />
      </div>
    </div>
  );
}
