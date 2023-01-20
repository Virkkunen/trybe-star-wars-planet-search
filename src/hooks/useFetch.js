import { useState } from 'react';

export default function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/planets');

      if (!response.ok) {
        const apiError = new Error(response.status);
        apiError.response = response;
        throw apiError;
      }

      const json = await response.json();
      return json.results;
    } catch (error) {
      setError(errors);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errors,
    fetchData,
  };
}
