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

  const filterColumn = (arr, { column, comparison, value }) => arr.filter(
    (planet) => {
      // switch vai funcionar melhor, obrigado Josué
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        console.log('error');
        return null;
      }
    },
  );

  return {
    filterPlanets,
    filterColumn,
  };
}
