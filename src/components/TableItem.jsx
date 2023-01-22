import PropTypes from 'prop-types';
import React from 'react';

export default function TableItem(props) {
  const {
    planetName,
    rotation,
    orbital,
    diameter,
    climate,
    gravity,
    terrain,
    water,
    pop,
    films,
    created,
    edited,
    url,
  } = props;

  return (
    <tr>
      <td data-testid="planet-name">{planetName}</td>
      <td>{rotation}</td>
      <td>{orbital}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{water}</td>
      <td>{pop}</td>
      <td>{films}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{url}</td>
    </tr>
  );
}

TableItem.propTypes = {
  climate: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  films: PropTypes.instanceOf(Object).isRequired,
  gravity: PropTypes.string.isRequired,
  orbital: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  pop: PropTypes.string.isRequired,
  rotation: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  water: PropTypes.string.isRequired,
};
