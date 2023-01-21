import React from 'react';

export default function FilterButton() {
  return (
    <div
      className="col"
    >
      <button
        className="btn btn-primary"
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}
