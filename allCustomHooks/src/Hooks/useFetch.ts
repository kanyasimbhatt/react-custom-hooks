import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Something ins't right`);
      }

      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [url]);

  return [data, isLoading, isError];
}
