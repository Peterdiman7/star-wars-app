import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CardComponent from "../cards/StarshipCard";
import { toast } from "react-hot-toast";
import axios from "axios";

const StarshipDetails = () => {
  const url = "https://swapi.dev/api/starships/";

  const { id } = useParams();
  const [singleStarship, setSingleStarship] = useState("");

  useEffect(() => {
    const fetchStarship = async () => {
      try {
        const response = await axios(url + id);
        const data = response.data;
        setSingleStarship(data);
      } catch (error) {
        toast.error("Starship not found!");
      }
    };
    fetchStarship();
  }, []);
  return <CardComponent singleStarship={singleStarship} starshipId={id} />;
};

export default StarshipDetails;
