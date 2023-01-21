import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SearchContext from '../context/SearchContext';

export default function Filter() {
  const { isLoading } = useContext(AppContext);
  const { filter, handleChange } = useContext(SearchContext);

  return (
    <div className="row my-3 justify-content-center">
      <div className="col-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="input-filter">Filtro</span>
          <input
            type="text"
            className="form-control"
            placeholder="Filtro..."
            onChange={ handleChange }
            value={ filter }
            data-testid="name-filter"
            disabled={ isLoading }
          />
        </div>
      </div>

    </div>
  );
}
