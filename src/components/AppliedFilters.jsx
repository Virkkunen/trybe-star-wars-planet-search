import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

export default function AppliedFilters() {
  const { filtersApplied } = useContext(SearchContext);

  return (
    <div className="row mb-3">
      <div className="col">
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
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
