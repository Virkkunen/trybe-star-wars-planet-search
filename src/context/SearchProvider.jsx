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
    order: {
      column: 'population',
      sort: 'ASC',
    },
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

  useEffect(() => {
    if (filtersApplied.length < 1) {
      setFilteredPlanets(planetsData);
    }

    const test = async (filters) => {
      // ganhei cidadania italia só com esse espaguete aqui
      let pFilter = planetsData;
      filters.forEach((f) => {
        pFilter = filterColumn(pFilter, f);
      });
      setFilteredPlanets(pFilter);
    };

    test(filtersApplied);
  }, [filtersApplied]);

  const removeFilter = ({ target: { name } }) => {
    setColumns([
      ...columns,
      name,
    ]);

    const unapplyFilter = (arr) => arr.filter((f) => (f.column !== name));
    setFiltersApplied(unapplyFilter(filtersApplied));
  };

  const removeAllFilters = () => setFiltersApplied([]);

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

  const handleSort = ({ target: { value, name } }) => {
    setFilter({
      ...filter,
      order: {
        ...filter.order,
        [name]: value,
      },
    });
  };

  const handleClickSort = () => {
    const { order: { column, sort } } = filter;
    // filtra só os com numeros
    const known = filteredPlanets.filter((planet) => planet[column] !== 'unknown');
    const unknown = filteredPlanets.filter((planet) => planet[column] === 'unknown');

    const sortedArr = known.sort((a, b) => ((sort === 'ASC')
      ? Number(a[column]) - Number(b[column])
      : Number(b[column]) - Number(a[column])));

    const sortedPlanets = [...sortedArr, ...unknown];
    setFilteredPlanets(sortedPlanets);
  };

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
        removeAllFilters,
        handleSort,
        handleClickSort,
      } }
    >
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};
