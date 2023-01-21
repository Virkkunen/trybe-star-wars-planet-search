import React from 'react';

export default function FilterOperator() {
  return (
    <div className="col">
      <select
        className="dropdown-html"
        name="comparison"
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="gt">Maior que</option>
        <option value="lt">Menor que</option>
        <option value="eq">Igual a</option>
      </select>
    </div>
  );
}
