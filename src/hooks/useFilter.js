export default function useFilter() {
  // const filterPlanets = (input, planetsData) => {
  //   const filter = planetsData
  //     .some((planet) => planet === input);
  //   return filter;
  // };

  const filterPlanets = (arr, filter) => arr.filter(
    ({ name }) => name.toLowerCase()
      .includes(filter.toLowerCase()),
  );

  const filterColumn = (arr, { col, op, val }) => arr.filter(
    (planet) => {
      // switch vai funcionar melhor, obrigado Josué
      switch (op) {
      case 'gt':
        return Number(val) > Number(planet[col]);
      case 'lt':
        return Number(val) < Number(planet[col]);
      case 'eq':
        return Number(val) === Number(planet[col]);
      default:
        return null;
      }
    },
  );

  return {
    filterPlanets,
    filterColumn,
  };
}
