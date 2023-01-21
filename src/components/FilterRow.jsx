import React from 'react';
import FilterButton from './FilterButton';
import FilterNumber from './FilterNumber';
import FilterOperator from './FilterOperator';
import FilterValue from './FilterValue';

export default function FilterRow() {
  return (
    <div
      className="row mb-3 justify-content-center"
    >
      <FilterNumber />
      <FilterOperator />
      <FilterValue />
      <FilterButton />
    </div>
  );
}
