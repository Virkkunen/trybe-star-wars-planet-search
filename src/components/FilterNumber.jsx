import React from 'react';

export default function FilterNumber() {
  return (
    <div
      className="col"
    >
      <select
        className="dropdown-html"
        name="column"
        id="column"
        data-testid="column-filter"
      >
        <option value="population">Population</option>
        <option value="orbital_period">Orbital Period</option>
        <option value="diameter">Diameter</option>
        <option value="rotation_period">Rotation Period</option>
        <option value="surface_water">Surface Water</option>
      </select>
    </div>
  );
}
