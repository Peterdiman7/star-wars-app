import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PlanetCard from "../cards/PlanetCard";
import { toast } from "react-hot-toast"
import axios from "axios";

const Details = () => {
  const url = "https://swapi.dev/api/planets/";

  const { id } = useParams();
  const [singlePlanet, setSinglePlanet] = useState();

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await axios(url + id);
        const data = response.data;
        setSinglePlanet(data);
      } catch (error) {
        toast.error("Planet not found!");
      }
    };
    fetchPlanet();
  }, []);

  return <PlanetCard singlePlanet={singlePlanet}/>;
};

export default Details;
