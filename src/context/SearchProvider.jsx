import PropTypes from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import useFilter from '../hooks/useFilter';
import AppContext from './AppContext';
import SearchContext from './SearchContext';

export default function SearchProvider({ children }) {
  const [filter, setFilter] = useState({
    name: '',
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const [filteredPlanets, setFilteredPlanets] = useState(null);
  const { planetsData } = useContext(AppContext);
  const { filterPlanets, filterColumn } = useFilter();

  const handleChange = ({ target }) => setFilter({
    ...filter,
    [target.name]: target.value,
  });

  const btnClick = () => {
    setFilteredPlanets(filterColumn(planetsData, filter));
  };

  useEffect(() => {
    if (filter.name) {
      setFilteredPlanets(filterPlanets(planetsData, filter.name));
      return;
    }
    setFilteredPlanets(null);
  }, [filter, planetsData]);

  return (
    <SearchContext.Provider
      value={ { filter, setFilter, filteredPlanets, handleChange, btnClick } }
    >
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
