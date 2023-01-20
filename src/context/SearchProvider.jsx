import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import useFilter from '../hooks/useFilter';
import AppContext from './AppContext';
import SearchContext from './SearchContext';

export default function SearchProvider({ children }) {
  const [filter, setFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { planetsData } = useContext(AppContext);
  const { filterPlanets } = useFilter();

  const handleChange = ({ target: { value } }) => setFilter(value);

  useEffect(() => {
    if (filter) {
      setFilteredPlanets(filterPlanets(planetsData, filter));
    }
  }, [filter, planetsData]);

  return (
    <SearchContext.Provider
      value={ {
        filter, setFilter, handleChange, filteredPlanets,
      } }
    >
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
