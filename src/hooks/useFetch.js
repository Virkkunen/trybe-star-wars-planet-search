import { useState } from 'react';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setError] = useState(null);

  // const fetchData2 = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch('https://swapi.dev/api/planets');

  //     if (!response.ok) {
  //       const apiError = new Error(response.status);
  //       apiError.response = response;
  //       throw apiError;
  //     }

  //     const json = await response.json();
  //     return json.results;
  //   } catch (error) {
  //     setError(errors);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const json = await response.json();
    setIsLoading(false);
    return json.results;
  };

  return {
    isLoading,
    // errors,
    fetchData,
  };
}
