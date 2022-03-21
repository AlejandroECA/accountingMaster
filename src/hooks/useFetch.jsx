import { useState, useEffect, useRef } from "react";

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = useRef(_options).current;

  useEffect(() => {
      
    console.log(options);
    const controller = new AbortControler();

    const fetchData = async () => {
      setisLoading(true);

      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = await res.json();

        setisLoading(false);
        setData(data);
        setError(null);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setisLoading(false);
          setError("Could not fetch the data");
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };

  }, [url, options]);

  return { data, isPending, error };
};
