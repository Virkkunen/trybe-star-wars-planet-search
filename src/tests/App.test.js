import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { act } from 'react-dom/test-utils';
import AppProvider from '../context/AppProvider';
import SearchProvider from '../context/SearchProvider';

const spy = jest.spyOn(global, "fetch");

const mock = {
  results: [
    {
      name: 'Tatooine',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      climate: 'arid',
      gravity: '1 standard',
      terrain: 'desert',
      surface_water: '1',
      population: '200000',
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/4/',
        'https://swapi-trybe.herokuapp.com/api/films/5/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-09T13:50:49.641000Z',
      edited: '2014-12-20T20:58:18.411000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/1/',
    },
    {
      name: 'Alderaan',
      rotation_period: '24',
      orbital_period: '364',
      diameter: '12500',
      climate: 'temperate',
      gravity: '1 standard',
      terrain: 'grasslands, mountains',
      surface_water: '40',
      population: '2000000000',
      films: [
        'https://swapi-trybe.herokuapp.com/api/films/1/',
        'https://swapi-trybe.herokuapp.com/api/films/2/',
        'https://swapi-trybe.herokuapp.com/api/films/3/',
        'https://swapi-trybe.herokuapp.com/api/films/6/',
      ],
      created: '2014-12-10T11:35:48.479000Z',
      edited: '2014-12-20T20:58:18.420000Z',
      url: 'https://swapi-trybe.herokuapp.com/api/planets/2/',
    },
  ],
};

describe("Star Wars planet search", () => {
  test("inputs corretos", () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mock)
    })

    render(<App />);
    act(() => {
      const filterInput = screen.getByTestId('name-filter');

    });
    expect(filterInput).toBeInTheDocument();
  });
});
