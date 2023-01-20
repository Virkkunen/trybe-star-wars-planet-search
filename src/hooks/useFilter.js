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

  return {
    filterPlanets,
  };
}
