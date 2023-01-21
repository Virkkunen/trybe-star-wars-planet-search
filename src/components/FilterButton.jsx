import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function FilterButton() {
  const { btnClick } = useContext(SearchContext);

  return (
    <div
      className="col"
    >
      <button
        className="btn btn-primary"
        type="button"
        data-testid="button-filter"
        name="filter-button"
        onClick={ btnClick }
      >
        Filtrar
      </button>
    </div>
  );
}
