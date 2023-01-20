import React from 'react';
import Table from './components/Table';
import './App.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <Table />
      </div>
    </AppProvider>
  );
}

export default App;
