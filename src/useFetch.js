import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setStarships(data.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [url]);
  return { starships };
};
