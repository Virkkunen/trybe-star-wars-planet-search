import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';
import SearchProvider from './context/SearchProvider';
import Filter from './components/Filter';

function App() {
  return (
    <AppProvider>
      <SearchProvider>
        <div className="container">
          <Filter />
          <Table />
        </div>
      </SearchProvider>
    </AppProvider>
  );
}

export default App;
