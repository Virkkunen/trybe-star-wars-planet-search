import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './context/AppProvider';
import SearchProvider from './context/SearchProvider';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AppProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AppProvider>,
  );
