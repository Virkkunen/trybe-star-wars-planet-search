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
  const [filtersApplied, setFiltersApplied] = useState([]);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const { planetsData } = useContext(AppContext);
  const { filterPlanets, filterColumn } = useFilter();

  useEffect(() => {
    if (planetsData) setFilteredPlanets(planetsData);
  }, [planetsData]);

  const removeFilter = ({ target: { name } }) => {
    setColumns([
      ...columns,
      name,
    ]);

    const unapplyFilter = (arr) => arr.filter((f) => (f.column !== name));
    setFiltersApplied(unapplyFilter(filtersApplied));
  };

  const handleChange = ({ target }) => {
    setFilter({
      ...filter,
      [target.name]: target.value,
    });
  };

  const btnClick = () => {
    setFilteredPlanets(filterColumn(filteredPlanets, filter));
    setFiltersApplied([
      ...filtersApplied,
      filter,
    ]);
    const newColumns = columns.filter((col) => !filter.column.includes(col));
    setColumns(newColumns);
    setFilter({
      ...filter,
      column: columns[0],
    });
  };

  useEffect(() => {
    if (filter.name) {
      setFilteredPlanets(filterPlanets(filteredPlanets, filter.name));
      return;
    }
    setFilteredPlanets(planetsData);
  }, [filter.name, planetsData]);

  return (
    <SearchContext.Provider
      value={ {
        filter,
        filteredPlanets,
        handleChange,
        btnClick,
        filtersApplied,
        columns,
        removeFilter,
      } }
    >
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
