import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import AppProvider from '../context/AppProvider';
import SearchProvider from '../context/SearchProvider';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';


describe("Star Wars planet search", () => {
  beforeEach(async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData),
    });
    await act(async () => {
      render(
      <AppProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </AppProvider>
    )});
  });

  afterEach(() => jest.restoreAllMocks());

  test("Renderiza filtros", async () => {
    const filterInput = screen.getByTestId("name-filter");
    const filterColumn = screen.getByTestId("column-filter");
    const filterComparison = screen.getByTestId("comparison-filter");
    const filterValue = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");
    const sortColumnAsc = screen.getByTestId("column-sort-input-asc");
    const sortColumnDesc = screen.getByTestId("column-sort-input-desc");
    const sortColumn = screen.getByTestId("column-sort");
    const sortColumnBtn = screen.getByTestId("column-sort");

    expect(filterInput).toBeInTheDocument();
    expect(filterColumn).toBeInTheDocument();
    expect(filterComparison).toBeInTheDocument();
    expect(filterValue).toBeInTheDocument();
    expect(filterBtn).toBeInTheDocument();
    expect(sortColumnAsc).toBeInTheDocument();
    expect(sortColumnDesc).toBeInTheDocument();
    expect(sortColumn).toBeInTheDocument();
    expect(sortColumnBtn).toBeInTheDocument();
  });

  test("Renderiza a tabela", () => {
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });

  test("Filtro de nome", async () => {
    const filterInput = screen.getByTestId("name-filter");
    act(() => {
      userEvent.type(filterInput, "oo");
    });
    const planets = screen.getAllByTestId('planet-name');
    expect(planets).toHaveLength(2);
    
    act(() => {
      userEvent.clear(filterInput);
    });
    const planetsTwo = screen.getAllByTestId('planet-name');
    expect(planetsTwo).toHaveLength(10);
  });

  test("filtros aplicados", () => {
    const filterColumn = screen.getByTestId("column-filter");
    const filterComparison = screen.getByTestId("comparison-filter");
    const filterValue = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");

    act(() => {
      userEvent.selectOptions(filterColumn, "diameter");
      userEvent.selectOptions(filterComparison, 'maior que');
      userEvent.type(filterValue, '8900');
      userEvent.click(filterBtn);
    });

    const planets = screen.getAllByTestId('planet-name');
    const filterApplied = screen.getByTestId("filter");
    expect(filterApplied).toBeInTheDocument();
    expect(planets).toHaveLength(7);
  });

  test("Filtro igual", () => {
    const filterColumn = screen.getByTestId("column-filter");
    const filterComparison = screen.getByTestId("comparison-filter");
    const filterValue = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");

    act(() => {
      userEvent.selectOptions(filterColumn, "surface_water");
      userEvent.selectOptions(filterComparison, 'igual a');
      userEvent.type(filterValue, '40');
      userEvent.click(filterBtn);
    });

    const planets = screen.getAllByTestId('planet-name');
    expect(planets[0]).toHaveTextContent('Alderaan');
  });

  test("remove filtro", () => {
    const filterColumn = screen.getByTestId("column-filter");
    const filterComparison = screen.getByTestId("comparison-filter");
    const filterValue = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");

    act(() => {
      userEvent.selectOptions(filterColumn, "diameter");
      userEvent.selectOptions(filterComparison, 'maior que');
      userEvent.type(filterValue, '8900');
      userEvent.click(filterBtn);
    });

    const removeFilter = screen.getByTestId('button-remove-filters');
    userEvent.click(removeFilter);
    const planets = screen.getAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
  });

  test("multiplos filtros", () => {
    const filterColumn = screen.getByTestId("column-filter");
    const filterComparison = screen.getByTestId("comparison-filter");
    const filterValue = screen.getByTestId("value-filter");
    const filterBtn = screen.getByTestId("button-filter");

    act(() => {
      userEvent.selectOptions(filterColumn, "diameter");
      userEvent.selectOptions(filterComparison, 'maior que');
      userEvent.type(filterValue, '8900');
      userEvent.click(filterBtn);

      userEvent.clear(filterValue);

      userEvent.selectOptions(filterColumn, "population");
      userEvent.selectOptions(filterComparison, 'menor que');
      userEvent.type(filterValue, '10000000');
      userEvent.click(filterBtn);
    });

    const filterApplied = screen.getAllByTestId("filter");
    expect(filterApplied).toHaveLength(2);

    const removeFilterBtn = screen.getAllByRole('button', {name: 'X'});
    userEvent.click(removeFilterBtn[1]);
    const filterAppliedTwo = screen.getAllByTestId("filter");
    expect(filterAppliedTwo).toHaveLength(1);
  });

  test("ordena a tabela", () => {
    const sortColumn = screen.getByTestId('column-sort');
    const sortAsc = screen.getByTestId('column-sort-input-asc');
    const sortDesc = screen.getByTestId('column-sort-input-desc');
    const sortBtn = screen.getByTestId('column-sort-button');

    act(() => {
      userEvent.selectOptions(sortColumn, 'population');
      userEvent.click(sortAsc);
      userEvent.click(sortBtn);
    });

    const planets = screen.getAllByTestId('planet-name');
    expect(planets[0]).toHaveTextContent('Yavin IV');

    act(() => {
      userEvent.selectOptions(sortColumn, 'orbital_period');
      userEvent.click(sortDesc);
      userEvent.click(sortBtn);
    });
    const planetsTwo = screen.getAllByTestId('planet-name');
    expect(planetsTwo[0]).toHaveTextContent('Bespin');

  });
});
