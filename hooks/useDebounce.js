import {useEffect, useState} from 'react';

export default function useDebounce(dataSource, delay) {
  const [debouncedData, setDebouncedData] = useState(dataSource);

  useEffect(function () {
    const stId = setTimeout(() => {
      setDebouncedData(dataSource);
    }, delay);
    return () => clearTimeout(stId);
  }, [dataSource, delay]);

  return debouncedData;
}
