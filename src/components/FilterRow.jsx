import React from 'react';
import FilterButton from './FilterButton';
import FilterColumn from './FilterColumn';
import FilterOperator from './FilterOperator';
import FilterValue from './FilterValue';

export default function FilterRow() {
  return (
    <div
      className="row mb-3 justify-content-center"
    >
      <FilterColumn />
      <FilterOperator />
      <FilterValue />
      <FilterButton />
    </div>
  );
}
