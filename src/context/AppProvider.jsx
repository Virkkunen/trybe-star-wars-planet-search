import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planetsData, setPlanetsData] = useState(null);
  const { error, isLoading, fetchData } = useFetch();

  useEffect(() => {
    const getPlanetsData = async () => {
      const pData = await fetchData();
      pData.forEach((planet) => delete planet.residents);
      setPlanetsData(pData);
    };
    getPlanetsData();
  }, []);

  return (
    <AppContext.Provider
      value={ { error, isLoading, planetsData } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AppProvider;
