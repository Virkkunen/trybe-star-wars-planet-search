import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function AppliedFilters() {
  const { filtersApplied, removeFilter, removeAllFilters } = useContext(SearchContext);

  return (
    <div className={ filtersApplied.length >= 1 ? 'row mb-3' : 'row mb-3 hidden' }>
      <div className="col-3">
        {filtersApplied.length > 0 && filtersApplied.map((filter) => (
          <div
            key={ filter.column }
            data-testid="filter"
          >
            <span>{`${filter.column} `}</span>
            <span>{`${filter.comparison} `}</span>
            <span>{`${filter.value} `}</span>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              name={ filter.column }
              onClick={ removeFilter }
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="col-3">
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={ removeAllFilters }
          data-testid="button-remove-filters"
        >
          Apagar filtros
        </button>
      </div>
    </div>
  );
}
