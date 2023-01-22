import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import FilterButton from './FilterButton';
import FilterColumn from './FilterColumn';
import FilterOperator from './FilterOperator';
import FilterOrder from './FilterOrder';
import FilterValue from './FilterValue';

export default function FilterRow() {
  const { isLoading } = useContext(AppContext);
  return (
    <div
      className={ isLoading
        ? 'row mb-3 hidden'
        : 'row mb-3 justify-content-center' }
    >
      <FilterColumn />
      <FilterOperator />
      <FilterValue />
      <FilterButton />
      <FilterOrder />
    </div>
  );
}
