import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import SearchProvider from './context/SearchProvider';
import Filter from './components/Filter';
import FilterRow from './components/FilterRow';
import AppliedFilters from './components/AppliedFilters';

function App() {
  return (
    <AppProvider>
      <SearchProvider>
        <div className="container-fluid">
          <Filter />
          <FilterRow />
          <AppliedFilters />
          <Table />
        </div>
      </SearchProvider>
    </AppProvider>
  );
}

export default App;
