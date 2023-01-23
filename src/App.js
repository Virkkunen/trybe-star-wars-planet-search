import React from 'react';
import Table from './components/Table';
import './App.css';
import Filter from './components/Filter';
import FilterRow from './components/FilterRow';
import AppliedFilters from './components/AppliedFilters';

function App() {
  return (
    <div className="container-fluid">
      <h1>teste</h1>
      <Filter />
      <FilterRow />
      <AppliedFilters />
      <Table />
    </div>
  );
}

export default App;
