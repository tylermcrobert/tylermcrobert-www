import { useState, useEffect } from 'react';
import fetchSiteData from 'util/fetchSiteData';

export default function useFetchedData() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetchSiteData().then(res => setData(res));
  }, []);

  return data;
}
