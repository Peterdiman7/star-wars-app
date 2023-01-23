import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardComponent from '../cards/PlanetCard';

const Details = () => {
    const url = "https://swapi.dev/api/planets/";

    const { id } = useParams();
    const [singlePlanet, setSinglePlanet] = useState([]);
    
    useEffect(() => {
        fetch(url + id)
            .then(res => res.json())
            .then(data => setSinglePlanet(data));
    })
    return(
        <div>
            {<CardComponent singlePlanet={singlePlanet} />}
        </div>
    );
}

export default Details;