import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import SearchContext from '../context/SearchContext';
import TableItem from './TableItem';

export default function Table() {
  const { isLoading } = useContext(AppContext);
  const { filteredPlanets } = useContext(SearchContext);
  return (
    // { isLoading &&}
    <div
      className={
        isLoading
          ? 'row placeholder-wave col-12 gx-1'
          : 'row gx-1 justify-content-center'
      }
    >
      <table className="table table-striped table-dark table-hover table-sm align-middle">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rotation Period</th>
            <th scope="col">Orbital Period</th>
            <th scope="col">Diameter</th>
            <th scope="col">Climate</th>
            <th scope="col">Gravity</th>
            <th scope="col">Terrain</th>
            <th scope="col">Surface Water</th>
            <th scope="col">Population</th>
            <th scope="col">Films</th>
            <th scope="col">Created</th>
            <th scope="col">Edited</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>
          { (filteredPlanets)
          && filteredPlanets.map((planet) => (
            <TableItem
              key={ planet.name }
              planetName={ planet.name }
              rotation={ planet.rotation_period }
              orbital={ planet.orbital_period }
              diameter={ planet.diameter }
              climate={ planet.climate }
              gravity={ planet.gravity }
              terrain={ planet.terrain }
              water={ planet.surface_water }
              pop={ planet.population }
              films={ planet.films }
              created={ planet.created }
              edited={ planet.edited }
              url={ planet.url }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
