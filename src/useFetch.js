import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url);
        const data = response.data;
        setData(data.results);
      } catch (error) {
        toast.error({});
        alert(error.response);
      }
    };
    fetchData();
  }, [url]);
  return { data };
}
